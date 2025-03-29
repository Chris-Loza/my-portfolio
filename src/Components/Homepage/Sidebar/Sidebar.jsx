import React from "react";
import "./sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebarMain">
      <div className="sidebar">
        <div className="categoriesContainer">
          <div className="title">Home</div>
          <div className="categories">
            <a href="">About</a>
            <a href="">Skills</a>
            <a href="">Projects</a>
            <a href="">Education</a>
          </div>
        </div>
      </div>
      <div className="socials">
        <div className="title">Socials</div>
        <div className="links">
          <a href="">LinkedIn</a>
          <a href="">GitHub</a>
        </div>
      </div>
      <div className="hireMe">Hire Me</div>
    </div>
  );
};

export default Sidebar;
