import React from "react";
import { About, ContactMe, Home, Projects, Skills } from "./Main";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

export function Portfolio() {
  return (
    <Router>
      <div className=" h-screen flex flex-col justify-between ">
        <NavBar />
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/about" Component={About} />
          <Route path="/skills" Component={Skills} />
          <Route path="/projects" Component={Projects} />
          <Route path="/contactMe" Component={ContactMe} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

function NavBar() {
  return (
    <nav className=" flex h-15 regal-blue box-shadow p-3 justify-between">
      <h2 className="cursor-pointer">
        <Link to="/">Sheddiey</Link>
      </h2>
      <ul className="flex cursor-pointer gap-5">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/skills">Skills</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/contactMe">Contact Me</Link>
        </li>
      </ul>
    </nav>
  );
}

function Footer() {
  return (
    <div className="w-screen h-10">
      <p className="text-center cursor-pointer opacity-75 hover:opacity-100 transition-opacity">
        © Sheddiey 2023. All rights reserved.
      </p>
    </div>
  );
}
