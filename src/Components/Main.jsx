import React, { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import emailjs from "@emailjs/browser";
import {
  faXTwitter,
  faLinkedinIn,
  faWhatsapp,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import {
  faPhone,
  faEnvelope,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

export function Home() {
  return (
    <div className="card regal-blue grid md:flex gap-5" id="main">
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
        <li>CSS Frameworks - Tailwind CSS</li>
        <li>Mobile-First Development</li>
      </ul>
    </div>
  );
}


export function ContactMe() {
  return (
    <div
      className="card items-center justify-evenly p-5 grid md:flex card"
      id="contact-me"
    >
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
      <Form />
    </div>
  );
}

function Form() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_5kq3b2l",
        "template_ftf88vs",
        form.current,
        "s1QzsaEZUoxbOStqi"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert('message sent');
        },
        (error) => {
          console.log(error.text);
          alert('Message not sent! Try again.')
        }
      );
  };
  return (
    <form className="contact-right md:gap-5 grid gap-2" ref={form} onSubmit={sendEmail}>
      <label className="grid">
        Full Name:
        <input
          className="p-1 outline-cyan-500"
          placeholder="Full name"
          name="user_name"
          required
        />
      </label>
      <label className="grid">
        Email:
        <input
          className="p-1 outline-cyan-500  invalid:outline-pink-500"
          type="email"
          pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
          placeholder="Email"
          name="user_email"
          required
        />
      </label>
      <label className="grid">
        What type of website do you need?
        <input
          className="p-1 outline-cyan-500"
          placeholder="Provide a brief description..."
          name="message"
          required
        />
      </label>
      <input type="submit" className="button uppercase" value="Send Message" />
    </form>
  );
}
