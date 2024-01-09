import React from "react";
import { IconQuote } from "@tabler/icons-react";
export default function Testimonial() {
  return (
    <div>
      <section id="testimonial-section" className="testimonial">
        <div className="container">
          <div className="testimonial-content">
            <div className="heading">
              <h3>Testimonials</h3>
              <p>What Our Clients Say</p>
              <hr />
            </div>
            <div className="comments">
              <div className="comment-box">
                <div className="comment">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Optio maiores iste veritatis delectus error fugit?
                </div>
                <div className="name-box">
                  <span className="quotes-icon">
                    <IconQuote width={30} height={30} />
                  </span>
                  <div className="name">- Bennedict Mathurin</div>
                </div>
              </div>
              <div className="comment-box">
                <div className="comment">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Nisi, quas?Lorem ipsum dolor sit amet.
                </div>
                <div className="name-box">
                  <span className="quotes-icon">
                    <IconQuote width={30} height={30} />
                  </span>
                  <div className="name">- Cillian Murphy</div>
                </div>
              </div>
              <div className="comment-box">
                <div className="comment">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Sapiente architecto, quae minima quibusdam sit incidunt!
                </div>
                <div className="name-box">
                  <span className="quotes-icon">
                    <IconQuote width={30} height={30} />
                  </span>
                  <div className="name">- Tom Hardy</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
