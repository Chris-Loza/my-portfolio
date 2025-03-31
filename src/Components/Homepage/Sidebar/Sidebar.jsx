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
              <a href="">About</a>
              <a href="">Skills</a>
              <a href="">Projects</a>
              <a href="">Education</a>
            </div>
          </div>
        </div>
      </div>
      <div className="socials">
        <div className="title">
          <p>Socials</p>
        </div>
        <div className="links">
          <a href="">LinkedIn</a>
          <a href="">GitHub</a>
          <a href="">Resume</a>
        </div>
      </div>
      <div className="hireMe">
        <div className="textAndImageContainer">
          <p>*</p>
          <p>Hire Me</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
