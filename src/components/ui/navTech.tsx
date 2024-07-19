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
    <div className="flex flex-col space-y-4">
      {Tech.map((tech, index) => (
        <div
          key={index}
          className={`pagination-tech
            ${
              location.pathname.includes(tech)
                ? "border-white bg-white text-dark-blue"
                : "border-light-gray"
            }`}
          onClick={() => handleNavigation(tech)}
        >
          <span
            className={`heading-s ${
              location.pathname.includes(tech)
                ? "text-dark-blue"
                : "text-light-gray"
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
