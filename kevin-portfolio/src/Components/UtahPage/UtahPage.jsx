import React from 'react'
import { works } from "../../Constants/data";
import images from "../../Constants/images";
import './UtahPage.css'

function UtahPage() {
    const utahWork = works.find(work => work.title === "Utah ABA Locator");

    return (
        <main className="utah-page-container">
            <section className="glass">
                <div className="skills-container">
                    {utahWork && (
                        <div className='work-item text-center'>
                            <h4 className='work-item-title'>{utahWork.title}</h4>
                            <div className='work-item-content'>
                                <img
                                    className="work-item-gif"
                                    src={utahWork.gif}
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
                                    <img className="skills-icon" src={images.typescript} alt="TypeScript" />
                                    <img className="skills-icon" src={images.html5} alt="HTML5" />
                                    <img className="skills-icon" src={images.css3} alt="CSS3" />
                                    <img className="skills-icon" src={images.reactlogo} alt="React" />
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-info">
                                <h2 className="skills-color">Back-End</h2>
                                <div className="language-icons-sections">
                                    <img className="skills-icon" src={images.ruby} alt="Ruby" />
                                    <img className="skills-icon" src={images.rails} alt="Rails" />
                                    <img className="skills-icon" src={images.postgresql_logo} alt="PostgreSQL" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            <section className="project-details-section">
                <div className="project-details">
                    {utahWork && (
                        <div className="project-image">
                            {/* <img
                                className="work-item-detail-image"
                                src={utahWork.image2}
                                alt={`${utahWork.title} details`}
                                loading="lazy"
                            /> */}
                        </div>
                    )}
                    <div className="project-description">
                        <span className="text-navy fs-24 fw-7">Utah ABA Locator </span> 
                        <p className="fs-18 justify">
                            is a website designed to help parents locate autism treatment providers in Utah. 
                            Users can search for and filter providers by county, insurance, and availability 
                            of Spanish-speaking services, and for each provider the user can view specific 
                            details and locations using a Google Maps embedded API. The site will also feature 
                            autism screening tools, such as the M-CHAT and the CAST, along with educational 
                            resources about autism. Users can contact the admin via email using EmailJS. 
                            Medical providers also have the ability to log in with their own authenticated 
                            user login to edit their information as needed.
                        </p>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default UtahPage;