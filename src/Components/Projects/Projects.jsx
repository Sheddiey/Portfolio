import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.scss";
import oningoiDecals from "../Assets/3-a.png";
import restApi from "../Assets/2-c.png";
import fintrack_e from "../Assets/1-f.png";
import fintrackPhone from "../Assets/fintrackPhone.png";
import oningoiDecalsPhone from "../Assets/oningoiDecalsPhone.png"
import restApiPhone from "../Assets/restApiPhone.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Projects = ({ projectsClass }) => {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 460);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 460);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isSmallScreen]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  

  return (
    <Slider className={projectsClass} {...settings}>
      <div>
        <h3 className="font-semibold text-center mb-[5px]">FinTrack</h3>
        {isSmallScreen ? (
          <img className="h-[320px] w-[80%] mx-[auto]" src={fintrackPhone} alt="" />
        ) : (
          <img className="h-[280px] mx-[auto]" src={fintrack_e} alt="" />
        )}
        <p className="text-[10px]">
          The monthly tracker web app uses React with Tailwind CSS for frontend
          design and Firebase for backend services, enabling user
          authentication, data storage, and management.
        </p>
        <div className="flex justify-between duration-300 px-[100px] md:px-[250px] text-[20px]">
          <a href="https://xpenditure-af200.web.app/" target="blank">
            <FontAwesomeIcon
              className="cursor-pointer hover:text-[#0284c7]  transition ease-in-out delay-150 hover:translate-y-1 hover:scale-110  duration-300"
              icon={faEye}
            />
          </a>
          <a href="https://github.com/Sheddiey/xpenditure" target="blank">
            {" "}
            <FontAwesomeIcon
              className="cursor-pointer hover:text-[#0284c7] transition ease-in-out delay-150 hover:translate-y-1 hover:scale-110  duration-300"
              icon={faGithub}
            />
          </a>
        </div>
      </div>
      <div>
        <h3 className="font-semibold text-center mb-[5px]">Oningoi E-commerce Platform</h3>
        {isSmallScreen ? (
          <img className="h-[320px] w-[80%] mx-[auto]" src={oningoiDecalsPhone} alt="" />
        ) : (
          <img className="h-[280px] mx-[auto]" src={oningoiDecals} alt="" />
        )}
        <p></p>
        <div className="flex mt-[30px] justify-between duration-300 px-[100px] md:px-[250px] text-[20px]">
          <a href="https://oningoi-e-commerce.web.app/" target="blank">
            <FontAwesomeIcon
              className="cursor-pointer hover:text-[#0284c7]  transition ease-in-out delay-150 hover:translate-y-1 hover:scale-110  duration-300"
              icon={faEye}
            />
          </a>
          <a
            href="https://github.com/Sheddiey/ecommerce-project"
            target="blank"
          >
            <FontAwesomeIcon
              className="cursor-pointer hover:text-[#0284c7] transition ease-in-out delay-150 hover:translate-y-1 hover:scale-110  duration-300"
              icon={faGithub}
            />
          </a>
        </div>
      </div>
      <div>
        <h3 className="font-semibold text-center  mb-[5px]">Rest Countries API </h3>
        {isSmallScreen ? (
          <img className="h-[320px] w-[80%] mx-[auto]" src={restApiPhone} alt="" />
        ) : (
          <img className="h-[280px] mx-[auto]" src={restApi} alt="" />
        )}
        <p></p>
        <div className="flex mt-[30px] justify-between duration-300 px-[100px] md:px-[250px] text-[20px]">
          <a
            href="https://rest-countries-api-zeta-six.vercel.app/"
            target="blank"
          >
            <FontAwesomeIcon
              className="cursor-pointer hover:text-[#0284c7]  transition ease-in-out delay-150 hover:translate-y-1 hover:scale-110  duration-300"
              icon={faEye}
            />
          </a>
          <a
            href="https://github.com/Sheddiey/Rest-Countries-Api"
            target="blank"
          >
            <FontAwesomeIcon
              className="cursor-pointer hover:text-[#0284c7] transition ease-in-out delay-150 hover:translate-y-1 hover:scale-110  duration-300"
              icon={faGithub}
            />
          </a>
        </div>
      </div>
    </Slider>
  );
};

export default Projects;

