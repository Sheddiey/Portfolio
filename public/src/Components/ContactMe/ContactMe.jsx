import { faEnvelope, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";


const ContactMe = ({contactMeClass}) => {
  return (
    <div
      className={contactMeClass}
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
};

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

export default ContactMe;
