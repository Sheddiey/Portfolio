import React, { useState } from "react";
import { About, ContactMe, Home, Skills } from "./Main";

import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import sheddiey from "./sheddie ed.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload, faBars, faX } from "@fortawesome/free-solid-svg-icons";
import Projects from "./Projects/Projects";

export function Portfolio() {
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

function NavBar() {
  const [isToggle, setIsToggle] = useState(false);
  function handleClick() {
    setIsToggle(!isToggle);
  }

  return (
    <nav className=" flex w-screen h-12 regal-blue box-shadow p-3 justify-between">
      <h2 className="cursor-pointer font-bold hover:text-2xl hover:transition hover:delay-150 duration-300 ease-in-out">
        <Link to="/">Sheddiey</Link>
      </h2>
      <div
        className={`right-0 w-${
          isToggle ? "60" : "0"
        } md:overflow-visible overflow-hidden md:shadow-none md:bg-transparent transform transition-width duration-300 ease-in-out top-0 shadow-[0_5px_700px_0_rgb(0,0,0)] h-screen z-10 absolute bg-white`}
      >
        <ul className="md:flex md:top-0 md:right-0 top-20 absolute p-3 grid gap-5  cursor-pointer md:gap-5">
          {NavList["nav-list"].map((list) => (
            <li key={list.p}>
              <Link
                onClick={handleClick}
                className="border-b-4 hover:text-sky-600"
                to={list.to}
              >
                {list.p}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="md:hidden z-10">
        <ToggleButton isToggle={isToggle} handleClick={handleClick} />
      </div>
    </nav>
  );
}

const NavList = {
  "nav-list": [
    {
      to: "/",
      p: "Home",
    },
    {
      to: "/about",
      p: "About",
    },
    {
      to: "/skills",
      p: "Skills",
    },
    {
      to: "/projects",
      p: "Projects",
    },

    {
      to: "/contactMe",
      p: "ContactMe",
    },
  ],
};

function ToggleButton({ isToggle, handleClick }) {
  return (
    <button onClick={handleClick} className="z-20">
      {!isToggle ? (
        <FontAwesomeIcon icon={faBars} />
      ) : (
        <FontAwesomeIcon icon={faX} />
      )}
    </button>
  );
}

function Footer() {
  return (
    <div className="w-screen  md:relative bottom-0 h-10">
      <p className="text-center cursor-pointer transition- opacity-50 hover:opacity-100 transition-opacity">
        © Sheddiey 2023. All rights reserved.
      </p>
    </div>
  );
}

function Avatar() {
  return (
    <div className="flex items-center flex-col gap-5 md:gap-10">
      <img
        className="md:h-80 md:w-80 h-60 w-60 hover:shadow-[0-3px-8px-0_ hsl(192, 100%, 9%)] cursor-pointer w-80"
        src={sheddiey}
        alt="sheddiey"
      />
      <div className="text-center">
        <FontAwesomeIcon
          className="icon text-2xl hover:text-sky-600 cursor-pointer"
          icon={faDownload}
        />
      </div>
    </div>
  );
}
