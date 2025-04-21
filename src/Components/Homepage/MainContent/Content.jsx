import React from "react";
import "./content.css";

const Content = () => {
  return (
    <div className="mainContentMain">
      <div className="contentWindow">
        <div className="scrollArea">
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
          <div className="projects category">
            <div className="myProjects">
              <p>Projects</p>
            </div>
            <div className="projectsContainer">
              <div className="project">
                <p className="projectTitle">Yugioh Inventory App</p>
                <p className="projectDesc">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Architecto asperiores animi possimus cum commodi officiis
                  rerum rem blanditiis, quam assumenda, unde consectetur
                  laborum! Totam non aut asperiores aspernatur tempore earum!
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Minus, neque similique officiis reiciendis odit maxime illum
                  reprehenderit accusamus ab libero consequatur in doloremque
                  impedit blanditiis, dolores ipsa beatae. Quia, suscipit!
                </p>
                <p>
                  <a href="http://" target="_blank" rel="noopener noreferrer">
                    View Project
                  </a>
                </p>
              </div>
              <div className="project">
                <p className="projectTitle">Memorization Game</p>
                <p className="projectDesc">
                  {" "}
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Architecto asperiores animi possimus cum commodi officiis
                  rerum rem blanditiis, quam assumenda, unde consectetur
                  laborum! Totam non aut asperiores aspernatur tempore earum!
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Minus, neque similique officiis reiciendis odit maxime illum
                  reprehenderit accusamus ab libero consequatur in doloremque
                  impedit blanditiis, dolores ipsa beatae. Quia, suscipit!
                </p>
                <p>
                  <a href="http://" target="_blank" rel="noopener noreferrer">
                    View Project
                  </a>
                </p>
              </div>
              <div className="project">
                <p className="projectTitle">Recipe Book</p>
                <p className="projectDesc">
                  {" "}
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Architecto asperiores animi possimus cum commodi officiis
                  rerum rem blanditiis, quam assumenda, unde consectetur
                  laborum! Totam non aut asperiores aspernatur tempore earum!
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Minus, neque similique officiis reiciendis odit maxime illum
                  reprehenderit accusamus ab libero consequatur in doloremque
                  impedit blanditiis, dolores ipsa beatae. Quia, suscipit!
                </p>
                <p>
                  <a href="http://" target="_blank" rel="noopener noreferrer">
                    View Project
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="education category">
            <div className="myEducation">
              <p>Education</p>
            </div>
            <div className="institutions">
              <div className="vvc institution">
                <p className="institutionTitle">
                  Victor Valley College - 3.6 GPA
                </p>
                <div className="degrees">
                  <p>Certificate of Acheivement, Programming 1 - June 2024</p>
                  <p>Certificate of Acheivement, Web Authoring - June 2024</p>
                  <p>
                    Associate of Science, Computer Information Systems - August
                    2024
                  </p>
                </div>
              </div>
              <div className="cpp institution">
                <p className="institutionTitle">
                  California State Polytechnic University, Pomona - 3.3 GPA
                </p>
                <div className="degrees">
                  <p>
                    Bachelor of Science, Chemical Engineering - December 2021
                  </p>
                </div>
              </div>
              <div className="certifications institution">
                <p className="institutionTitle">Other</p>
                <div className="certificates">
                  <p>
                    Professional Certificate, Meta Front-End Developer - Meta,
                    June 2024
                  </p>
                  <p>
                    Developer Certificate, Responsive Web Design - freeCodeCamp,
                    May 2024
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
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
