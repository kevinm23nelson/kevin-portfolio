import React, { useRef, useEffect } from 'react';
import "./AboutMe.css";
import images from "../../Constants/images";
import { useLocation } from 'react-router-dom';

const AboutMe = () => {
    const headingRef = useRef(null); 
    const location = useLocation(); 

   
    useEffect(() => {
        if (location.pathname === '/about-me' && headingRef.current) {
            headingRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }, [location]);

    return (
        <div className='about section-p'>
            <div className="about-background">
                <div className='section-title'>
                    <h3 className='text-navy'>About <span className='text-dark'>Me</span></h3>
                </div>
                <div className='container'>
                    <div className='about-content'>
                        <div className='about-grid grid'>
                            <img src={images.Kevin} alt="" className='about-img mx-auto' />
                            <div className='section-title'>
                                <div className="text-background"><h3 className='text-navy' >Kevin <span className='text-dark'>Nelson</span></h3>
                                    <p className='text justify fw-4 fs-20 mx-auto'>As a software engineer with a Juris Doctorate and Business degree and a background in both legal/business operations and software development, I am uniquely positioned to excel in roles that bridge the gap between technology and business/legal industries.</p>
                                    <br />
                                    <p className='text justify fw-4 fs-20 mx-auto' ref={headingRef}>My experience as a Legal Operations Specialist and as an Operations Manager has provided me with invaluable insights into the user experience within law firms and professional retail businesses, equipping me with a deep understanding of the needs and challenges faced by professionals. This experience, combined with my technical knowledge of the Software Development Life Cycle, allows me to effectively design and implement solutions that enhance efficiency and drive innovation within any business.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;
