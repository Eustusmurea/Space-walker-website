import React, { useState, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Commander from "./commander";
import Engineer from "./engineer";
import Pilot from "./pilot";
import Specialist from "./specialist";
import douglas from "../assets/crew/image-douglas-hurley.png";
import ansari from "../assets/crew/image-anousheh-ansari.png";
import victor from "../assets/crew/image-victor-glover.png";
import mark from "../assets/crew/image-mark-shuttleworth.png";

import "../App.css";
import NavCrew from "../components/ui/navCrew";

const Crew = () => {
  const [imageSrc, setImageSrc] = useState(douglas);
  const location = useLocation();

  const loadImage = (section: string) => {
    switch (section) {
      case "Commander":
        setImageSrc(douglas);
        break;
      case "Engineer":
        setImageSrc(ansari);
        break;
      case "Pilot":
        setImageSrc(victor);
        break;
      case "Specialist":
        setImageSrc(mark);
        break;
      default:
        setImageSrc(douglas);
        break;
    }
  };

  useEffect(() => {
    const currentPath = location.pathname.split("/")[2];
    loadImage(currentPath);
  }, [location]);

  return (
    <div className="crew-body">
      <div>
        <div>
          <div className="title">
            <span className="title-number">02</span> MEET YOUR CREW
          </div>
          <div className="crew-content">
            <div className="explanation">
              <div className="crew-details">
                <Routes>
                  <Route path="Commander" element={<Commander />} />
                  <Route path="Mission specialist" element={<Specialist />} />
                  <Route path="Pilot" element={<Pilot />} />
                  <Route path="Flight Engineer" element={<Engineer />} />
                  <Route path="/" element={<Commander />} />
                </Routes>
              </div>

              <div className="crew-image">
                <img src={imageSrc} alt="crew" className="crew-image-element" />
              </div>
              <div className="Explanation">
                <NavCrew />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Crew;
