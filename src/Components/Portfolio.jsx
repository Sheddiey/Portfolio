import React from "react";
import { About, ContactMe, Home, Projects, Skills } from "./Main";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import sheddiey from "./sheddie ed.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

export function Portfolio() {
  return (
    <Router>
      <div className=" h-screen flex flex-col justify-between ">
        <NavBar />
        <div className="flex">
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

function NavBar() {
  return (
    <nav className=" flex h-15 regal-blue box-shadow p-3 justify-between">
      <h2 className="cursor-pointer transition ease-in-out delay-150 hover:underline-offset-1">
        <Link to="/">Sheddiey</Link>
      </h2>
      <ul className="flex cursor-pointer gap-5">
        <li>
          <Link className='hover:text-sky-600' to="/">Home</Link>
        </li>
        <li>
          <Link className='hover:text-sky-600' to="/about">About</Link>
        </li>
        <li>
          <Link className='hover:text-sky-600' to="/skills">Skills</Link>
        </li>
        <li>
          <Link className='hover:text-sky-600' to="/projects">Projects</Link>
        </li>
        <li>
          <Link className='hover:text-sky-600' to="/contactMe">Contact Me</Link>
        </li>
      </ul>
    </nav>
  );
}

function Footer() {
  return (
    <div className="w-screen h-10">
      <p className="text-center cursor-pointer transition- opacity-75 hover:opacity-100 transition-opacity">
        © Sheddiey 2023. All rights reserved.
      </p>
    </div>
  );
}

function Avatar() {
  return (
    <div className="flex flex-col gap-10">
      <img className="h-80 hover:shadow-[0-3px-8px-0_ hsl(192, 100%, 9%)] cursor-pointer w-80" src={sheddiey} alt="sheddiey" />
      <FontAwesomeIcon className="icon hover:shadow-2xl cursor-pointer hover:text-sky-600 text-2xl" icon={faDownload} />
    </div>
  );
}
