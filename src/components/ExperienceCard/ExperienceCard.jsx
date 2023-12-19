import "./ExperienceCard.css";

import React from "react";

const ExperienceCard = ({ icon, title, paragraph }) => {
    return (
        <div className="experience-card">
            <img src={icon} alt="icon" className="experience-icon" />
            <h1>{title}</h1>
            <p>{paragraph}</p>
        </div>
    );
};

export default ExperienceCard;