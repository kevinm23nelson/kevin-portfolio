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
                  <img className="skills-icon" src={images.typescript} alt="" />
                  <img className="skills-icon" src={images.javascript} alt="" />
                  <img className="skills-icon" src={images.html5} alt="" />
                  <img className="skills-icon" src={images.css3} alt="" />
                  <img className="skills-icon" src={images.reactlogo} alt="" />
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-info">
                <h2 className="skills-color">Back-End</h2>
                <div className="language-icons-sections">
                  <img className="skills-icon" src={images.ruby} alt="" />
                  <img className="skills-icon" src={images.rails} alt="" />
                  <img className="skills-icon" src={images.node} alt="" />
                  <img className="skills-icon" src={images.express} alt="" />
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