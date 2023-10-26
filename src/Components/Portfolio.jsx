import React from "react";
import { About, Home, Skills } from "./Main";

export function Portfolio() {
  return (
    <div className=" h-screen flex flex-col justify-between ">
      <NavBar />
      <Skills />
      <Footer />
    </div>
  );
}

function NavBar() {
  return (
    <nav className=" flex h-15 regal-blue box-shadow p-3 justify-between">
      <h2 className="cursor-pointer">Sheddiey</h2>
      <ul className="flex cursor-pointer gap-5">
        <li>Home</li>
        <li>About</li>
        <li>Skills</li>
        <li>Services</li>
        <li>Projects</li>
        <li>Contact Me</li>
      </ul>
    </nav>
  );
}

function Main() {
  return <Home />;
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
