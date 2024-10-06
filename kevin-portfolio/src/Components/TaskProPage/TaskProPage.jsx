import React, { useState, useEffect } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { works } from "../../Constants/data";
import images from "../../Constants/images";
import '../UtahPage/ProjectPages.css'

function TaskProPage() {
    const TaskProWork = works.find(work => work.title === "TaskPro");
    const [isVisible, setIsVisible] = useState(false);
    const navigate = useNavigate();
    const worksRef = React.useRef(null);
    const location = useLocation();

    useEffect(() => {
        setIsVisible(true);
    }, []);

    useEffect(() => {
        if (location.pathname === '/taskpro' && worksRef.current) {
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
        <main className={`project-page-container ${isVisible ? 'fade-in' : 'fade-out'}`}>
            <section className="glass">
                <div className="skills-container">
                    {TaskProWork && (
                        <div className='work-item-details-page text-center'>
                            <h4 className='work-item-title'>{TaskProWork.title}</h4>
                            <div className='work-item-content'>
                                <img
                                    className="work-item-gif-details-page"
                                    src={TaskProWork.gif}
                                    alt={TaskProWork.title}
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

                                    <div className="icon-tooltip">
                                        <img className="skills-icon" src={images.redux} alt="Redux" />
                                        <span className="tooltip-text">Redux</span>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-info">
                                <h2 className="skills-color">Back-End</h2>
                                <div className="language-icons-sections">
                                    <div className="icon-tooltip">
                                        <img className="skills-icon" src={images.express} alt="Express" />
                                        <span className="tooltip-text">Express.js</span>
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
                        {TaskProWork && (
                            <div className="project-image">
                                <img
                                    className="work-item-detail-image"
                                    src={TaskProWork.image}
                                    alt={`${TaskProWork.title} details`}
                                    loading="lazy"
                                />
                            </div>
                        )}
                        <div className="project-description">
                            <span className="text-navy fs-24 fw-7">TaskPro </span>
                            <p className="fs-18 justify">
                                is a React application designed to help users efficiently manage their tasks. It allows users to add, edit, and delete tasks with varying priority levels, as well as filter them by completion status. Users can also view detailed information about each task, and the app displays advice fetched from an external API to enhance the task management experience.
                            </p>
                            <br />
                            <p className="fs-18 justify">
                                Technically, TaskPro is built using JavaScript, React, HTML5, CSS3, and Redux for global state management. These tools enable the smooth handling of task-related functionalities, ensuring users have a seamless and responsive experience while managing their tasks.
                            </p>
                        </div>
                    </div>
                </section>
                <div className="buttons-container" ref={worksRef}>
                    <div className="top-buttons">
                        <a href={TaskProWork?.link} target="_blank" rel="noopener noreferrer" className="project-button">
                            View Site
                        </a>
                        <a href={TaskProWork?.repo} target="_blank" rel="noopener noreferrer" className="project-button">
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

export default TaskProPage;