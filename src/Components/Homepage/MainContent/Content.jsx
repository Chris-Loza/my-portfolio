import React from "react";
import "./content.css";

const Content = () => {
  return (
    <div className="mainContentMain">
      <div className="contentWindow">
        <div className="about category">About</div>
        <div className="skills category">Skills</div>
        <div className="projects category">Projects</div>
        <div className="education category">Education</div>
      </div>
      <div className="contentWindowBackground">
        <img src="../../../../public/Images/philipp-pilz-AOhBMkQlzgM-unsplash.jpg" alt="" />
      </div>
    </div>
  );
};

export default Content;
