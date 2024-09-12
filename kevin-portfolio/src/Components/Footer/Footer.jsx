import React from 'react';
import "./Footer.css";
import { FaGithub, FaSlack, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='footer bg-dark section-p' id="footer">
        <div className='container'>
            <div className='section-title'>
                <h3 className='text-brown'>Follow <span className='text-white'>Me</span></h3>
            </div>
            <div className='footer-content'>
                <ul className='footer-social-links flex flex-c'>
                    <li>
                        <a href="https://github.com/kevinm23nelson" className='text-white' target="_blank" rel="noopener noreferrer">
                            <FaGithub />
                        </a>
                    </li>
                    {/* <li>
                        <a href="/" className='text-white'>
                            <FaSlack />
                        </a>
                    </li> */}
                    <li>
                        <a href="https://www.linkedin.com/in/kevinnelson418/" className='text-white' target="_blank" rel="noopener noreferrer">
                            <FaLinkedin />
                        </a>
                    </li>
                </ul>
                <p className='text-center fs-14 text-white op-07 fw-3 ls-1 reserved-text'>All Rights Reserved &copy; 2024</p>
            </div>
        </div>
    </div>
  );
}

export default Footer;
