import React, { useState } from 'react';
import "./Navbar.css";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [toggleNav, setToggleNav] = useState(false);
 
  
  const collapseNavbar = () => setToggleNav(false);

 

  return (
    <div className="navbar">
      <div className="container">
        <div className="navbar-content">
          <div className="work-and-toggler flex flex-sb">
            <div className="navbar-work text-uppercase fw-8 text-white ls-2 fs-28">
            </div>
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
                  <Link to="/" className="nav-link text-plainwhite ls-1 text-uppercase fw-6 fs-24" onClick={collapseNavbar}>
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/skills" className="nav-link text-plainwhite ls-1 text-uppercase fw-6 fs-24" onClick={collapseNavbar}>
                    Skills
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/projects" className="nav-link text-plainwhite ls-1 text-uppercase fw-6 fs-24" onClick={collapseNavbar}>
                    Projects
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/about-me" className="nav-link text-plainwhite ls-1 text-uppercase fw-6 fs-24" onClick={collapseNavbar}>
                    About Me
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/message-me" className="nav-link text-plainwhite ls-1 text-uppercase fw-6 fs-24" onClick={collapseNavbar}>
                    Contact Me
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
