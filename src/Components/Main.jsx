import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXTwitter,
  faLinkedinIn,
  faWhatsapp,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

export function Main() {}

export function Home() {
  return (
    <div className="card regal-blue flex content-center" id="main">
      <section className="order-last md:grid md:content-center md:-order-1">
        <Socials />
      </section>
      <section className="intro-description">
        <h2>
          Hello, I am <span>Shadrack Cheruiyot</span>{" "}
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
    <div className="about p-2 grid  justify-center card text-center" id="about">
      <h2>About Me</h2>
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
    
}

export function Services() {}

export function Projects() {}

export function ContactMe() {}
