import React from "react";
import vieux1 from "../assets/vieux1.png";
import vieux2 from "../assets/vieux2.png";
import femme1 from "../assets/femme1.png";

var ReactDOM = require("react-dom");
var Carousel = require("react-responsive-carousel").Carousel;
require("react-responsive-carousel/lib/styles/carousel.min.css");
require("./../styles/Slider.css");

const datas = [
  {
    id: 1,
    image: vieux1,
    title: "Titre 1",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis cum suscipit voluptatum. Cupiditate quidem animi, soluta pariatur deleniti doloribus cumque?",
  },
  {
    id: 2,
    image: femme1,
    title: "Titre 2",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis cum suscipit voluptatum. Cupiditate quidem animi, soluta pariatur deleniti doloribus cumque?",
  },
  {
    id: 3,
    image: vieux2,
    title: "Titre 3",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis cum suscipit voluptatum. Cupiditate quidem animi, soluta pariatur deleniti doloribus cumque?",
  },
];
const Slider = () => (
  <div className="slider-container mx-auto max-w-screen-lg my-4 ">
    <Carousel showArrows={true}>
      {datas.map((slide) => (
        <div key={slide.id}>
          <img src={slide.image} alt=""></img>
          <div className="overlay">
            <h2 className="overlay_title">{slide.title}</h2>
            <p className="overlay_text">{slide.text}</p>
            <br></br>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ">
              Get started
            </button>
          </div>
        </div>
      ))}
    </Carousel>
  </div>
);

export default Slider;
