import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import About from "../pages/About";
import Home from "../pages/Home";
import Team from "../pages/Team";
import Contact from "../pages/Contact";
import "../dist/css/styles.css";
export default function App() {
  return (
    <div>
      <>
        <Navbar />
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="team" element={<Team />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </>
    </div>
  );
}
