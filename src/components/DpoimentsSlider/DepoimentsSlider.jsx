import "./DepoimentsSlider.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React from "react";
import Slider from "react-slick";

import depoiment1 from "../../assets/images/depoiments/Depoimento 1.png";
import depoiment2 from "../../assets/images/depoiments/Depoimento 2.png";
import depoiment3 from "../../assets/images/depoiments/Depoimento 3.png";
import depoiment4 from "../../assets/images/depoiments/Depoimento 4.png";
import depoiment5 from "../../assets/images/depoiments/Depoimento 5.png";
import depoiment6 from "../../assets/images/depoiments/Depoimento  6.png";
import depoiment7 from "../../assets/images/depoiments/Depoimento 7.png";
import depoiment8 from "../../assets/images/depoiments/Depoimento 8.png";

const DepoimentsSlider = () => {
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
        {
          breakpoint: 789,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            autoplay: true,
            autoplaySpeed: 2000,
          },
        },
      ],
  };

  const depoiments = [
    depoiment1,
    depoiment2,
    depoiment3,
    depoiment4,
    depoiment5,
    depoiment6,
    depoiment7,
    depoiment8,
  ];

  return (
    <>
      <div className="depoiments-slider">
        <Slider {...settings}>
          {depoiments.map((depoiment) => (
            <img className="depoiment-img" src={depoiment} alt="" />
          ))}
        </Slider>
      </div>
    </>
  );
};

export default DepoimentsSlider;
