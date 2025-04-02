import React from "react";
import "./sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebarMain">
      <div className="sidebar">
        <div className="categoriesContainer">
          <div className="title">
            <p>Home</p>
          </div>
          <div className="categories">
            <div className="buttons">
              <a href="">
                <img
                  src="../../../../Images/AboutEEEEEEFill.svg"
                  alt="About Icon"
                />
                <p>About</p>
              </a>
              <a href="">
                <img
                  src="../../../../Images/SkillsEEEEEEFill.png"
                  alt="Skills Icon"
                />
                <p>Skills</p>
              </a>
              <a href="">
                <img
                  src="../../../../Images/ProjectsEEEEEEFill.png"
                  alt="Projects Icon"
                />
                <p>Projects</p>
              </a>
              <a href="">
                <img
                  src="../../../../Images/EducationEEEEEEFill.png"
                  alt="Education Icon"
                />
                <p>Education</p>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="socials">
        <div className="title">
          <p>Socials</p>
        </div>
        <div className="links">
          <a
            href="https://www.linkedin.com/in/christianloza/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="../../../../Images/LinkedInEEEEEE.svg"
              alt="LinkedIn Icon"
            />
            <p>LinkedIn</p>
          </a>
          <a
            href="https://github.com/Chris-Loza"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="../../../../Images/WhiteGithubNoOutline.svg"
              alt="GitHub Icon"
            />
            <p>GitHub</p>
          </a>
          <a
            href="../../../../Images/Resume032525.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="../../../../Images/WhiteResumeFill.png"
              alt="Resume Icon"
            />
            <p>Resume</p>
          </a>
        </div>
      </div>
      <div className="hireMe">
        <div className="textAndImageContainer">
          <p>Hire Me</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
