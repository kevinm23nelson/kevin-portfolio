import React from 'react';
import "./Header.css";


function Header() {
    return (
        <div className="header" id="header">
            {/* navbar */}
            <div className="container flex">
                <div className="header-content">
                    <h2
                        className="text-uppercase text-white op-07 fw-6 ls-2">
                        Placeholder, placeholder, placeholder.
                    </h2>
                    <h1
                        className="header-title text-white fw-6">Hello, I'm Kevin <span
                        className="text-brown">Front-End Software Engineer</span> Fort Lauderdale, Florida
                    </h1>
                    <div className="btn-groups flex">
                        <button
                            type="button"
                            className="btn-item bg-brown fw-4 ls-2">
                            See Projects
                        </button>
                        <button
                            type="button"
                            className="btn-item bg-dark fw-4 ls-2">
                            Message Me
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header