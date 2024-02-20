import React from "react";
import "./experience.css";

const Experience = () => {
  return (
    <div className="experience-container" id="wp">
      <h2 className="experience-heading">Experience</h2>
      <div className="experience-item">
        <div className="experience-title">Front End Developer</div>
        <div className="experience-position">Veedcom India Private Limited</div>
        <div className="experience-duration">Aug-2022 Present</div>
      </div>

      <div className="experience-item">
        <div className="experience-title">Backend Developer</div>
        <div className="experience-position">Veedcom India Private Limited</div>
        <div className="experience-duration">Dec-2022 - Present</div>
      </div>

      <div className="experience-item">
        <div className="experience-title">Full Stack Developer</div>
        <div className="experience-position">Veedcom India Private Limited</div>
        <div className="experience-duration">March-2023 - present</div>
      </div>
    </div>
  );
};

export default Experience;
