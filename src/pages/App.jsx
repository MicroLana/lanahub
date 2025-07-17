import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ServiceDetailsPage from "./pages/ServiceDetailsPage";
import AuthModal from "./components/AuthModal";

export default function App() {
  const [isAuthOpen, setAuthOpen] = useState(false);

  const handleRequireAuth = () => setAuthOpen(true);
  const handleCloseAuth = () => setAuthOpen(false);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/services/:serviceName"
          element={<ServiceDetailsPage onRequireAuth={handleRequireAuth} />}
        />
      </Routes>

      {isAuthOpen && <AuthModal onClose={handleCloseAuth} />}
    </Router>
  );
}
