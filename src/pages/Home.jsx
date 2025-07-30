// src/pages/Home.jsx
//Developed by Mr N~G~K
import React from "react"
import ServicesSection from "../components/ServicesSection"
import HowItWorksUser from "../components/HowItWorksUser"
import HowItWorksPro from "../components/HowItWorksPro"
import PartnersSection from "../components/PartnersSection"
import Footer from "../components/Footer"

export default function Home() {
  return (
    <>
      <ServicesSection />
      <HowItWorksUser />
      <HowItWorksPro />
      <PartnersSection />
      <Footer />
    </>
  )
}
