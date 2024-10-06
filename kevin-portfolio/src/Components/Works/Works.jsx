import React, { useState, useEffect } from 'react';
import './Works.css';
import { works } from "../../Constants/data";
import { useLocation, useNavigate } from 'react-router-dom';

function Works() {
    const worksRef = React.useRef(null);
    const location = useLocation();
    const navigate = useNavigate();
    const [tooltip, setTooltip] = useState({ show: false, text: '', x: 0, y: 0 });
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);

        if (location.pathname === '/projects' && worksRef.current) {
            worksRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }, [location.pathname]);

    const handleCardClick = (work) => {
        setIsVisible(false); 
        setTimeout(() => {
            if (work.title === "Utah ABA Locator") {
                navigate('/utah');
            } else if (work.title === "TaskPro") {
                navigate('/taskpro');
            } else if (work.title === "CryptoPal") {
                navigate('/cryptopal');
            } else {
                navigate(work.link);
            }
        }, 400); 
    };

    const handleMouseMove = (e, title) => {
        setTooltip({
            show: true,
            text: `View Details for ${title}`,
            x: e.clientX,
            y: e.clientY,
        });
    };

    const handleMouseLeave = () => {
        setTooltip({ ...tooltip, show: false });
    };

    return (
        <div className={`work section-p ${isVisible ? 'fade-in' : 'fade-out'}`} id="work">
            <div className='container'>
                <div className='work-content'>
                    <div className='section-title'>
                        <h3 className='text-navy'>Recent <span className='text-dark'>Work</span></h3>
                    </div>

                    <div className='work-list grid' ref={worksRef}>
                        {works.map((work, index) => (
                            <div
                                className='work-item text-center'
                                key={index}
                                onClick={() => handleCardClick(work)}
                                onMouseMove={(e) => handleMouseMove(e, work.title)}
                                onMouseLeave={handleMouseLeave}
                                role="button"
                                tabIndex={0}
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter') handleCardClick(work);
                                }}
                            >
                                <h4 className='work-item-title'>{work.title}</h4>
                                <div className='work-item-content'>
                                    <img
                                        className="work-item-gif"
                                        src={work.image}
                                        alt={work.title}
                                        loading="lazy"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {tooltip.show && (
                <div
                className="custom-tooltip"
                style={{
                    left: `${tooltip.x}px`,
                    top: `${tooltip.y}px`,
                }}
            >
                {tooltip.text}
            </div>
            )}
        </div>
    );
}

export default Works;