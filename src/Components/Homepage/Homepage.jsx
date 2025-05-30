import React, { useEffect, useRef } from "react";
import "./homepage.css";
import Sidebar from "./Sidebar/Sidebar";
import Content from "./MainContent/Content";

const Homepage = () => {
  const dummyRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const educationRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    aboutRef.current.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <div className="homepage">
      <div className="sidebarContainer">
        <Sidebar
          scrollToSection={scrollToSection}
          refs={{ dummyRef, aboutRef, skillsRef, projectsRef, educationRef }}
        />
      </div>
      <div className="contentContainer">
        <Content
          refs={{ dummyRef, aboutRef, skillsRef, projectsRef, educationRef }}
        />
      </div>
    </div>
  );
};

export default Homepage;
