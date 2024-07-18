import React from "react";

const Titan = () => {
  return (
    <div>
      <h1 className="planet-name heading-l"> TITAN</h1>
      <p className="description desktop-body">
        The only moon known to have a dense atmosphere other, <br />
        than Earth, Titan is a home away from home(just a few <br />
        hundred degrees colder!). As a bonus, you can get striking <br />
        views of the rings of Saturn.
      </p>
      <hr className="divider" />
      <div className="stats">
        <div className="stat-item">
          <h3 className="stat-title">AVG. DISTANCE</h3>
          <p className="stat-value desktop-subheading-l">1,426,000 KM</p>
        </div>
        <div className="stat-item">
          <h3 className="stat-title">EST. TRAVEL TIME</h3>
          <p className="stat-value desktop-subheading-l">6 YEARS</p>
        </div>
      </div>
    </div>
  );
};

export default Titan;
