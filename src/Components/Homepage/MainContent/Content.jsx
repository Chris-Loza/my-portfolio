import React from "react";
import "./content.css";

const Content = ({ refs }) => {
  return (
    <div className="mainContentMain">
      <div className="contentWindow">
        <div className="scrollArea">
          <div className="about category" ref={refs.aboutRef}>
            <div className="aboutText">
              <p>
                Hi, I’m Christian Loza, a front‑end developer who combines
                clean, semantic HTML/CSS with modern JavaScript and React to
                build fast, accessible web apps. I enjoy translating complex
                ideas into intuitive interfaces and thrive on iterative
                problem‑solving. My recent projects show my focus on responsive
                design and smooth user experience. I’m currently looking for
                opportunities where I can keep sharpening my craft and add to my
                toolkit. Feel free to reach out if you’d like to collaborate!
              </p>
            </div>
            <div className="aboutInfo">
              <div className="imgContainer">
                <img
                  src="../../../../public/Images/programmerAtDesk2.avif"
                  alt="Profile Picture"
                />
              </div>
            </div>
          </div>
          <div className="skills category" ref={refs.skillsRef}>
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
          <div className="projects category" ref={refs.projectsRef}>
            <div className="myProjects">
              <p>Projects</p>
            </div>
            <div className="projectsContainer">
              <div className="project">
                <p className="projectTitle">Yugioh Inventory App</p>
                <p className="projectDesc">
                  This project is an Inventory and Wishlist tracking application
                  developed for the trading card game <i>Yu-Gi-Oh!</i>. It
                  allows users to create an account, track the cards they own,
                  and mark the ones they want. The app was built with React
                  using Vite, with Firebase handling authentication and database
                  storage. It is deployed via Vercel.
                </p>
                <p className="projectLink">
                  <a
                    href="https://ygoinventory.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Project
                  </a>
                </p>
                <div className="hoverCard">
                  <img
                    src="../../../../public/Images/ygoAppPortfolioThumbnail2.png"
                    alt="Yugioh App Thumbnail"
                  />
                  <div className="projectLinkContainer">
                    <p className="projectLink">
                      <a
                        href="https://ygoinventory.vercel.app"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Project
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="project">
                <p className="projectTitle">Memorization Game</p>
                <p className="projectDesc">
                  This project is a simple interpretation of the game{" "}
                  <i>Simon Says</i>. The user must memorize the sequence of
                  flashing colors and then repeat them in the correct order.
                  With each round, an additional color is added to the sequence.
                  The app was built with React using Vite and deployed via
                  Vercel.
                </p>
                <p className="projectLink">
                  <a
                    href="https://memorization-game.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Project
                  </a>
                </p>
                <div className="hoverCard">
                  <img
                    src="../../../../public/Images/memorizationGamePortfolioThumbnail.png"
                    alt="Memorization Game Thumbnail"
                  />
                  <div className="projectLinkContainer">
                    <p className="projectLink">
                      <a
                        href="https://memorization-game.vercel.app"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Project
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="project">
                <p className="projectTitle">Recipe Book</p>
                <p className="projectDesc">
                  This project is a recipe card maker that tracks ingredients
                  and nutritional information for each user-created recipe.
                  Users can create as many cards as they'd like for each time of
                  day, with an additional “Snacks” tab. The app was built with
                  React using Vite and deployed via Vercel.
                </p>
                <p className="projectLink">
                  <a
                    href="https://recipe-book-cl.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Project
                  </a>
                </p>
                <div className="hoverCard">
                  <img
                    src="../../../../public/Images/recipeBookPortfolioThumbnail3.png"
                    alt="Recipe Book Thumbnail"
                  />
                  <div className="projectLinkContainer">
                    <p className="projectLink">
                      <a
                        href="https://recipe-book-cl.vercel.app"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Project
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="education category" ref={refs.educationRef}>
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
          src="../../../../public/Images/dark-minimalist-watch-tower.jpg"
          alt="content window background"
        />
      </div>
    </div>
  );
};

export default Content;
