import React, {useRef, useState, useEffect} from 'react';
import "./AboutMe.css";
import images from "../../Constants/images";
import {about_stats} from "../../Constants/data";
import video from "../../Assets/Videos/video.mp4";
import {FaPlay} from "react-icons/fa";
import { useLocation } from 'react-router-dom';

const AboutMe = () => {
    const vidRef = useRef(null);
    const headingRef = useRef(null); // Create a ref for the heading
    const [toggleVideo, setToggleVideo] = useState(false);
    const location = useLocation(); // Get current location

    const playVideo = () => {
        setToggleVideo(!toggleVideo);
        if(toggleVideo) vidRef.current.play();
        else vidRef.current.pause();
    };

    // Smooth scroll to the heading when the component is loaded
    useEffect(() => {
        if (location.pathname === '/about-me' && headingRef.current) {
            headingRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }, [location]);

    return (
        <div className='about section-p'>
            <div className='section-title'>
                <h3 className='text-brown'>About <span className='text-dark'>Me</span></h3>
            </div>
            <div className='container'>
                <div className='about-content'>
                    <div className='about-grid grid'>
                        <img src={images.Kevin} alt="" className='about-img mx-auto' />
                        <div className='section-title'>
                            <h3 className='text-brown' >I'm <span className='text-dark'>Kevin Nelson</span></h3> {/* Add ref here */}
                            <p className='text mx-auto'>As a software engineer with a specialization in legal technology, I bring a unique blend of technical expertise and legal acumen to the table. With a Juris Doctorate and a background in both general business and software development, I am uniquely positioned to excel in roles that bridge the gap between technology and the legal industry.</p>

                            <p className='text mx-auto' ref={headingRef}>My experience as a Legal Operations Specialist has provided me with invaluable insights into the user experience within law firms, equipping me with a deep understanding of the needs and challenges faced by legal professionals. This experience, combined with my technical knowledge, allows me to effectively design and implement solutions that enhance efficiency and drive innovation in legal technology.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;
