import React, { useState, useRef, useEffect } from 'react';
import './Works.css';
import { works } from "../../Constants/data";
import { BsPlusLg } from "react-icons/bs";
import { ImCancelCircle } from 'react-icons/im';
import WorkProcess from '../WorkProcess/WorkProcess';
import { useLocation } from 'react-router-dom';

function Works() {
    const [imageModal, setImageModal] = useState(false);
    const [imageSource, setImageSource] = useState("");
    const worksRef = useRef(null);
    const location = useLocation();

    const setImageOnModal = (src) => {
        setImageModal(true);
        setImageSource(src);
    }

    useEffect(() => {
        if (location.pathname === '/projects' && worksRef.current) {
            worksRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }, [location.pathname]);

    return (
        <div className='work section-p bg-grey' id="work">
            <div className={imageModal ? "image-box show-image-box" : "image-box"}>
                <div className='image-box-content'>
                    <img src={imageSource} alt="" />
                    <span className='image-box-close-btn' onClick={() => setImageModal(false)}>
                        <ImCancelCircle size={30} />
                    </span>
                </div>
            </div>

            <div className='container'>
                <div className='work-content'>
                    <div className='section-title'>
                        <h3 className='text-brown'>Recent <span className='text-dark'>Work</span></h3>
                    </div>

                    <div className='work-list grid' ref={worksRef}>
                        {
                            works.map((work, index) => (
                                <div className='work-item text-center' key={index}>
                                    {/* Display title */}
                                    <h4 className='work-item-title'>{work.title}</h4>
                                    
                                    <div 
                                        className='work-item-content'
                                        onClick={() => setImageOnModal(work.gif)}
                                    >
                                        <img src={work.image} alt="" />
                                        <span className='work-item-icon'>
                                            <BsPlusLg size={38} className="text-brown" />
                                        </span>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
            <WorkProcess />
        </div>
    )
}

export default Works;
