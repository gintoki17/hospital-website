import React from "react";
import Caduceus from "../images/services/caduceus.png";
import Hospital from "../images/services/hospital.png";
import Mobile from "../images/services/mobile.png";
import Support from "../images/services/human-resources.png";
import Beds from "../images/services/hospital-bed.png";
import Pills from "../images/services/medicine.png";
export default function Services() {
  return (
    <div>
      <section id="services" className="services">
        <div className="container">
          <div className="services-content">
            <div className="services__heading">
              <h3>Full range of medical services</h3>
              <p>The New Standards Of Healthcare </p>
              <hr />
            </div>
            <div className="services__grids">
              <div className="grid">
                <img src={Caduceus} alt="icon" />
                <div className="content">
                  <h3>Emergency Help</h3>
                  <p>Lorem ipsum dolor sit amet.</p>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Officia eum voluptatibus illum ipsum cupiditate nulla?
                  </p>
                </div>
              </div>
              <div className="grid">
                <img src={Hospital} alt="icon" />
                <div className="content">
                  <h3>Hospital Treatment</h3>
                  <p>Lorem ipsum dolor sit amet.</p>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Officia eum voluptatibus illum ipsum cupiditate nulla?
                  </p>
                </div>
              </div>
              <div className="grid">
                <img src={Mobile} alt="icon" />
                <div className="content">
                  <h3>Mobile Healthcare</h3>
                  <p>Lorem ipsum dolor sit amet.</p>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Officia eum voluptatibus illum ipsum cupiditate nulla?
                  </p>
                </div>
              </div>
              <div className="grid">
                <img src={Support} alt="icon" />
                <div className="content">
                  <h3>Full Life Support</h3>
                  <p>Lorem ipsum dolor sit amet.</p>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Officia eum voluptatibus illum ipsum cupiditate nulla?
                  </p>
                </div>
              </div>
              <div className="grid">
                <img src={Beds} alt="icon" />
                <div className="content">
                  <h3>Modern Beds</h3>
                  <p>Lorem ipsum dolor sit amet.</p>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Officia eum voluptatibus illum ipsum cupiditate nulla?
                  </p>
                </div>
              </div>
              <div className="grid">
                <img src={Pills} alt="icon" />
                <div className="content">
                  <h3>Medication Pills</h3>
                  <p>Lorem ipsum dolor sit amet.</p>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Officia eum voluptatibus illum ipsum cupiditate nulla?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
