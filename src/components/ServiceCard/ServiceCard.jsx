import "./ServiceCard.css";

import React from "react";

const ServiceCard = ({ img, title, paragraph }) => {
    return (
        <div className="container">
            <img className="image" src={img} alt="" />
            <div className="bottom">
                <div className="title">{title}</div>
                <div className="paragraph">{paragraph}</div>
            </div>
        </div>
    );
};

export default ServiceCard;