// src/pages/Home.jsx
import React from "react";
import Hero from "../components/Hero";
import ServicesSection from "../components/ServicesSection";
import HowItWorksUser from "../components/HowItWorksUser";
import HowItWorksPro from "../components/HowItWorksPro";
import PartnersSection from "../components/PartnersSection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesSection />
      <HowItWorksUser />
      <HowItWorksPro />
      <PartnersSection />
      <Footer />
    </>
  );
}