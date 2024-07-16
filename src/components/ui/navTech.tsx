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
    <div className="tech-nav">
      <div>
        {Tech.map((member, index) => (
          <div
            key={index}
            className={`dot ${
              location.pathname.includes(member) ? "active" : ""
            }`}
            onClick={() => handleNavigation(member)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default NavTech;
