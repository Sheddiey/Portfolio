import React from "react";

export function Portfolio() {
  return (
    <div>
        <NavBar />
        <Main />
        <Footer />
    </div>
  );
}

function NavBar() {
  return (
    <nav className="flex regal-blue box-shadow p-3 justify-between">
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

}

function Footer() {}
