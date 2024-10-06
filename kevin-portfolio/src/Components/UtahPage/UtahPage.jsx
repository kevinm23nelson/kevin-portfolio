import React, { useState, useEffect } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { works } from "../../Constants/data";
import images from "../../Constants/images";
import './ProjectPages.css'

function UtahPage() {
    const utahWork = works.find(work => work.title === "Utah ABA Locator");
    const [isVisible, setIsVisible] = useState(false);
    const navigate = useNavigate();
    const worksRef = React.useRef(null);
    const location = useLocation();

    useEffect(() => {
        setIsVisible(true);
    }, []);

    useEffect(() => {
        if (location.pathname === '/utah' && worksRef.current) {
            worksRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }, [location.pathname]);

    const handleReturn = (e) => {
        e.preventDefault();
        setIsVisible(false);
        setTimeout(() => {
            navigate('/projects');
        }, 300);
    };
    return (
        <main className={`project-page-container ${isVisible ? 'fade-in' : 'fade-out'}`}>            <section className="glass">
            <div className="skills-container">
                {utahWork && (
                    <div className='work-item-details-page text-center'>
                        <h4 className='work-item-title'>{utahWork.title}</h4>
                        <div className='work-item-content'>
                            <img
                                className="work-item-gif-details-page"
                                src={utahWork.image2}
                                alt={utahWork.title}
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
                                    <img className="skills-icon" src={images.typescript} alt="TypeScript" />
                                    <span className="tooltip-text">TypeScript</span>
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
                    <div className="card">
                        <div className="card-info">
                            <h2 className="skills-color">Back-End</h2>
                            <div className="language-icons-sections">
                                <div className="icon-tooltip">
                                    <img className="skills-icon" src={images.ruby} alt="Ruby" />
                                    <span className="tooltip-text">Ruby</span>
                                </div>
                                <div className="icon-tooltip">
                                    <img className="skills-icon" src={images.rails} alt="Rails" />
                                    <span className="tooltip-text">Rails</span>
                                </div>
                                <div className="icon-tooltip">
                                    <img className="skills-icon" src={images.postgresql_logo} alt="PostgreSQL" />
                                    <span className="tooltip-text">PostgreSQL</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

            <div className="project-details-with-button">
                <section className="project-details-section">
                    <div className="project-details">
                        {utahWork && (
                            <div className="project-image">
                                <img
                                    className="work-item-detail-image"
                                    src={utahWork.gif}
                                    alt={`${utahWork.title} details`}
                                    loading="lazy"
                                />
                            </div>
                        )}
                        <div className="project-description">
                            <span className="text-navy fs-24 fw-7">The Utah ABA Locator </span>
                            <p className="fs-18 justify" ref={worksRef}>
                                is a website designed to assist parents in finding autism treatment providers across Utah. Users can search for providers based on criteria like county, insurance coverage, and availability of Spanish-speaking services. Each provider's specific details and locations are viewable using a Google Maps embedded API. The site also includes autism screening tools, such as the M-CHAT and CAST, along with educational resources about autism. Additionally, users can contact the admin via email using EmailJS, while medical providers can log in to update their own information.
                            </p> 
                            <br />
                            <p className="fs-18 justify" >
                                On the technical side, the front end of the site is built using React and TypeScript, while the back end is powered by Ruby on Rails and PostgreSQL. Medical providers and other authenticated users can log in via an authenticated Bearer token to securely access and manage their practice information. Once logged in, they can view and update their practice data by making PATCH requests to the back-end server, ensuring up-to-date information is available to parents seeking autism services.
                            </p>
                        </div>
                    </div>
                </section>
                <div className="buttons-container">
                    <div className="top-buttons">
                        <a href={utahWork?.link} target="_blank" rel="noopener noreferrer" className="project-button">
                            View Site
                        </a>
                        <a href={utahWork?.repo} target="_blank" rel="noopener noreferrer" className="project-button">
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

export default UtahPage;