import { Link } from "react-router-dom";
import "../../navbar.css";
import logo from "../../assets/shared/logo.svg";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <header className="header">
        <div className="logo-container">
          <img src={logo} alt="Logo" className="logo" />
          <div className="divider-container">
            <hr className="divider-nav" />
          </div>
        </div>
        <nav className="nav">
          <ul className="navbar-list">
            <li>
              <Link to="/" className="navbar-link">
                00 Home
              </Link>
            </li>
            <li>
              <Link to="/destination" className="navbar-link">
                01 Destination
              </Link>
            </li>
            <li>
              <Link to="/crew" className="navbar-link">
                02 Crew
              </Link>
            </li>
            <li>
              <Link to="/technology" className="navbar-link">
                03 Technology
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
