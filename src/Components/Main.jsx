import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXTwitter,
  faLinkedinIn,
  faWhatsapp,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { faPhone, faEnvelope, faLocationDot } from "@fortawesome/free-solid-svg-icons";

export function Main() {}

export function Home() {
  return (
    <div className="card regal-blue flex gap-5" id="main">
      <section className="order-last md:grid md:content-center md:-order-1">
        <Socials />
      </section>
      <section className="flex flex-col text-center justify-evenly">
        <h2>
          Hello, I am{" "}
          <span className="font-medium text-4xl">Shadrack Cheruiyot</span>{" "}
        </h2>
        <h5>
          I am a passionate front-end developer with a keen eye for design and a
          love for creating user-friendly, visually appealing web experiences. I
          enjoy turning ideas into reality through code and bringing responsive
          designs to life.
        </h5>
        <button className="button">
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
    <ul className="gap-10 md:grid flex list-none justify-center">
      <li>
        <a target="blank" href='https://twitter.com/sheddieynext"'>
          <FontAwesomeIcon className="icon" icon={faXTwitter} />
        </a>
      </li>
      <li>
        <a target="blank" href="https://www.linkedin.com/in/sheddiey/">
          <FontAwesomeIcon className="icon" icon={faLinkedinIn} />
        </a>
      </li>
      <li>
        <a
          target="blank"
          href="https://api.whatsapp.com/send?phone=254711241878"
        >
          <FontAwesomeIcon className="icon" icon={faWhatsapp} />
        </a>
      </li>
      <li>
        <a target="blank" href="https://github.com/Sheddiey">
          <FontAwesomeIcon className="icon" icon={faGithub} />
        </a>
      </li>
    </ul>
  );
}

export function About() {
  return (
    <div
      className="card regal-blue p-2 grid gap-5 content-center justify-center card text-center"
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

export function Skills() {
  return (
    <div className="skills p-5 card" id="skills">
      <h2 className="text-4xl font-medium">Proficiencies</h2>
      <ul className="list-none hover:list-disc">
        <li>HTML5</li>
        <li>CSS3</li>
        <li>JavaScript</li>
        <li>Responsive Web Design</li>
        <li>Web Accessibility</li>
        <li>Front-end Frameworks - React</li>
        <li>Version Control - Git</li>
        <li>CSS Frameworks - Bootstrap</li>
        <li>Mobile-First Development</li>
      </ul>
    </div>
  );
}

export function Projects() {
  return (
    <div id="card " className="projects card">
      <ul className="lis-none">
        <li>lorem20</li>
        <li>lorem20</li>
        <li>lorem20</li>
        <li>lorem20</li>
      </ul>
    </div>
  );
}

export function ContactMe() {
  return (
    <div className="card items-center justify-evenly p-5 grid md:flex card" id="contact-me">
      <div className=" contact-left order-last grid gap-5">
        <p>
          <span>
            <FontAwesomeIcon icon={faPhone} />
          </span>{" "}
          +254 711 241 878
        </p>
        <p>
          <span>
            <FontAwesomeIcon icon={faEnvelope} />
          </span>{" "}
          shadrackcheruiyot429@gmail.com
        </p>
        <p>
          <span>
            <FontAwesomeIcon icon={faLocationDot} />
          </span>{" "}
          Remote{" "}
        </p>
      </div>
      <div className="contact-right md:gap-5 grid gap-2">
        <label className="grid">
          Full Name:
          <input className="p-1 rounded focus:border-0" placeholder="Full name" />
        </label>
        <label className="grid">
          Email:
          <input className="p-1 rounded focus:border-0" placeholder="Email" />
        </label>
        <label className="grid">
          What type of website do you need?
          <input className="p-1 rounded focus:border-0" placeholder="Provide a brief description..." />
        </label>
        <button className="button uppercase">Send Message</button>
      </div>
    </div>
  );
}
