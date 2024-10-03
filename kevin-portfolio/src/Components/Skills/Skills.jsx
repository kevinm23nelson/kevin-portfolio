import React from 'react'
import './Skills.css'
import images from "../../Constants/images";

function Skills() {
  return (

    <main>
      <section className="glass">
        <div className="skills-container">

          <div className='section-title'>
            <h3 className='text-navy'>Skills <span className='text-dark'>  Experience</span></h3>
          </div>

          <div className="cards">
            <div className="card">
              <div className="front-end-card-info">
                <h2>Front-End</h2>
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
              <div className="back-end-card-info">
                <h2>Back-End</h2>
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