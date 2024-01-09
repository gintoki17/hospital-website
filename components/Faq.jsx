import React from "react";

export default function Faq() {
  return (
    <div>
      <section className="faq" id="faq-section">
        <div className="container">
          <div className="faq-content">
            <div className="consultation">
              <h3>Schedule a Consaltation</h3>
              <p>we're looking forward to hearing from you</p>
              <form>
                <select className="consultation__form">
                  <option value="#">Select Departments</option>
                  <option value="orthopedic Surgery">Orthopedic Surgery</option>
                  <option value="Gynecologist">
                    Obstetrician and Gynecologist
                  </option>
                  <option value="Radiologist">Radiologist</option>
                </select>
                <select className="consultation__form">
                  <option value="#">Select Doctors</option>
                  <option value="">Dr.Catherine Maria</option>
                  <option value="">Dr.Rodrigo Santoro</option>
                  <option value="">Dr.john Augustine</option>
                </select>
                <input type="text" placeholder="Name"></input>
                <input type="text" placeholder="Phone" />
                <input type="email" placeholder="E-mail" />
                <input type="date" placeholder="Date" />
              </form>
              <button className="appointment-btn">Make An Appointment</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
