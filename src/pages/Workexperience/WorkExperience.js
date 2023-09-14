import React from 'react';
import './workexperience.css'

const WorkExperience = () => {
  return (
    <div className="work-experience-container">
      <h2>Work Experience</h2>
      <div className="job">
        <h3>Software Engineer</h3>
        <p>Company XYZ</p>
        <p>June 2022 - Present</p>
        <ul>
          <li>Developed and maintained web applications using React.js</li>
          <li>Collaborated with the backend team to integrate frontend with APIs</li>
          <li>Implemented responsive designs and user interfaces</li>
          <li>Participated in code reviews and provided feedback to team members</li>
        </ul>
      </div>
      <div className="job">
        <h3>Frontend Developer Intern</h3>
        <p>Company ABC</p>
        <p>January 2022 - April 2022</p>
        <ul>
          <li>Assisted in the development of a new company website using HTML, CSS, and JavaScript</li>
          <li>Worked on improving website performance and user experience</li>
          <li>Collaborated with the design team to implement UI/UX improvements</li>
          <li>Gained experience with version control using Git</li>
        </ul>
      </div>
      {/* Add more job experiences if needed */}
    </div>
  );
};

export default WorkExperience;
