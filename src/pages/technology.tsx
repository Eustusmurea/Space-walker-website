import { useEffect, useState } from "react";
import Capsule from "./capsule";
import Spaceport from "./spaceport";
import Vehicle from "./vehicle";

import vehicleImage from "./../assets/technology/image-launch-vehicle-portrait.jpg";
import capsuleImage from "./../assets/technology/image-space-capsule-portrait.jpg";
import spaceportImage from "./../assets/technology/image-spaceport-portrait.jpg";
import { Route, Routes, useLocation } from "react-router-dom";
import NavTech from "../components/ui/navTech";
import "./../App.css";

const Technology = () => {
  const [imageSrc, setImageSrc] = useState(vehicleImage);
  const location = useLocation();

  const loadImage = (section: string) => {
    switch (section) {
      case "Vehicle":
        setImageSrc(vehicleImage);
        break;
      case "Spaceport":
        setImageSrc(spaceportImage);
        break;
      case "Capsule":
        setImageSrc(capsuleImage);
        break;
      default:
        setImageSrc(vehicleImage);
        break;
    }
  };

  useEffect(() => {
    const currentPath = location.pathname.split("/")[2];
    loadImage(currentPath);
  }, [location]);

  return (
    <div className="technology-page">
      <div className="page-display">
        <div className="page-dims">
          <div className="title title-text">
            <span className="title-number">03</span> SPACE LAUNCH 101
          </div>
          <div className="numbered-section">
            <NavTech />
          </div>
          <div className="tech-content">
            <Routes>
              <Route path="Vehicle" element={<Vehicle />} />
              <Route path="Spaceport" element={<Spaceport />} />
              <Route path="Capsule" element={<Capsule />} />
              <Route path="/" element={<Vehicle />} />
            </Routes>
          </div>
          <div className="tech-image-container">
            <img src={imageSrc} alt="technology" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technology;
