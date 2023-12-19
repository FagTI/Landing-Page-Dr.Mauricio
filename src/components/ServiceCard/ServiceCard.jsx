import "./ServiceCard.css";

import React from "react";

const ServiceCard = ({ img, title, paragraph }) => {
  return (
    <div className="container">
      <img className="image" src={img} alt="" />
      <div className="content">
        <h1 className="title">{title}</h1>
        <p className="paragraph">{paragraph}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
