import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";

import Home from "./pages/Home.jsx";
import ServiceDetailsPage from "./pages/ServiceDetailsPage.jsx";
import AuthModal from "./components/AuthModal.jsx";

export default function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    return onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={user ? <Home /> : <AuthModal />} />
        <Route path="/service/:id" element={<ServiceDetailsPage />} />
      </Routes>
    </Router>
  );
}
