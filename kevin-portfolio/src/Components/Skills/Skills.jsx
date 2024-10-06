import React, { useRef, useEffect } from 'react';
import './Skills.css'
import images from "../../Constants/images";
import { useLocation } from 'react-router-dom';


const Skills = () => {
  const headingRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/skills' && headingRef.current) {
      headingRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, [location]);
  return (

    <main>
      <section className="glass">
        <div className="skills-container">

          <div className='section-title'>
            <h3 className='text-navy'>Technical <span className='text-dark'>  Skills</span></h3>
          </div>

          <div className="cards">
            <div className="card">
              <div className="card-info">
                <h2 className="skills-color" ref={headingRef} >Front-End</h2>
                <div className="language-icons-sections">
                  <div className="icon-tooltip">
                    <img className="skills-icon" src={images.javascript} alt="JavaScript" />
                    <span className="tooltip-text">JavaScript</span>
                  </div>
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

                  <div className="icon-tooltip">
                    <img className="skills-icon" src={images.node} alt="" />
                    <span className="tooltip-text">Node.js</span>
                  </div>

                  <div className="icon-tooltip">
                    <img className="skills-icon" src={images.express} alt="" />
                    <span className="tooltip-text">Express.js</span>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}


export default Skills

{/* <div class="circle1"></div>
          <div class="circle2"></div> */}