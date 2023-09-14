import React from 'react';
import './home.css';
import Typewriter from 'typewriter-effect';
import ResumeFile from './My Resumee.pdf'; // Replace with the actual file path of your resume

const Home = () => {
  const handleDownloadResume = () => {
    // Programmatically create a link and click it to trigger the download
    const link = document.createElement('a');
    link.href = ResumeFile;
    link.download = 'My Resumee.pdf'; // Set the name of the downloaded file
    link.click();
  };

  return (
    <>
      <div className="container-fluid home-container" id='home'>
        <div className="container home-content">
          <h1>Hi, 🤘  I am a</h1>

          <h2>
            <Typewriter
              options={{
                strings: ['Frontend Developer', 'Mern Stack Developer', 'React js Developer','NodeJs Developer,Python Developer'],
                autoStart: true,
                loop: true,
              }}
            />
          </h2>
          <div className="home-btn">
            <button className="btn btn-hire">Hire Me</button>
            <button className="btn btn-cv" onClick={handleDownloadResume}>
              My Resume
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
