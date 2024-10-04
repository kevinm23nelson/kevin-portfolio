import React from 'react';
import "./Header.css";
import { Link } from 'react-router-dom';
import Navbar from "../Navbar/Navbar"

function Header() {
    return (
        <div className="header flex flex-col" id="header">
            <Navbar />

            <div className="container">
                <div className="header-content">
                    <h1 className="header-title">
                        <span className="text-white fw-6">Kevin Nelson</span>
                        <br />
                        <span className="text-navy">Software Engineer</span>
                        <br />
                        <span className="text-white fw-6">Fort Lauderdale, Florida</span>
                    </h1>
                    
                    <div className="btn-groups">
                        <a 
                            href="https://docs.google.com/document/d/1W1QLLoQn85Pjdk5CDyWI4f_UFPQYnennlAEc2ULyswQ/edit?usp=sharing" 
                            className="btn-item bg-navy fw-5 ls-2" 
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            See Resume
                        </a>
                        
                        <Link 
                            to="/message-me" 
                            className="btn-item bg-dark fw-5 ls-2"
                        >
                            Contact Me
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;