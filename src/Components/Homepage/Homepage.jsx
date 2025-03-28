import React from "react";
import "./homepage.css";
import Sidebar from "./Sidebar/Sidebar";
import Content from "./MainContent/Content";

const Homepage = () => {
  return (
    <div className="homepage">
      <div className="sidebarContainer">
        <Sidebar />
      </div>
      <div className="contentContainer">
        <Content />
      </div>
    </div>
  );
};

export default Homepage;
