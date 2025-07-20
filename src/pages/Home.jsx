import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Categories from "../components/Categories";

export default function Home({ user, onRegister }) {
  return (
    <>
      <Navbar user={user} onRegister={onRegister} />
      <Hero />
      <Categories />
    </>
  );
}