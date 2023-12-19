import "./AttendanceSlider.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React from "react";
import Slider from "react-slick";

const AttendanceSlider = ({ images }) => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
  };

  return (
    <>
      <div className="top">
        <h1 className="attendance-title">Nosso atendimento</h1>
        <p className="subtitle-attendance-container">
          O atendimento na Clínica Centrocardio Sobral é personalizado,
          humanizado, sempre oferecendo
          <br />
          o que há de melhor e mais moderno no tratamento das doenças
          cardiovasculares.
        </p>
      </div>
      <div className="attendance-slider">
        <Slider {...settings}>
          {images.map((image) => (
            <img className="attendance-img" src={image} alt="" />
          ))}
        </Slider>
      </div>
    </>
  );
};

export default AttendanceSlider;
