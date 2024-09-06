import React, {useState} from 'react'
import "./Navbar.css"
import { Link } from "react-router-dom"
import { FaBars, FaTimes } from "react-icons/fa"


function Navbar() {
const [toggleNav, settoggleNav] = useState(false);
const collapseNavbar = () => settoggleNav(false);

    return (
        <div className="navbar">
            <div className="container">
                <div className="navbar-content">
                    <div className="work-and-toggler flex flex-sb">
                        <Link to="/" className="navbar-work text-uppercase fw-7 text-white ls-2 fs-22">Test</Link>
                        <button
                            type="button"
                            className="navbar-open-btn text-white"
                            onClick={() => settoggleNav(!toggleNav)}>
                                <FaBars size = {30}/>
                        </button>

                        <div className={toggleNav ? "navbar-collapse show-navbar-collapse " : "navbar-collapse"}>
                            <button 
                            type = "button"
                            className="navbar-close-btn text-white"
                            onClick={collapseNavbar}>
                                <FaTimes size = {30}/>
                            </button>
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link to = "/"
                                    className="nav-link text-white ls-1 text-uppercase fw-6 fs-22">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to = "/"
                                    className="nav-link text-white ls-1 text-uppercase fw-6 fs-22">Projects</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to = "/"
                                    className="nav-link text-white ls-1 text-uppercase fw-6 fs-22">About Me</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to = "/"
                                    className="nav-link text-white ls-1 text-uppercase fw-6 fs-22">Message Me</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar