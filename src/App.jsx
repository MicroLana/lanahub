


import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import ServiceDetailsPage from "./pages/ServiceDetailsPage.jsx";
import AuthModal from "./components/AuthModal.jsx";

export default function App() {
  const [isAuthOpen, setAuthOpen] = useState(false);

  const openAuth = () => setAuthOpen(true);
  const closeAuth = () => setAuthOpen(false);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/services/:categoryKey"
          element={<ServiceDetailsPage onRequireAuth={openAuth} />}
        />
      </Routes>

      {isAuthOpen && <AuthModal onClose={closeAuth} />}
    </Router>
  );
}







//import React from "react";
//import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//import Home from "./pages/Home";
//import ServiceDetails from "./pages/ServiceDetails";
//import Navbar from "./components/Navbar";

//function App() {
  //return (
    //<Router>
      //<Navbar />
      //<Routes>
       // <Route path="/" element={<Home />} />
        //<Route path="/service/:id" element={<ServiceDetails />} />
      //</Routes>
   // </Router>
 // );/
//}

//export default App;






//import React from "react";
//import Home from "./pages/Home";

//function App() {
  //return <Home />;
//}

//export default App;