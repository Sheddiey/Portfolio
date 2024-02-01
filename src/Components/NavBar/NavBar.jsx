import { faBars, faMoon, faSun, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const NavBar = ({ toggleDarkMode, navBarClass, isDarkMode }) => {
  const [isToggle, setIsToggle] = useState(false);
  function handleClick() {
    setIsToggle(!isToggle);
  }

  return (
    <nav className={navBarClass}>
      <h2 className="cursor-pointer font-bold hover:text-xl hover:transition hover:delay-150 duration-300 ease-in-out">
        <Link to="/">Sheddiey</Link>
      </h2>
      <FontAwesomeIcon
        onClick={toggleDarkMode}
        icon={!isDarkMode ? faMoon : faSun}
        className="absolute left-[50%] text-[20px] cursor-pointer"
      />

      <div
        className={`${
          isToggle ? "fixed md:hidden inset-0 bg-black opacity-50 z-[99]" : ""
        }`}
        onClick={handleClick}
      ></div>

      <div
        className={`fixed top-0 right-0 ${
          isToggle ? "w-60 h-[300px] z-[99]" : "w-0 h-[300px] z-[99]"
        } ${
          isDarkMode ? "dark-theme" : ""
        } md:h-[20px]  md:overflow-visible overflow-hidden transition-width duration-500 ease-in-out bg-white md:w-auto md:relative md:bg-transparent items-center justify-center flex`}
      >
        <ul className="md:flex p-3 grid gap-5 cursor-pointer md:gap-5">
          {NavList["nav-list"].map((list) => (
            <li key={list.p}>
              <NavLink
                onClick={handleClick}
                className={({ isActive }) =>
                  isActive ? "nav-link active": "nav-link"
                }
                to={list.to}
              >
                {list.p}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      <div className="md:hidden z-[999]">
        <ToggleButton isToggle={isToggle} handleClick={handleClick} />
      </div>
    </nav>
  );
};

const NavList = {
  "nav-list": [
    {
      to: "/",
      p: "Home",
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

export default NavBar;
