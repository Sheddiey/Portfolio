import React, { useState } from "react";
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
  return (
    <div className="skills p-5 card" id="skills">
      <h2>Proficiencies</h2>
      <ul>
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

export function Services() {
    const data = {
        services: [
          {
            id: 1,
            h2: "Website Development",
            li_1: "Intuitively Designed Ui",
            li_2: "User-Friendly Navigation",
            li_3: "Responsiveness Accross All Devices",
            li_4: "SEO optimization",
          },
          {
            id: 2,
            h2: "Custom Software Development",
            li_1: "User-Friendly",
            li_2: "Efficient",
            li_3: "Scalable",
            li_4: "Secure and Reliable",
          },
          {
            id: 3,
            h2: "Website and Platform Maintenance",
            li_1: "Effective Assistance",
            li_2: "Uninterrupted Accessibility",
            li_3: "Thorough Focus",
            li_4: "Resolution - Focused Approach",
          },
        ],
      };
      const [activeService, setActiveService] = useState (0);
      const [isAnimating, setIsAnimating] = useState(false);
    
      const nextService = () => {
        if (!isAnimating) {
          setIsAnimating(true);
          setTimeout(() => {
            setActiveService((activeService + 1) % data.services.length);
            setIsAnimating(false);
          }, 600);
        }
      };
    
      const prevService = () => {
        if (!isAnimating) {
          setIsAnimating(true);
          setTimeout(() => {
            setActiveService(
              (activeService - 1 + data.services.length) % data.services.length
            );
            setIsAnimating(false);
          }, 0);
        }
      };
    
      return (
        <section className="section card">
          <div className="header">
            <h1>Services</h1>
            <h4>Whats In It For You.</h4>
          </div>
    
          <div
            className={`services relative group flip-card ${
              isAnimating ? "flipped" : ""
            }`}
            id="services"
          >
            <Carousel {...data.services[activeService]} />
            <div
              onClick={prevService}
              className="hidden group-hover:block absolute top-[30%] -translate-x-0 -translate-y-[-50%] left-5 text-2xl rounded-full p-1 bg-black/20 text-white cursor-pointer"
            >
              <BsChevronCompactLeft size={30} />
            </div>
            <div
              onClick={nextService}
              className="hidden group-hover:block absolute top-[30%] -translate-x-0 -translate-y-[-50%] right-5 text-2xl rounded-full p-1 bg-black/20 text-white cursor-pointer"
            >
              <BsChevronCompactRight size={30} />
            </div>
          </div>
        </section>
      ); 
}

export function Projects() {}

export function ContactMe() {}
