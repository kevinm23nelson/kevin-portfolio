import React, { useState, useEffect } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { works } from "../../Constants/data";
import images from "../../Constants/images";
import '../UtahPage/ProjectPages.css'

function CryptoPalPage() {
    const CryptoPalWork = works.find(work => work.title === "CryptoPal");
    const [isVisible, setIsVisible] = useState(false);
    const navigate = useNavigate();
    const worksRef = React.useRef(null);
    const location = useLocation();

    useEffect(() => {
        setIsVisible(true);
    }, []);

    useEffect(() => {
        if (location.pathname === '/cryptopal' && worksRef.current) {
            worksRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }, [location.pathname]);
    const handleReturn = (e) => {
        e.preventDefault();
        setIsVisible(false);
        setTimeout(() => {
            navigate('/projects')
        }, 300); 
    };
    return (
        <main className={`project-page-container ${isVisible ? 'fade-in' : 'fade-out'}`}>
            <section className="glass">
                <div className="skills-container">
                    {CryptoPalWork && (
                        <div className='work-item-details-page text-center'>
                            <h4 className='work-item-title'>{CryptoPalWork.title}</h4>
                            <div className='work-item-content'>
                                <img
                                    className="work-item-gif-details-page"
                                    src={CryptoPalWork.gif}
                                    alt={CryptoPalWork.title}
                                    loading="lazy"
                                />
                            </div>
                        </div>
                    )}
                    <div className="cards fs-24 text-navy fw-7">
                        Tech Stack:
                        <div className="card">
                            <div className="card-info">
                                <h2 className="skills-color">Front-End</h2>
                                <div className="language-icons-sections">

                                    <div className="icon-tooltip">
                                        <img className="skills-icon" src={images.javascript} alt="JavaScript" />
                                        <span className="tooltip-text">JavaScript</span>
                                    </div>

                                    <div className="icon-tooltip">
                                        <img className="skills-icon" src={images.html5} alt="HTML5" />
                                        <span className="tooltip-text">HTML5</span>
                                    </div>

                                    <div className="icon-tooltip">
                                        <img className="skills-icon" src={images.css3} alt="CSS3" />
                                        <span className="tooltip-text">CSS3</span>
                                    </div>

                                    <div className="icon-tooltip">
                                        <img className="skills-icon" src={images.reactlogo} alt="React" />
                                        <span className="tooltip-text">React</span>
                                    </div>

                                </div>
                            </div>
                        </div>
                        {/* <div className="card">
                            <div className="card-info">
                                <h2 className="skills-color">Back-End</h2>
                                <div className="language-icons-sections">
                                    <div className="icon-tooltip">
                                    </div>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </section>
            <div className="project-details-with-button">
                <section className="project-details-section">
                    <div className="project-details">
                        {CryptoPalWork && (
                            <div className="project-image">
                                <img
                                    className="work-item-detail-image"
                                    src={CryptoPalWork.image}
                                    alt={`${CryptoPalWork.title} details`}
                                    loading="lazy"
                                />
                            </div>
                        )}
                        <div className="project-description">
                            <span className="text-navy fs-24 fw-7">CryptoPal </span>
                            <p className="fs-18 justify">
                                is a web application designed to help users explore and simulate investments in the top 100 cryptocurrencies without any financial risk. It provides users with detailed information about each cryptocurrency, the ability to manage favorites, and filters to help find currencies that meet specific criteria. With CryptoPal, users can practice making mock "purchases" and track their investments in real time, offering a safe environment to learn cryptocurrency trading before committing real money. The app also allows users to reset their trades and start fresh at any time.
                            </p>
                            <br />
                            <p className="fs-18 justify">
                                On the technical side, CryptoPal is built using React, React Router, JavaScript, HTML, and CSS. The Fetch API is utilized to retrieve up-to-date cryptocurrency data, and Cypress is used for testing. The app features responsive design, dynamic styling based on 24-hour change percentages, and persists favorites in local storage to ensure usability across various devices and sessions.
                            </p>
                        </div>
                    </div>
                </section>
                <div className="buttons-container" ref={worksRef}>
                    <div className="top-buttons">
                        <a href={CryptoPalWork?.link} target="_blank" rel="noopener noreferrer" className="project-button">
                            View Site
                        </a>
                        <a href={CryptoPalWork?.repo} target="_blank" rel="noopener noreferrer" className="project-button">
                            View Repo
                        </a>
                    </div>
                    <Link 
                        to="/projects" 
                        className="return-to-projects-button"
                        onClick={handleReturn}
                    >
                        Return to Projects
                    </Link>
                </div>
            </div>
        </main>
    );
}

export default CryptoPalPage;