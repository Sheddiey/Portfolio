import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.scss";
import Oningoi_img from "../sheddie ed.jpg";

const Projects = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider className="card" {...settings}>
      {projects.map((project, index) => (
        <div key={index}>
          <img className="h-[250px] w-[200px]" src={Oningoi_img} alt={project.title} />
          <h3>{project.title}</h3>
          <p>{project.description}</p>
        </div>
      ))}
    </Slider>
  );
};

const projects = [
  {
    title: "Oningoi Decals E-commerce",
    description:
      "It is s tablets and laptop stickers",
    imageUrl: Oningoi_img,
  },
  {
    title: "Oningoi Decals E-commerce",
    description:
      "It is an online sticker shop for phones tablets and laptop stickers",
    imageUrl: Oningoi_img,
  },
  {
    title: "Oningoi Decals E-",
    description:
      "It is an online sticker shop for phones tablets and laptop stickers",
    imageUrl: Oningoi_img,
  },
  {
    title: "Oningoi Decals E-commerce",
    description:
      "It is an online stickerd laptop stickers",
    imageUrl: Oningoi_img,
  },
];

export default Projects;
