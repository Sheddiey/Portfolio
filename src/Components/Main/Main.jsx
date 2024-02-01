import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXTwitter,
  faLinkedinIn,
  faWhatsapp,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

export function Home({ homeClass }) {
  return (
    <div className={homeClass} id="main">
      <section className="order-last md:grid md:content-center md:-order-1">
        <Socials />
      </section>
      <section className="flex flex-col items-center md:text-center justify-evenly">
        <h2>
          Hello, I am{" "}
          <span className="font-medium cursor-pointer animate-pulse text-2xl md:text-4xl">
            Shadrack Cheruiyot
          </span>{" "}
        </h2>
        <h5>
          I'm a web developer, passionate about crafting accessible and
          user-friendly websites. With expertise in React for dynamic interfaces
          and Tailwind CSS for sleek designs, I ensure your site looks great on
          any device. Leveraging Git for collaboration and Firebase for backend
          needs, I'm committed to delivering top-notch web solutions. I am
          seeking a full-time position as a Front-end Web Developer.
        </h5>
        <button className="button mt-[15px] animate-bounce">
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

export function Skills({ skillsClass }) {
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
        <li>Firebase for backend solutions</li>
      </ul>
    </div>
  );
}
