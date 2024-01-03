import React from "react";
import { IconClock } from "@tabler/icons-react";
export default function Booking() {
  return (
    <div>
      <section id="booking-section" className="book-section">
        <div className="container">
          <div className="book-content">
            <div className="book-content__box-blue">
              <h3>Walk-In Hours</h3>
              <hr />
              <div className="content">
                <IconClock />
                <div className="time">
                  <h3>Monday-saturday</h3>
                  <p>10:00 am - 6:00 pm</p>
                </div>
              </div>
              <hr />
              <div className="content">
                <IconClock />
                <div className="time">
                  <h3>sunday</h3>
                  <p>9:00 am - 9:00 pm</p>
                </div>
              </div>
              <hr />
            </div>

            <div className="book-content__box-gray">
              <p>24 hours service</p>
              <h3>HealthCare Programs</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut
                esse ex labore voluptatem magnam maiores. Exercitationem dolor
                officia modi quod?
              </p>
              <button className="white-btn ms-lg-4 mt-lg-0 mt-4">
                View Services
              </button>
            </div>
            <div className="book-content__box-black">
              <p>24 hours Free Hotline</p>
              <h3>Emergency Cases</h3>
              <h2>+43(051)9057600</h2>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut
                esse ex labore voluptatem magnam maiores. Exercitationem dolor
                officia modi quod?
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
