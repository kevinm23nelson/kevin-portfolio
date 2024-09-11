import React, { useState } from 'react';
import "./Navbar.css";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [toggleNav, setToggleNav] = useState(false);
  const location = useLocation();
  
  const collapseNavbar = () => setToggleNav(false);

  // Function to get the text based on the current route
  const getPageTitle = () => {
    switch (location.pathname) {
      case '/':
        return 'Home Page';
      case '/projects':
        return 'Projects Page';
      case '/about-me':
        return 'About Me Page';
      case '/message-me':
        return 'Message Me Page';
      default:
        return 'Test';
    }
  };

  return (
    <div className="navbar">
      <div className="container">
        <div className="navbar-content">
          <div className="work-and-toggler flex flex-sb">
            <Link to="/" className="navbar-work text-uppercase fw-7 text-white ls-2 fs-22">
              {getPageTitle()}
            </Link>
            <button
              type="button"
              className="navbar-open-btn text-white"
              onClick={() => setToggleNav(!toggleNav)}
            >
              <FaBars size={30} />
            </button>

            <div className={toggleNav ? "navbar-collapse show-navbar-collapse" : "navbar-collapse"}>
              <button
                type="button"
                className="navbar-close-btn text-white"
                onClick={collapseNavbar}
              >
                <FaTimes size={30} />
              </button>
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link to="/" className="nav-link text-white ls-1 text-uppercase fw-6 fs-22" onClick={collapseNavbar}>
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/projects" className="nav-link text-white ls-1 text-uppercase fw-6 fs-22" onClick={collapseNavbar}>
                    Projects
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/about-me" className="nav-link text-white ls-1 text-uppercase fw-6 fs-22" onClick={collapseNavbar}>
                    About Me
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/message-me" className="nav-link text-white ls-1 text-uppercase fw-6 fs-22" onClick={collapseNavbar}>
                    Message Me
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
