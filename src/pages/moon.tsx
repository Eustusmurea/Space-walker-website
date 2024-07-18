import React from "react";
import "../App.css";

const Moon = () => {
  return (
    <div>
      <div>
        <h1 className="planet-name heading-l"> MOON</h1>
        <p className="description desktop-body">
          See our planet as you've never seen it before. A perfect <br />
          relaxing trip away to help regain perspective and come <br />
          back refreshed. While you're there, take in some history <br />
          by visiting the Luna and Apollo 11 landing sites.
        </p>
        <hr className="divider" />
        <div className="stats">
          <div className="stat-item">
            <h3 className="stat-title">AVG. DISTANCE</h3>
            <p className="stat-value desktop-subheading-l">384,400 KM</p>
          </div>
          <div className="stat-item">
            <h3 className="stat-title">EST. TRAVEL TIME</h3>
            <p className="stat-value desktop-subheading-l">3 DAYS</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Moon;
