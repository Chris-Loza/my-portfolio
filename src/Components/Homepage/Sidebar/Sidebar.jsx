import React, { useEffect, useState } from "react";
import "./sidebar.css";

const Sidebar = ({ scrollToSection, refs }) => {
  const [applyBorder, setApplyBorder] = useState({
    active: false,
    button: "",
  });

  const handleOnMouseMove = (e) => {
    const { currentTarget: target } = e;
    const rect = target.getBoundingClientRect(),
      x = e.clientX - rect.left,
      y = e.clientY - rect.top;

    target.style.setProperty("--mouse-x", `${x}px`);
    target.style.setProperty("--mouse-y", `${y}px`);
  };

  useEffect(() => {
    const cursorElements = document.querySelectorAll(".cursorEff");
    cursorElements.forEach((card) => {
      card.addEventListener("mousemove", handleOnMouseMove);
    });
  }, []);

  return (
    <div className="sidebarMain">
      <div className="sidebar">
        <div className="categoriesContainer cursorEff">
          <div className="title">
            <p>Home</p>
          </div>
          <div className="categories">
            <div className="buttons">
              <a
                className={`${
                  applyBorder.active && applyBorder.button === "About"
                    ? "border"
                    : ""
                }`}
                href=""
                onClick={(e) => {
                  e.preventDefault();
                  setApplyBorder({
                    active: true,
                    button: "About",
                  });
                  scrollToSection(refs.aboutRef);
                }}
              >
                <img
                  src="../../../../Images/AboutEEEEEEFill.svg"
                  alt="About Icon"
                />
                <p>About</p>
              </a>
              <a
                className={`${
                  applyBorder.active && applyBorder.button === "Skills"
                    ? "border"
                    : ""
                }`}
                href=""
                onClick={(e) => {
                  e.preventDefault();
                  setApplyBorder({
                    active: true,
                    button: "Skills",
                  });
                  scrollToSection(refs.skillsRef);
                }}
              >
                <img
                  src="../../../../Images/SkillsEEEEEEFill.png"
                  alt="Skills Icon"
                />
                <p>Skills</p>
              </a>
              <a
                className={`${
                  applyBorder.active && applyBorder.button === "Projects"
                    ? "border"
                    : ""
                }`}
                href=""
                onClick={(e) => {
                  e.preventDefault();
                  setApplyBorder({
                    active: true,
                    button: "Projects",
                  });
                  scrollToSection(refs.projectsRef);
                }}
              >
                <img
                  src="../../../../Images/ProjectsEEEEEEFill.png"
                  alt="Projects Icon"
                />
                <p>Projects</p>
              </a>
              <a
                className={`${
                  applyBorder.active && applyBorder.button === "Education"
                    ? "border"
                    : ""
                }`}
                href=""
                onClick={(e) => {
                  e.preventDefault();
                  setApplyBorder({
                    active: true,
                    button: "Education",
                  });
                  scrollToSection(refs.educationRef);
                }}
              >
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
      <div className="socials cursorEff">
        <div className="title">
          <p>Socials</p>
        </div>
        <div className="links">
          <a
            href="https://www.linkedin.com/in/christianloza/"
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn"
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
            title="Github"
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
            title="Resume"
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
