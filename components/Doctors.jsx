import React, { useEffect, useState } from "react";
import doc1 from "../images/doctors/doc1.jpg";
import doc2 from "../images/doctors/doc2.jpg";
import doc3 from "../images/doctors/doc3.jpg";
export default function Doctors() {
  const [slideIndex, setSlideIndex] = useState(1);

  useEffect(() => {
    showSlides(slideIndex);
  }, [slideIndex]);

  const plusSlides = (n) => {
    let newIndex = slideIndex + n;
    if (newIndex > 3) {
      newIndex = 1;
    } else if (newIndex < 1) {
      newIndex = 3;
    }
    setSlideIndex(newIndex);
  };

  const currentSlide = (n) => {
    setSlideIndex(n);
  };

  const showSlides = (n) => {
    let i;
    let slides = document.getElementsByClassName("slides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
      setSlideIndex(1);
    }
    if (n < 1) {
      setSlideIndex(slides.length);
    }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "flex";
    dots[slideIndex - 1].className += " active";
  };
  return (
    <div>
      <section id="doctors-section" className="doctors">
        <div className="container">
          <div className="doctors-content">
            <div className="top-section">
              <h3>Our Doctors</h3>
              <p>Team Graduates with Ectensive Experience</p>
              <hr />
            </div>
            <div className="slider-container">
              <div className="slides fade">
                <img src={doc1} alt="" />

                <div className="info">
                  <div className="name">
                    Dr.John Augustine MBBS, D.Ortho, DNB
                  </div>{" "}
                  <p>Orthopedic Surgery</p>
                  <div className="op-time">
                    <h4>OP-Time : 9:30AM - 1:00PM</h4>
                    <h4> 4PM - 5PM (TUE & THU)</h4>
                  </div>
                  <button className="book-appointment">Book Appointment</button>
                </div>
              </div>
              <div className="slides fade">
                <img src={doc2} alt="doc-img" />

                <div className="info">
                  <div className="name">Dr.Catherine Maria MBBS, MS, DNB</div>{" "}
                  <p>Obstetrician and Gynecologist</p>
                  <div className="op-time">
                    <h4>
                      OP-Time : 9:30AM - 12:30PM, 5:00PM - 7PM (MON - FRI)
                    </h4>
                    <h4>9:30AM - 12:30, 4:PM - 5:00PM (SAT)</h4>
                  </div>
                  <button className="book-appointment">Book Appointment</button>
                </div>
              </div>
              <div className="slides fade">
                <img src={doc3} alt="" />

                <div className="info">
                  <div className="name">Dr.Rodrigo Santoro MBBS, DMRD</div>{" "}
                  <p>Radiologist </p>
                  <div className="op-time">
                    <h4>OP-Time : 9:30AM - 12:30PM</h4>
                    <h4>MONDAY - SATURDAY</h4>
                  </div>
                  <button className="book-appointment">Book Appointment</button>
                </div>
              </div>
              <button className="prev" onClick={() => plusSlides(-1)}>
                ❮
              </button>
              <button className="next" onClick={() => plusSlides(1)}>
                ❯
              </button>
            </div>
            <div style={{ textAlign: "center" }}>
              <span className="dot" onClick={() => currentSlide(1)}></span>
              <span className="dot" onClick={() => currentSlide(2)}></span>
              <span className="dot" onClick={() => currentSlide(3)}></span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
