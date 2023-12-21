import "./style.css";

import drImg from "../../../assets/images/Dr Maurício Bio.png";

const AboutSection = () => {
  const linkButton = "https://chat.smartsocialchat.com.br/dr-mauricio";

  return (
    <div className="about-container">
      <div className="about-text-container">
        <h1 className="about-title">Sobre mim</h1>
        <p className="about-text">
          Me chamo Maurício Medeiros, minha paixão por cardiologia nasceu ainda
          na adolescência, quando acompanhei a luta do meu avô com Insuficiência
          cardíaca. Infelizmente ele morreu esperando um transplante cardíaco.
          Prometi a minha avó que seria médico e cardiologista.
          <br />
          Tenho 43 anos de idade e mais de 20 anos de formado. Sou casado com
          Luciana Medeiros, com quem estou junto desde os 17 anos de idade.
          Temos 2 filhos: o Mauricio Neto, já quase médico, e o Lucas, futuro
          engenheiro da computação.
          <br />
          Além de Deus e da minha família, minhas duas paixões são a cardiologia
          e o ensino.
          <br />
          Minha rotina de trabalho se divide em atender na Centrocardio Sobral,
          no Hospital e no estudo e ensino em Cardiologia.
          <br />
          Nas horas vagas gosto de ler, viajar e estar com a família e amigos.
          <br />
          Eu e minha esposa, enfermeira, decidimos abrir a Centrocardio, uma
          clínica especializada em Cardiologia, em 2021. Desde então só
          crescemos, graças a Deus! No meu trabalho, coloco a vida e a qualidade
          de vida dos meus pacientes acima de tudo. Tudo mais o que vier, será
          consequência disso.
          <br />
          Adoro o que faço, faço com amor, carinho e dedicação.
        </p>
        <a href={linkButton} target="_blank" rel="noreferrer">
          <button className="about-button">Agendar consulta</button>
        </a>
      </div>
      <div className="about-section-img">
        <img src={drImg} alt="Doutor Mauricio Medeiros" />
      </div>
    </div>
  );
};

export default AboutSection;
