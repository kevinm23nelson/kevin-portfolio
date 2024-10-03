import React from 'react';
import {work_process} from "../../Constants/data";
import "./WorkProcess.css";

function WorkProcess (){
  return (
    <div className='workprocess section-p bg-white' id = "workprocess">
      <div className='container'>
        <div className='workprocess-content'>
            <div className='section-title'>
                <h3 className='text-navy'>working <span className='text-dark'>process</span></h3>
            </div>

            <div className='workprocess-list grid'>
                {
                    work_process.map((workprocess, index) => {
                        return (
                            <div className='workprocess-item bg-grey text-center' key = {index}>
                                <div className='workprocess-item-title flex'>
                                    <span className='text-navy fw-7'>{index + 1}</span>
                                    <h3 className='text-dark fw-5'>{workprocess.title}</h3>
                                </div>
                                <p className='text'>{workprocess.paragraph}</p>
                                <img 
                                className="workprocess-image"
                                src = {workprocess.image} alt = "" />
                            </div>
                        )
                    })
                }
            </div>
        </div>
      </div>
    </div>
  )
}

export default WorkProcess