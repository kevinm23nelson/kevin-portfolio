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
                    <img className="skills-icon" src={images.tailwindIcon} alt="Tailwind CSS" />
                    <span className="tooltip-text">Tailwind CSS</span>
                  </div>
                  <div className="icon-tooltip">
                    <img className="skills-icon" src={images.nextIcon} alt="Next.js" />
                    <span className="tooltip-text">Next.js</span>
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
                    <img className="skills-icon" src={images.mongodbIcon} alt="MongoDB" />
                    <span className="tooltip-text">MongoDB</span>
                  </div>

                  <div className="icon-tooltip">
                    <img className="skills-icon" src={images.node} alt="Node.js" />
                    <span className="tooltip-text">Node.js</span>
                  </div>

                  <div className="icon-tooltip">
                    <img className="skills-icon" src={images.express} alt="Express" />
                    <span className="tooltip-text">Express</span>
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
            <div className="card">
              <div className="card-info">
                <h2 className="skills-color">Currently Learning</h2>
                <div className="language-icons-sections">

                <div className="icon-tooltip">
                    <img className="skills-icon" src={images.cIcon} alt="C#" />
                    <span className="tooltip-text">C#</span>
                  </div>
                  {/* <div className="icon-tooltip">
                    <img className="skills-icon" src={images.salesforce} alt="Salesforce Developer" />
                    <span className="tooltip-text">Saleforce Developer</span>
                  </div>
                  <div className="icon-tooltip">
                    <img className="skills-icon" src={images.salesforce_apex} alt="Salesforce Apex" />
                    <span className="tooltip-text">Saleforce Apex</span>
                  </div>
                  <div className="icon-tooltip">
                    <img className="skills-icon" src={images.salesforce_lightning} alt="Salesforce Lightning Components" />
                    <span className="tooltip-text">Saleforce Lightning Components</span>
                  </div> */}
                  
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