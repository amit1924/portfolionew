import React from "react";

import { AiOutlineDoubleLeft } from "react-icons/ai";

import { AiOutlineDoubleRight } from "react-icons/ai";
import "./layout.css";
import { useState } from "react";
import Menus from "../Menus/Menus";
import TechStack from "../../pages/Techstack/TechStack";
import About from "../../pages/About/About";
import Projects from "../../pages/Projects/Projects";

import Home from "../../pages/Home/Home";
import Education from "../../pages/Education/Education";
import Experience from "../../pages/Experience/Experience";
import Contact from "../../pages/Contact/Contact";
// import About from "../../pages/About/About";
import Footer from "../../Footer/Footer";



const Layout = () => {
  const [toggle, setToggle] = useState(true);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <>
   
      <div className="sidebar-section">
        <div className={toggle ? "sidebar-toggle sidebar" : "sidebar"}>
          <div className="sidebar-toggle-icons">
            <p onClick={handleToggle}>
              {toggle ? (
                <AiOutlineDoubleLeft size={30} />
              ) : (
                <AiOutlineDoubleRight size={30} />
              )}
            </p>
          </div>
          <Menus toggle={toggle} />
        </div>
        <div className="container">
     
          <Home />
          <About />
          <Experience />
          <TechStack />
          <Education />

          <Projects />
          <Contact />

          <Footer />
        </div>
      </div>
    </>
  );
};

export default Layout;
