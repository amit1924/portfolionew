import "./menu.css";
import Profile from "./dd.jpg";
import {
  FcHome,
  FcAbout,
  FcWorkflow,
  FcBiotech,
  FcReadingEbook,
  FcVideoProjector,
  FcContacts,
} from "react-icons/fc";
// import { Link } from 'react-router-dom';
import { Link } from "react-scroll";

const Menus = ({ toggle }) => {
  return (
    <>
      {toggle ? (
        <>
          <div className="navbar-profile-pic">
            <img src={Profile} alt="My Image" />
          </div>
          <div className="nav-items">
            {/* Add your menu items here */}
            <div className="nav-item">
              <div className="nav-link">
                <Link
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <FcHome />
                  Home
                </Link>
              </div>

              <div className="nav-link">
              <Link
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                <FcAbout />
                About
                </Link>
              </div>

              <div className="nav-link">
              <Link
                  to="wp"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                <FcWorkflow />
                Work Experience
                </Link>
              </div>

              <div className="nav-link">
              <Link
                  to="ts"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                <FcBiotech />
                Tech Stack
                </Link>
              </div>

              <div className="nav-link">
              <Link
                  to="edu"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                <FcReadingEbook />
                Education
                </Link>
              </div>

              <div className="nav-link">
              <Link
                  to="pj"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                <FcVideoProjector />
                Projects
                </Link>
              </div>

              <div className="nav-link">
              <Link
                  to="ct"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                <FcContacts />
                Contact Me
                </Link>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="nav-items">
          {/* Add your menu items here */}
          <div className="nav-item">
            <div className="nav-link">
              <FcHome />
            </div>
            <div className="nav-link">
              <FcAbout />
            </div>
            <div className="nav-link">
              <FcWorkflow />
            </div>
            <div className="nav-link">
              <FcBiotech />
            </div>
            <div className="nav-link">
              <FcReadingEbook />
            </div>
            <div className="nav-link">
              <FcVideoProjector />
            </div>
            <div className="nav-link">
              <FcContacts />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Menus;
