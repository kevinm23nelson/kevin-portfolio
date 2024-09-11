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
                            <h3 className='text-brown' >I'm <span className='text-dark'>Kevin</span></h3> {/* Add ref here */}
                            <p className='text mx-auto' ref={headingRef}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam culpa distinctio mollitia consectetur dolore! Iusto dolores reprehenderit at ad! Molestiae.</p>
                        </div>
                    </div>

                    <div className='about-grid grid'>
                        {about_stats.map((about_stat, index) => (
                            <div className='about-item text-center flex' key={index}>
                                <div className='about-item-icon'>
                                    <img src={about_stat.image} alt="" />
                                </div>
                                <div className='about-item-text text-left'>
                                    <h3 className='fs-24 ls-2'>{about_stat.value}</h3>
                                    <p className='text'>{about_stat.title}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className='about-grid grid'>
                        <div className='section-title'>
                            <h3 className='text-brown'>Video <span className='text-dark'>Presentation</span></h3>
                            <p className='text mx-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est molestias maxime tenetur, temporibus aspernatur, omnis expedita saepe sapiente adipisci laboriosam necessitatibus ullam eveniet asperiores nostrum.</p>
                        </div>

                        <div className='about-video'>
                            <video className='about-video' autoPlay loop ref={vidRef}>
                                <source src={video} type="video/mp4" />
                            </video>
                            <button type="button" className='vidPlayBtn flex flex-c' onClick={playVideo}>
                                <FaPlay className='text-brown' size={28} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;
