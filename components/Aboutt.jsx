import React from "react";
import Caduceus from "../images/services/caduceus.png";
import img1 from "../images/about/syringe.png";
import img2 from "../images/about/medical.png";
export default function Aboutt() {
  return (
    <div>
      <section id="about-section" className="about">
        <div className="container">
          <div className="about-content">
            <h2>About Our Mediacal Center</h2>
            <p>oncology optician plaque spinal</p>
            <p>
              Allergy shots and immunotherapy body type comea epidemies influeza
              iris iv occupation therapy puberty reb blood celld saliva
              urticaria shots eczema frostbite genes
              <hr />
              <div className="row">
                <img src={img1} alt="img" width={30} height={30} />
                <div className="text">
                  <h3>Abnominal blood pressure</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nisi, itaque!
                  </p>
                </div>
              </div>
              <div className="row">
                <img src={img2} alt="img" width={30} height={30} />
                <div className="text">
                  <h3>Abnominal blood pressure</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nisi, itaque!
                  </p>
                </div>
              </div>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
