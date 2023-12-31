import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXTwitter,
  faLinkedinIn,
  faWhatsapp,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

export function Home({homeClass}) {
  return (
    <div className={homeClass} id="main">
      <section className="order-last md:grid md:content-center md:-order-1">
        <Socials />
      </section>
      <section className="flex flex-col items-center text-center justify-evenly">
        <h2>
          Hello, I am{" "}
          <span className="font-medium cursor-pointer animate-pulse text-2xl md:text-4xl">
            Shadrack Cheruiyot
          </span>{" "}
        </h2>
        <h5>
          I am a passionate front-end developer with a keen eye for design and a
          love for creating user-friendly, visually appealing web experiences. I
          enjoy turning ideas into reality through code and bringing responsive
          designs to life.
        </h5>
        <button className="button animate-bounce">
          <a
            target="blank"
            href="https://api.whatsapp.com/send?phone=254711241878"
          >
            Hire me
          </a>
        </button>
      </section>
    </div>
  );
}

function Socials() {
  return (
    <ul className="gap-10 socials md:grid text-2xl flex list-none justify-center">
      <li>
        <a target="blank" href='https://twitter.com/sheddieynext"'>
          <FontAwesomeIcon
            className="icon transition-color group duration-300 ease-in-out hover:text-3xl hover:text-sky-600"
            icon={faXTwitter}
          />
        </a>
      </li>
      <li className="">
        <a target="blank" href="https://www.linkedin.com/in/sheddiey/">
          <FontAwesomeIcon
            className="icon transition-color group duration-300 ease-in-out hover:text-3xl  hover:text-sky-600"
            icon={faLinkedinIn}
          />
        </a>
      </li>
      <li>
        <a
          target="blank"
          href="https://api.whatsapp.com/send?phone=254711241878"
        >
          <FontAwesomeIcon
            className="icon transition-color group duration-300 ease-in-out hover:text-3xl hover:text-sky-600"
            icon={faWhatsapp}
          />
        </a>
      </li>
      <li>
        <a target="blank" href="https://github.com/Sheddiey">
          <FontAwesomeIcon
            className="icon transition-color group duration-300 ease-in-out hover:text-3xl hover:text-sky-600"
            icon={faGithub}
          />
        </a>
      </li>
    </ul>
  );
}

export function About({aboutClass}) {
  return (
    <div
      className={aboutClass}
      id="about"
    >
      <h2 className="font-medium text-4xl">About Me</h2>
      <p>
        I'm an experienced Front-End Developer with a proven track record of
        optimizing codebases for reusability at Milkyway Coop, and I'm eager to
        apply my skills to a larger development team at TnC. My passion for
        learning and solving complex problems drives me to maximize user
        efficiency. With a keen eye for design and a love for creating visually
        appealing, user-friendly web experiences, I turn ideas into reality
        through code. My mission is to continuously find innovative ways to
        enhance the digital world and make the web a more beautiful and
        functional place. I'm excited to connect with like-minded individual's
        and explore new opportunities for collaboration.
      </p>
    </div>
  );
}

export function Skills({skillsClass}) {
  return (
    <div className={skillsClass} id="skills">
      <h2 className="text-4xl font-medium">Proficiencies</h2>
      <ul className="list-none hover:list-disc">
        <li>HTML5</li>
        <li>CSS3</li>
        <li>JavaScript</li>
        <li>Responsive Web Design</li>
        <li>Web Accessibility</li>
        <li>Front-end Frameworks - React</li>
        <li>Version Control - Git</li>
        <li>CSS Frameworks - Tailwind CSS</li>
        <li>Mobile-First Development</li>
      </ul>
    </div>
  );
}




