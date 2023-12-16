import "./Home.css";

import React from "react";

const Home = () => {
    return (
        <div className="all">
            <div className="first-container">
                <div className="title-first-container">
                    <div>Cuide do seu coração.</div>
                    <div>Eu te ajudo!</div>
                </div>
                <div className="subtitle-first-container">
                    <div>
                        Dr. Maurício Medeiros <br />
                        Cardiologista <br />
                        CRMCE:9091 RQE:11103
                    </div>
                </div>
                <div className="description-first-container">
                    Médico Cardiologista, formado em 2003 pela <br />
                    Universidade Federal do Ceará. Professor de <br />
                    cardiologia da faculdade UNINTA. <br />
                    Ecocardiografista pela Escola Pernambucana de <br />
                    Ecocardiografia. Título de especialista pela <br />
                    Sociedade Brasileira de Cardiologia (RQE 11103). <br />
                    Proprietário e diretor clínico da CENTROCARDIO <br />
                    SOBRAL, uma clinica especializada em <br />
                    cardiologia na cidade de Sobral- Ceará.
                </div>
                <button className="button-first-container">
                    Agendar consulta
                </button>
            </div>
            <div className="why-container">
                <div className="title-why-container"></div>
            </div>
            <div className="faq-container"></div>
            <div className="services-container"></div>
            <div className="about-container"></div>
            <div className="attendance-container"></div>
            <div className="feedback-container"></div>
            <div className="location-container"></div>
            <div className="footer">
                2023 © Todos os direitos reservados.
            </div>
        </div>
    );
};

export default Home;