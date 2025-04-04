import React from "react";
import "./content.css";

const Content = () => {
  return (
    <div className="mainContentMain">
      <div className="contentWindow">
        <div className="about category">About</div>
        <div className="skills category">
          <div className="mySkills">
            <p>My Skills</p>
          </div>
          <div className="skillsContainer">
            <div className="html skill">
              <div className="imgContainer">
                <img src="../../../../Images/HTML5.svg" alt="HTML logo" />
              </div>
              <p>HTML5</p>
            </div>
            <div className="css skill">
              <div className="imgContainer">
                <img src="../../../../Images/CSS3.svg" alt="CSS logo" />
              </div>
              <p>CSS3</p>
            </div>
            <div className="javascript skill">
              <div className="imgContainer">
                <img
                  src="../../../../Images/JavaScript.svg"
                  alt="JavaScript logo"
                />
              </div>
              <p>JavaScript</p>
            </div>
            <div className="react skill">
              <div className="imgContainer">
                <img
                  className="reactLogo"
                  src="../../../../Images/React.svg"
                  alt="React logo"
                />
              </div>
              <p>React</p>
            </div>
            <div className="git skill">
              <div className="imgContainer">
                <img src="../../../../Images/Git.svg" alt="Git logo" />
              </div>
              <p>Git</p>
            </div>
            <div className="linux skill">
              <div className="imgContainer">
                <img src="../../../../Images/Linux.png" alt="Linux logo" />
              </div>
              <p>Linux</p>
            </div>
          </div>
        </div>
        <div className="projects category">Projects</div>
        <div className="education category">Education</div>
      </div>
      <div className="contentWindowBackground">
        <img
          src="../../../../public/Images/philipp-pilz-AOhBMkQlzgM-unsplash.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Content;
