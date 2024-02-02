import React from "react";
import sheddiey from "../Assets/sheddie ed.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { Tooltip } from "react-tippy";
import "react-tippy/dist/tippy.css";

const Avatar = () => {
  return (
    <div className="flex items-center flex-col gap-5 md:gap-10">
      <img
        className="lg:h-80 w-[85%] lg:mt-[20px] h-[60%] lg:w-80 h-60 w-60 hover:shadow-[0-3px-8px-0_ hsl(192, 100%, 9%)] cursor-pointer w-80"
        src={sheddiey}
        alt="sheddiey"
      />
      <div className="text-center">
        <Tooltip
          title="Download CV"
          position="bottom"
          trigger="mouseenter"
          arrow={true}
          interactive={true}
        >
          <a
            href="https://drive.google.com/file/d/1c20AJZLGYkC9nMAqsabYm3Zu8C6rnbww/view?usp=drive_link"
            target="blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              className="icon text-2xl hover:text-sky-600 cursor-pointer"
              icon={faDownload}
            />
          </a>
        </Tooltip>
      </div>
    </div>
  );
};

export default Avatar;
