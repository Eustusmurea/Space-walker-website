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
      <div className="main-content">
        <div>
          <h1 className="title">
            <span className="title-number">01</span> PICK YOUR DESTINATION
          </h1>
        </div>
        <div className="pagination">
          <NavTech />
        </div>
        <div className="content-container">
          <Routes>
            <Route path="vehicle" element={<Vehicle />} />
            <Route path="spaceport" element={<Spaceport />} />
            <Route path="capsule" element={<Capsule />} />
            <Route path="/" element={<Vehicle />} />
          </Routes>
        </div>
        <div className="tech-image-container">
          <img src={imageSrc} alt="destination" className="technology-image" />
        </div>
      </div>
    </div>
  );
};

export default Technology;
