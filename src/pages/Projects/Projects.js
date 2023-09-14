import React from "react";
import "./projects.css";

const Projects = () => {
  return (
    <>
      <h2 className="project">Projects</h2>
      <div className="projects-container" id="pj">
        <div className="project-card">
          <h2>GPT3 Website</h2>
          <p className="project-description">
            This project i made by using React components by using css,html and
            jvascript
          </p>
          <a
            href="https://amit1924.github.io/myreactwebsite/"
            target="_blank"
            rel="noopener noreferrer"
            className="project-button"
          >
            Click Here
          </a>
        </div>

        <div className="project-card">
          <h2>Nextjs Website</h2>
          <p className="project-description">
            i made this small website by using nextjs 13 its about fetching API
            and use css and html
          </p>
          <a
            href="https://nextjs-project-opal-zeta.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="project-button"
          >
            Click Here
          </a>
        </div>

        {/* Add two more project cards */}
        <div className="project-card">
          <h2>Authentication App</h2>
          <p className="project-description">
            i made this small project to just show the skills to use backend and
            'frontend tool'
          </p>
          <a
            href="https://amit1924.github.io/mybrand/"
            target="_blank"
            rel="noopener noreferrer"
            className="project-button"
          >
            Click Here
          </a>
        </div>

        <div className="project-card">
          <h2>Weather API</h2>
          <p className="project-description">
            This is very small project made by using Javascript language to
            fetch API from weather server
          </p>
          <a
            href="https://amit1924.github.io/javascript_project1/"
            target="_blank"
            rel="noopener noreferrer"
            className="project-button"
          >
            Click Here
          </a>
        </div>

        <div className="project-card">
          <h2>My Portfolio</h2>
          <p className="project-description">
            Made this simple website by using reactjs components HTML,CSS and
            using Javascript
          </p>
          <a
            href="https://amit1924.github.io/Myport/"
            target="_blank"
            rel="noopener noreferrer"
            className="project-button"
          >
            Click Here
          </a>
        </div>

        <div className="project-card">
          <h2>Bootstrap Website</h2>
          <p className="project-description">
            This Project is made by using Bootstrap tools using Javascript HTML
            and CSS
          </p>
          <a
            href="https://amit1924.github.io/Bootstrap_project/"
            target="_blank"
            rel="noopener noreferrer"
            className="project-button"
          >
            Click Here
          </a>
        </div>
      </div>
    </>
  );
};

export default Projects;
