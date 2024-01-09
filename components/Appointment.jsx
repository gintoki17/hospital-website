import React from "react";

export default function Appointment() {
  return (
    <div>
      <section className="appointment" id="appointment-section">
        <div className="container">
          <div className="appointment-content">
            <h3>The Worlds Leading Healthcare</h3>
            <p>The new Standards of Healthcare</p>
            <hr />
            <p className="text">
              Lorem ipsum dolor sit amet <span>consectetur</span> adipisicing
              elit. Libero accusantium fuga similique quae? Cupiditate,
              doloribus.
            </p>
            {/* Progress Bar */}
            <div className="progress">
              <div className="progress-top">
                <h4>Equipment imposed</h4>
                <h4>78%</h4>
              </div>
              <div className="progressBarStyle">
                <div className="filledProgressBarStyle"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
