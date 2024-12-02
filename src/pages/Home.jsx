import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../sections/Hero";
import About from "../sections/About";
import Footer from "../components/Footer";
import Offer from "../sections/Offer";
import Achievements from "../sections/Achievements";
import Contact from "../sections/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Offer />
      <Achievements />
      <Contact />
      <Footer />

    </>
  );
}
