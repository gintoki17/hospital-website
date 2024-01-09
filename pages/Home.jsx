import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Booking from "../components/Booking";
import Map from "../components/Map";
import Services from "../components/services";
import Aboutt from "../components/Aboutt";
import Testimonial from "../components/Testimonial";
import Counter from "../components/counter";
import Appointment from "../components/Appointment";
import Doctors from "../components/Doctors";
import Faq from "../components/Faq";
import Footer from "../components/Footer";
export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Booking />
      <Map />
      <Services />
      <Aboutt />
      <Testimonial />
      <Counter />
      <Appointment />
      <Doctors />
      <Faq />
      <Footer />
    </div>
  );
}
