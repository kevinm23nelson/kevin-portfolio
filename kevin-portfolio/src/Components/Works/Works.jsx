import React from 'react';
import './Works.css';
import { works } from "../../Constants/data";
import { BsPlusLg } from "react-icons/bs";
import WorkProcess from '../WorkProcess/WorkProcess';
import { useLocation, Link } from 'react-router-dom';

function Works() {
    const worksRef = React.useRef(null);
    const location = useLocation();

    React.useEffect(() => {
        if (location.pathname === '/projects' && worksRef.current) {
            worksRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }, [location.pathname]);

    return (
        <div className='work bg-grey section-p' id="work">
            <div className='container'>
                <div className='work-content'>
                    <div className='section-title'>
                        <h3 className='text-navy'>Recent <span className='text-dark'>Work</span></h3>
                    </div>

                    <div className='work-list grid' ref={worksRef}>
                        {
                            works.map((work, index) => (
                                <div className='work-item text-center' key={index}>
                                    <h4 className='work-item-title'>{work.title}</h4>

                                    <div
                                        to={work.link}
                                        className='work-item-content'
                                    >
                                        <img className="work-item-gif" src={work.gif} alt={work.title} />
                                      
                                    </div>
                                    <div className="work-item-info">
                                        <a
                                            href={work.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="work-item-link"
                                            title={`View deployed site: ${work.link}`}
                                        >
                                            Deployed Site
                                        </a>
                                        <a
                                            href={work.repo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="work-item-repo"
                                            title={`View repository: ${work.repo}`}
                                        >
                                            Repo
                                        </a>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
            <WorkProcess />
        </div>
    );
}

export default Works;
