import "./style.css";

const HomeSection = () => {
    const linkButton = "https://chat.smartsocialchat.com.br/dr-mauricio";

    return (
        <div className="first-container">
            <div className="first-container-content">
                <div className="title-first-container">
                    <h1>Cuide do seu <span style={{ color: 'rgba(207, 57, 57,1)' }}>coração.</span></h1>
                    <h1>Eu te ajudo!</h1>
                </div>
                <h2 className="subtitle-first-container">
                    Dr. Maurício Medeiros <br />
                    Cardiologista <br />
                    CRMCE:9091 RQE:11103
                </h2>
                <p className="description-first-container">
                    Médico Cardiologista, formado em 2003 pela <br />
                    Universidade Federal do Ceará. Professor de <br />
                    cardiologia da faculdade UNINTA. <br />
                    Ecocardiografista pela Escola Pernambucana de <br />
                    Ecocardiografia. Título de especialista pela <br />
                    Sociedade Brasileira de Cardiologia (RQE 11103). <br />
                    Proprietário e diretor clínico da CENTROCARDIO <br />
                    SOBRAL, uma clinica especializada em <br />
                    cardiologia na cidade de Sobral- Ceará.
                </p>
                <a href={linkButton} target="_blank" rel="noreferrer">
                    <button className="first-container-button">Agendar consulta</button>
                </a>
            </div>
        </div>
    );
};

export default HomeSection;