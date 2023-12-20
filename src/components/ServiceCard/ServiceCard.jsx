import "./ServiceCard.css";

import React from "react";

const ServiceCard = ({ img, title, paragraph }) => {
  return (
    <div className="service-card-container">
      <img className="service-card-image" src={img} alt="" />
      <div className="service-card-content">
        <h1 className="title">{title}</h1>
        <p className="paragraph">{paragraph}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
