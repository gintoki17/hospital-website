import React from "react";

export default function Map() {
  return (
    <div>
      <section className="map" id="map-section">
        <iframe
          src="https://maps.google.com/maps?q=kmk%20hospital&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
          frameBorder="0"
          scrolling="no"
          className="location"
        ></iframe>
      </section>
    </div>
  );
}
