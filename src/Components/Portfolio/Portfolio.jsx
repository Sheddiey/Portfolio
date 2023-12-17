import React from 'react'
import { About, Home, Skills } from "../Main/Main";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ContactMe from '../ContactMe/ContactMe';
import NavBar from '../NavBar/NavBar';
import Projects from '../Projects/Projects';
import Avatar from '../Avatar/Avatar';
import Footer from '../Footer/Footer';

const Portfolio = () => {
    return (
        <Router>
          <div className="w-screen md:h-screen flex flex-col justify-between ">
            <NavBar />
            <div className="md:flex justify-center grid gap-10">
              <Routes>
                <Route path="/" Component={Home} />
                <Route path="/about" Component={About} />
                <Route path="/skills" Component={Skills} />
                <Route path="/projects" Component={Projects} />
                <Route path="/contactMe" Component={ContactMe} />
              </Routes>
    
              <Avatar />
            </div>
            <Footer />
          </div>
        </Router>
      );
}

export default Portfolio
