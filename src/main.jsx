import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
<<<<<<< HEAD
import "./index.css";  // Your Tailwind or global CSS

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
=======
import "./index.css"; // Your Tailwind or global CSS
import { AuthProvider } from "./context/AuthContext";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
>>>>>>> 47b547097a4ea4dd1336c07e016fa1c70e94a1be
  </React.StrictMode>
);
