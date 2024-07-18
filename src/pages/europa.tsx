import React from "react";
import "../App.css";

const Europa = () => {
  return (
    <div>
      <div>
        <h1 className="planet-name heading-l">EUROPA</h1>
        <p className="description desktop-body">
          Europa is the smallest of the four Galilean moons orbiting Jupiter,{" "}
          <br />
          Europa is a winter lover's dream. With an icy surface its <br />
          perfect for a bit of ice skating, curling, hockey or simple <br />
          relaxation in your snug wintery cabin.
        </p>
        <hr className="divider" />
        <div className="stats">
          <div className="stat-item">
            <h3 className="stat-title">AVG. DISTANCE</h3>
            <p className="stat-value desktop-subheading-l">628 MIL KM</p>
          </div>
          <div className="stat-item">
            <h3 className="stat-title">EST. TRAVEL TIME</h3>
            <p className="stat-value desktop-subheading-l">3 YEARS</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Europa;
