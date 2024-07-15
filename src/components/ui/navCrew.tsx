import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const NavCrew = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const crewMembers = ['Commander', 'Specialist', 'Pilot', 'Engineer'];

    const handleNavigation = (path: string) => {
        navigate(`/crew/${path}`);
    };

    return (
        <div className="dot-nav">
            {crewMembers.map((member, index) => (
                <div
                    key={index}
                    className={`dot ${location.pathname.includes(member) ? 'active' : ''}`}
                    onClick={() => handleNavigation(member)}
                ></div>
            ))}
        </div>
    );
};

export default NavCrew;
