import React from "react";
import { Link } from "react-router-dom";
import "../../navbar.css";
import logo from "../../assets/shared/logo.svg";

const Navbar = () => {
  return (
    <div className="container1">
      <header className="header">
        <div>
          <img src={logo} alt="Logo"></img>
        </div>

        <nav className="nav">
          <ul className="navbar-list">
            <li>
              <Link to="/">00 Home</Link>
            </li>
            <li>
              <Link to="/destination">01 Destination</Link>
            </li>
            <li>
              <Link to="/crew">02 Crew</Link>
            </li>
            <li>
              <Link to="/technology">03 Technology</Link>
            </li>
            {/* <li>
              <Link to="/contacts">05 Contacts</Link>
            </li> */}
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
