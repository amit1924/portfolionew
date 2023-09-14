import React from 'react';
import './education.css';
import { BsPersonFill } from 'react-icons/bs';
import { MdSchool } from 'react-icons/md';

const Education = () => {
  return (
    <div className="education-container" id="edu">
      <h2 className="education-heading">Education</h2>

      <div className="education-item">
        <div className="education-icon">
          <BsPersonFill />
        </div>
        <div className="education-content">
          <h2 className="education-title">Bachelor degree in Electrical 
          Engineering</h2>
          <p className="education-school">RGPV University</p>
        </div>
        <div className="education-duration">
          <p>Attended Full Courses</p>
        </div>
      </div>

      <div className="education-line"></div>

      <div className="education-item">
        <div className="education-icon">
          <MdSchool />
        </div>
        <div className="education-content">
          <h2 className="education-title">10+2</h2>
          <p className="education-school">CBSE</p>
        </div>
        <div className="education-duration">
          <p>Attended Full Courses</p>
        </div>
      </div>

      {/* Add more education items as needed */}
    </div>
  );
};

export default Education;
