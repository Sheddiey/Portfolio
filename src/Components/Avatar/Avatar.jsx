import React from 'react'
import sheddiey from "../Assets/sheddie ed.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

const Avatar = () => {
  return (
    <div className="flex items-center flex-col gap-5 md:gap-10">
    <img
      className="md:h-80 md:w-80 h-60 w-60 hover:shadow-[0-3px-8px-0_ hsl(192, 100%, 9%)] cursor-pointer w-80"
      src={sheddiey}
      alt="sheddiey"
    />
    <div className="text-center">
      <FontAwesomeIcon
        className="icon text-2xl hover:text-sky-600 cursor-pointer"
        icon={faDownload}
      />
    </div>
  </div>
  )
}

export default Avatar
