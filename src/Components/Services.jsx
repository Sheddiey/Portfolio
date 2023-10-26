import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs'

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

function Carousel({ h2, li_1, li_2, li_3, li_4 }) {
    return (
      <div className="corousel p-5 md:text-center ">
        <h2 className="font-medium">{h2}</h2>
        <ul className="list-none">
          <li>{li_1}</li>
          <li>{li_2}</li>
          <li>{li_3}</li>
          <li>{li_4}</li>
        </ul>
      </div>
    );
  }