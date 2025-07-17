import React from "react";
import Navbar from "../components/Navbar.jsx";
import Hero from "../components/Hero.jsx";
import Categories from "../components/Categories.jsx";
import ServicesGrid from "../components/ServicesGrid.jsx";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Categories />
      <ServicesGrid />
    </>
  );
}
