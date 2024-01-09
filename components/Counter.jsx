import React, { useEffect } from "react";

export default function Counter() {
  const animateCounter = (id, start, end, duration) => {
    const counterElement = document.getElementById(id);

    if (!counterElement) {
      console.error(`Element with id '${id}' not found`);
      return;
    }

    const startTime = performance.now();

    const updateCount = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = elapsed / duration;

      if (progress < 1) {
        const value = Math.floor(start + progress * (end - start));
        counterElement.innerText = value;
        requestAnimationFrame(updateCount);
      } else {
        counterElement.innerText = end;
      }
    };

    updateCount(startTime);
  };

  useEffect(() => {
    // Example usage of animateCounter
    animateCounter("count1", 0, 12, 2000);
    animateCounter("count2", 0, 198, 1500);
    animateCounter("count3", 0, 1945, 2500);
    animateCounter("count4", 0, 6860, 1800);
  }, []);

  return (
    <div>
      <section className="counter">
        <div className="counter-section">
          <div className="container">
            <div className="rows text-center">
              <div className="row">
                <h2>
                  <span id="count1"></span>
                </h2>
                <p>Medical Branches</p>
              </div>
              <div className="row">
                <h2>
                  <span id="count2"></span>
                </h2>
                <p>Staff Members</p>
              </div>
              <div className="row">
                <h2>
                  <span id="count3"></span>
                </h2>
                <p>Successful Surgeries</p>
              </div>
              <div className="row">
                <h2>
                  <span id="count4"></span>
                </h2>
                <p>Patients a year</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
