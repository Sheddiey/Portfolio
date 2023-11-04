import React, { useState } from "react";
import { About, ContactMe, Home, Projects, Skills } from "./Main";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  useLocation,
} from "react-router-dom";
import sheddiey from "./sheddie ed.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload, faBars, faX } from "@fortawesome/free-solid-svg-icons";

export function Portfolio() {
  return (
    <Router>
      <div className=" h-screen flex flex-col justify-between ">
        <NavBar />
        <div className="md:flex grid gap-10">
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
  const location = useLocation();

  return (
    <nav className=" flex h-12 regal-blue box-shadow p-3 justify-between">
      <h2 className="cursor-pointer font-bold hover:text-2xl hover:transition hover:delay-150 duration-300 ease-in-out">
        <Link to="/">Sheddiey</Link>
      </h2>
      <ul className="md:flex hidden cursor-pointer md:gap-5">
        <li>
          <Link className="hover:text-sky-600" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="hover:text-sky-600" to="/about">
            About
          </Link>
        </li>
        <li>
          <Link className="hover:text-sky-600" to="/skills">
            Skills
          </Link>
        </li>
        <li>
          <Link className="hover:text-sky-600" to="/projects">
            Projects
          </Link>
        </li>
        <li>
          <Link className="hover:text-sky-600" to="/contactMe">
            Contact Me
          </Link>
        </li>
      </ul>
      <div className="md:hidden">
        <ToggleButton isToggle={isToggle} />
      </div>
    </nav>
  );
}

function ToggleButton({ isToggle }) {
  return (
    <button>
      {isToggle ? (
        <FontAwesomeIcon icon={faBars} />
      ) : (
        <FontAwesomeIcon icon={faX} />
      )}
    </button>
  );
}

function Footer() {
  return (
    <div className="w-screen h-10">
      <p className="text-center cursor-pointer transition- opacity-50 hover:opacity-100 transition-opacity">
        © Sheddiey 2023. All rights reserved.
      </p>
    </div>
  );
}

function Avatar() {
  return (
    <div className="flex flex-col gap-10">
      <img
        className="h-80 hover:shadow-[0-3px-8px-0_ hsl(192, 100%, 9%)] cursor-pointer w-80"
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
