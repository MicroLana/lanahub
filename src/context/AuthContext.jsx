import { createContext, useContext, useState } from "react";
import config from "../config";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // or store just token, role, etc.
  const [loggedInUser, setLoggedInUser] = useState(null);
  const login = async (emailOrPhone, password) => {
    const auth = getAuth();
    const userCredential = await signInWithEmailAndPassword(
      auth,
      emailOrPhone,
      password
    );

    const idToken = await userCredential.user.getIdToken();
    // call Firebase or backend API to login
    const response = await fetch(
      `${config.apiBaseUrl}/lana-hub-api/${config.version}/verify-token`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${idToken}`,
        },
      }
    );

    if (!response.ok) throw new Error("Login failed");

    const data = await response.json();
    setLoggedInUser(data); // { uid, email, role, token? }
  };
  const register = async (userDoc) => {
    // call Firebase or backend API to register
    const response = await fetch(
      `${config.apiBaseUrl}/lana-hub-api/${config.version}/register-user`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userDoc),
      }
    );

    if (!response.ok) throw new Error("User Registration failed");

    const data = await response.json();
    console.log("User registered successfully", data);
    setUser(data);
  };
  const logout = () => {
    setUser(null);
    // Optional: remove token from storage, redirect, etc.
  };

  return (
    <AuthContext.Provider
      value={{ user, login, logout, register, loggedInUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
