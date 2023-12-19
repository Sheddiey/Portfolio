import React, { useState } from "react";
import { About, Home, Skills } from "../Main/Main";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ContactMe from "../ContactMe/ContactMe";
import NavBar from "../NavBar/NavBar";
import Projects from "../Projects/Projects";
import Avatar from "../Avatar/Avatar";
import Footer from "../Footer/Footer";

const Portfolio = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const homeClass = `card regal-blue grid md:flex gap-5 ${
    isDarkMode ? "dark-theme" : ""
  }`;
  const aboutClass = `regal-blue p-2 grid gap-5 content-center justify-center card text-center ${
    isDarkMode ? "dark-theme" : ""
  }`;
  const skillsClass = `skills p-5 card ${isDarkMode ? "dark-theme" : ""}`;
  const contactMeClass = `card items-center justify-evenly p-5 grid md:flex ${
    isDarkMode ? "dark-theme" : ""
  }`;
  const projectsClass = `card ${isDarkMode ? "dark-theme" : ""}`;
  const navBarClass = `flex w-screen h-12 regal-blue box-shadow p-3 justify-between ${
    isDarkMode ? "dark-theme" : ""
  }`;

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle("dark-theme-body");
  };
  return (
    <Router>
      <div className="w-screen md:h-screen flex flex-col justify-between ">
        <NavBar
          toggleDarkMode={toggleDarkMode}
          isDarkMode={isDarkMode}
          navBarClass={navBarClass}
        />
        <div className="md:flex justify-center grid gap-10">
          <Routes>
            <Route path="/" element={<Home homeClass={homeClass} />} />
            <Route path="/about" element={<About aboutClass={aboutClass} />} />
            <Route
              path="/skills"
              element={<Skills skillsClass={skillsClass} />}
            />
            <Route
              path="/projects"
              element={<Projects projectsClass={projectsClass} />}
            />
            <Route
              path="/contactMe"
              element={<ContactMe contactMeClass={contactMeClass} />}
            />
          </Routes>

          <Avatar />
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default Portfolio;
