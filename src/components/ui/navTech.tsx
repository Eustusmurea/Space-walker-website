import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

const NavTech = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const Tech = ["Vehicle", "Spaceport", "Capsule"];
  const handleNavigation = (path: string) => {
    navigate(`/technology/${path}`);
  };

  return (
    <div className="pagination-tech-container">
      {Tech.map((tech, index) => (
        <div
          key={index}
          className={`pagination-tech ${
            location.pathname.includes(tech) ? "active" : ""
          }`}
          onClick={() => handleNavigation(tech)}
        >
          <span
            className={`heading-s ${
              location.pathname.includes(tech) ? "active-text" : ""
            }`}
          >
            {index + 1}
          </span>
        </div>
      ))}
    </div>
  );
};

export default NavTech;
