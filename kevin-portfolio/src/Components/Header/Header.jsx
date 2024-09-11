import React from 'react';
import "./Header.css";
import { Link } from 'react-router-dom';
import Navbar from "../Navbar/Navbar"

function Header() {
    return (
        <div className="header flex flex-col" id="header">
            <Navbar />

            <div className="container flex">
                <div className="header-content">
                    <h2 className="text-uppercase text-white op-07 fw-6 ls-2">
                        Javascript, HTML, CSS, React, Redux, Typescript
                    </h2>
                    <h1 className="header-title text-white fw-6">
                        Kevin Nelson <span className="text-brown"> Software Engineer</span> Fort Lauderdale, Florida
                    </h1>
                    <div className="btn-groups flex">
                        {/* Wrap the button with Link */}
                        <Link to="/projects" className="btn-item bg-brown fw-4 ls-2">
                            See Projects
                        </Link>
                        
                        <Link to="/message-me" className="btn-item bg-dark fw-4 ls-2">
                            Message Me
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
