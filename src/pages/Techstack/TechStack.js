// TechStack.js

import React from 'react';
import './techstack.css';
import { FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs, FaDatabase, FaPython } from 'react-icons/fa';
import { DiMysql, DiMongodb } from 'react-icons/di';
import { SiExpress } from 'react-icons/si';

const TechStack = () => {
  return (
    <div className="tech-stack-container" id='ts'>
      <h3 className="tech-stack-heading">Tech Stack</h3>
      <div className="tech-stack-icons">
        <div className="tech-stack-icon">
          <FaHtml5 />
          <p>HTML5</p>
        </div>
        <div className="tech-stack-icon">
          <FaCss3 />
          <p>CSS3</p>
        </div>
        <div className="tech-stack-icon">
          <FaJs />
          <p>JavaScript</p>
        </div>
        <div className="tech-stack-icon">
          <FaReact />
          <p>React</p>
        </div>
        <div className="tech-stack-icon">
          <FaNodeJs />
          <p>Node.js</p>
        </div>
        <div className="tech-stack-icon">
          <FaDatabase />
          <p>Database</p>
        </div>
        <div className="tech-stack-icon">
          <DiMysql />
          <p>MySQL</p>
        </div>
        <div className="tech-stack-icon">
          <DiMongodb />
          <p>MongoDB</p>
        </div>
        <div className="tech-stack-icon">
          <SiExpress />
          <p>Express.js</p>
        </div>
        <div className="tech-stack-icon">
          <FaPython />
          <p>Python</p>
        </div>
       
      </div>
    </div>
  );
};

export default TechStack;
