import { faBars, faMoon, faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const NavBar = () => {
    const [isToggle, setIsToggle] = useState(false);
    function handleClick() {
      setIsToggle(!isToggle);
    }
  
    return (
      <nav className=" flex w-screen h-12 regal-blue box-shadow p-3 justify-between">
        <h2 className="cursor-pointer font-bold hover:text-2xl hover:transition hover:delay-150 duration-300 ease-in-out">
          <Link to="/">Sheddiey</Link>
        </h2>
        <FontAwesomeIcon icon={faMoon} className="absolute left-[50%] text-[20px]"/>
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

export default NavBar
