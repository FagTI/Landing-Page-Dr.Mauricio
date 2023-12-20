import "./Home.css";

import React from "react";

import attendanceImg1 from "../../assets/images/carrousel/IMG_0830 1.png";
import attendanceImg2 from "../../assets/images/carrousel/IMG_0862 1.png";
import attendanceImg3 from "../../assets/images/carrousel/IMG_0877 1.png";
import attendanceImg4 from "../../assets/images/carrousel/IMG_0913 1.png";
import attendanceImg5 from "../../assets/images/carrousel/IMG_0925 1.png";
import attendanceImg6 from "../../assets/images/carrousel/IMG_0975 1.png";
import attendanceImg7 from "../../assets/images/carrousel/IMG_1025 1.png";

import AttendanceSlider from "../../components/AttendanceSlider/AttendanceSlider";
import DepoimentsSlider from "../../components/DpoimentsSlider/DepoimentsSlider";
import Map from "../../components/Map/Map";

import HomeSection from "../../components/Sections/HomeSection";
import WhySection from "../../components/Sections/WhySection";
import FaqSection from "../../components/Sections/FaqSection";
import ServiceSection from "../../components/Sections/ServiceSection";
import AboutSection from "../../components/Sections/AboutSection";

const Home = () => {
    const attendanceImages = [
        attendanceImg1,
        attendanceImg2,
        attendanceImg3,
        attendanceImg4,
        attendanceImg5,
        attendanceImg6,
        attendanceImg7,
    ];

    return (
        <div className="all">
            <HomeSection />
            <WhySection />
            <FaqSection />
            <ServiceSection />
            <AboutSection />
            <div className="attendance-container">
                <AttendanceSlider images={attendanceImages} />
            </div>
            <div className="feedback-container">
                <DepoimentsSlider />
            </div>
            <div className="location-container">
                <Map />
            </div>
            <div className="footer">2023 © Todos os direitos reservados.</div>
        </div>
    );
};

export default Home;
