import React from "react";
import "./Map.css";

const Map = () => {
  return (
    <>
      <div className="mapContainer">
        <div className="mapHeading">Location (Visit our offline Library)</div>
        <div className="mapActual">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.2171005452683!2d85.34644961456544!3d27.710582431957693!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb195f1614bb0b%3A0x94a2ceff52dcb767!2sSuryaghat!5e0!3m2!1sen!2snp!4v1628233818215!5m2!1sen!2snp"
            width="100%"
            height="300px"
            style={{ border: "0" }}
            allowfullscreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default Map;
