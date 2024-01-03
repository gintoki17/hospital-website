import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Booking from "../components/Booking";
import Map from "../components/Map";
import Services from "../components/services";
import Aboutt from "../components/Aboutt";
export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Booking />
      <Map />
      <Services />
      <Aboutt />
    </div>
  );
}
