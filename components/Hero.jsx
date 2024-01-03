import React from "react";
import heroBg from "../images/hero/blur-hospital.jpg";
import HeroImg from "../images/hero/hero2.png";
export default function Hero() {
  return (
    <div>
      <section className="hero-section">
        <div className="container">
          <img src={heroBg} alt="hero-bg" className="bg-shape" />
          <div className="hero-content">
            <div className="hero-content__text">
              <h1>
                Argenta Health <span>Care Solutions</span>
              </h1>
              <p>
                Argenta Health Care Solutions is consistently ranked as one of
                the top hospitals on the nation by The Times of India and World
                Report
              </p>
              <div className="buttons">
                <button className="main-btn">About Center</button>
                <button className="white-btn ms-lg-4 mt-lg-0 mt-4">
                  View Services
                </button>
              </div>
            </div>
            <img src={HeroImg} alt="hero-img" />
          </div>
        </div>
      </section>
    </div>
  );
}
