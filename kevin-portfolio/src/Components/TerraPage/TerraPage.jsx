import React, { useState, useEffect } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { works } from "../../Constants/data";
import images from "../../Constants/images";
import '../UtahPage/ProjectPages.css'

function TerraHostingPage() {
    const terraWork = works.find(work => work.title === "Terra Client Portal");
    const [isVisible, setIsVisible] = useState(false);
    const navigate = useNavigate();
    const worksRef = React.useRef(null);
    const location = useLocation();

    useEffect(() => {
        setIsVisible(true);
    }, []);

    useEffect(() => {
        if (location.pathname === '/terra' && worksRef.current) {
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
                {terraWork && (
                    <div className='work-item-details-page text-center'>
                        <h4 className='work-item-title'>{terraWork.title}</h4>
                        <div className='work-item-content'>
                            <img
                                className="work-item-gif-details-page"
                                src={terraWork.image2}
                                alt={terraWork.title}
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
                                    <img className="skills-icon" src={images.tailwindIcon} alt="Tailwind CSS" />
                                    <span className="tooltip-text">Tailwind CSS</span>
                                </div>
                                <div className="icon-tooltip">
                                    <img className="skills-icon" src={images.reactlogo} alt="React" />
                                    <span className="tooltip-text">React</span>
                                </div>
                                <div className="icon-tooltip">
                                    <img className="skills-icon" src={images.nextIcon} alt="Next.js" />
                                    <span className="tooltip-text">Next.js</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-info">
                            <h2 className="skills-color">Back-End</h2>
                            <div className="language-icons-sections">
                                <div className="icon-tooltip">
                                    <img className="skills-icon" src={images.mongodbIcon} alt="MongoDB" />
                                    <span className="tooltip-text">MongoDB</span>
                                </div>

                                <div className="icon-tooltip">
                                    <img className="skills-icon" src={images.node} alt="Node.js" />
                                    <span className="tooltip-text">Node.js</span>
                                </div>
                                <div className="icon-tooltip">
                                    <img className="skills-icon" src={images.apolloIcon} alt="Apollo Server" />
                                    <span className="tooltip-text">Apollo Server</span>
                                </div>

                                <div className="icon-tooltip">
                                    <img className="skills-icon" src={images.graphqlIcon} alt="GraphQL" />
                                    <span className="tooltip-text">GraphQL</span>
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
                        {terraWork && (
                            <div className="project-image">
                                <img
                                    className="work-item-detail-image"
                                    src={terraWork.gif}
                                    alt={`${terraWork.title} details`}
                                    loading="lazy"
                                />
                            </div>
                        )}
                        <div className="project-description">
                            <span className="text-navy fs-24 fw-7">Terra Hosting Client Portal </span>
                            <p className="fs-18 justify" ref={worksRef}>
                                A centralized dashboard system that utilizes GraphQL Apollo Server to create an API gateway that unifies three distinct APIs into a single, cohesive platform. The portal provides both user and admin interfaces for monitoring machine status, managing data, account billing details, and tracking performance metrics.
                            </p>
                            <br />
                            <p className="fs-18 justify" >
                                Leveraging OAuth 2.0 for robust authentication and session management, this application delivers a secure, unified platform that seamlessly integrates machine monitoring and data management. Its intuitive interface harmonizes multiple data sources into a single dashboard, using MongoDB as a seed mapping system to match user accounts across several APIs, while maintaining enterprise-grade access controls, enabling efficient oversight of system operations.                            </p>
                        </div>
                    </div>
                </section>
                <div className="buttons-container">
                    <div className="top-buttons">
                        {/* <a href={terraWork?.link} target="_blank" rel="noopener noreferrer" className="project-button">
                            View Site
                        </a>
                        <a href={terraWork?.repo} target="_blank" rel="noopener noreferrer" className="project-button">
                            View Repo
                        </a> */}
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

export default TerraHostingPage;