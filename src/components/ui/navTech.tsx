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
          className={`w-12 h-12 rounded-full border-2 flex items-center justify-center cursor-pointer
            ${
              location.pathname.includes(tech)
                ? "border-white bg-white text-dark-blue"
                : "border-light-gray"
            }`}
          onClick={() => handleNavigation(tech)}
        >
          <span
            className={`text-xl ${
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
