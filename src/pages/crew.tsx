import React, { useState, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Commander from "./commander";
import Engineer from "./engineer";
import Pilot from "./pilot";
import Specialist from "./specialist";
import douglasImage from "../assets/crew/image-douglas-hurley.png";
import ansariImage from "../assets/crew/image-anousheh-ansari.png";
import victorImage from "../assets/crew/image-victor-glover.png";
import markImage from "../assets/crew/image-mark-shuttleworth.webp";

import "../App.css";
import NavCrew from "../components/ui/navCrew";

const Crew = () => {
  const [imageSrc, setImageSrc] = useState(douglasImage);
  const location = useLocation();

  const loadImage = (section: string) => {
    switch (section) {
      case "Commander":
        setImageSrc(douglasImage);
        break;
      case "Engineer":
        setImageSrc(ansariImage);
        break;
      case "Pilot":
        setImageSrc(victorImage);
        break;
      case "mark":
        setImageSrc(markImage);
        break;
      default:
        setImageSrc(douglasImage);
        break;
    }
  };

  useEffect(() => {
    const currentPath = location.pathname.split("/")[2];
    loadImage(currentPath);
  }, [location]);

  return (
    <div className="crew-body">
      <div className="page-display">
        <div className="page-dims">
          <div className="title title-text">
            <span className="title-number">02</span> MEET YOUR CREW
          </div>
          <div className="page">
            <div className="page-content">
              <div className="page-text">
                <Routes>
                  <Route path="Commander" element={<Commander />} />
                  <Route path="mark" element={<Specialist />} />
                  <Route path="Pilot" element={<Pilot />} />
                  <Route path="Engineer" element={<Engineer />} />
                  <Route path="/" element={<Commander />} />
                </Routes>
                <div className="crew-nav">
                  <NavCrew />
                </div>
              </div>
              <div className="crew-member">
                <img src={imageSrc} alt="crew" className="crew-image" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Crew;
