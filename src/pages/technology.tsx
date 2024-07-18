import React, { useEffect, useState } from "react";
import Capsule from "./capsule";
import Spaceport from "./spaceport";
import Vehicle from "./vehicle";

import vehicleImage from "./../assets/technology/image-launch-vehicle-landscape.jpg";
import capsuleImage from "./../assets/technology/image-space-capsule-landscape.jpg";
import spaceportImage from "./../assets/technology/image-spaceport-landscape.jpg";
import { Route, Routes, useLocation } from "react-router-dom";
import NavTech from "../components/ui/navTech";

const Technology = () => {
  const [imageSrc, setImageSrc] = useState(vehicleImage);
  const location = useLocation();

  const loadImage = (section: string) => {
    switch (section) {
      case "vehicle":
        setImageSrc(vehicleImage);
        break;
      case "spaceport":
        setImageSrc(spaceportImage);
        break;
      case "capsule":
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
          <div className="content-container">
            <Routes>
              <Route path="Vehicle" element={<Vehicle />} />
              <Route path="Spaceport" element={<Spaceport />} />
              <Route path="Capsule" element={<Capsule />} />
              <Route path="/" element={<Vehicle />} />
            </Routes>
          </div>
          <div className="tech-image-container flex-1">
            <img src={imageSrc} alt="destination" className="w-full h-auto" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technology;
