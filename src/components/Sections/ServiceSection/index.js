import "./style.css";

import serviceImg1 from "../../../assets/images/services/Ecocardiograma com Strain.png";
import serviceImg2 from "../../../assets/images/services/Img Ecocardiograma.png";
import serviceImg3 from "../../../assets/images/services/Img Eletrocardiograma.png";
import serviceImg4 from "../../../assets/images/services/Img holter 24.png";
import serviceImg5 from "../../../assets/images/services/Img MAPA 24h.png";
import serviceImg6 from "../../../assets/images/services/Img Polissonografia tipo 3.png";
import serviceImg7 from "../../../assets/images/services/Img Teste Ergométrico Computadorizado.png";
import serviceImg8 from "../../../assets/images/services/Img consulta cardiologica.png";

import ServiceCard from "../../ServiceCard/ServiceCard";

const ServiceSection = () => {
    const linkButton = "https://chat.smartsocialchat.com.br/dr-mauricio";

    return (
        <div className="services-container">
            <div className="title-services-container">Nossos serviços</div>
            <div className="cards-lines-services-container">
                <ServiceCard
                    img={serviceImg8}
                    title={"Consulta Cardiológica"}
                    paragraph={
                        "uma consulta com o cardiologista Dr. Mauricio Medeiros será o passo inicial para seu diagnóstico e seu tratamento. É como ele sempre diz: “Hoje começa a melhora”."
                    }
                />
                <ServiceCard
                    img={serviceImg3}
                    title={"Eletrocardiograma"}
                    paragraph={
                        "É um exame que irá avaliar a sua respiração durante o sono, através de uma análise detalhada dos movimentos respiratórios, fluxo de ar pelas vias aéreas e oximetria. Indicado avaliar roncos e Apneia obstrutiva do sono. Se você ronca muito, faça esse exame! Vale ressaltar que nosso exame é realizado no conforto da sua casa, pois já temos tecnologia para isso!"
                    }
                />
            </div>
            <div className="cards-lines-services-container">
                <ServiceCard
                    img={serviceImg2}
                    title={"Ecocardiograma"}
                    paragraph={
                        "esse exame que vem se tornando quase obrigatório na avaliação cardíaca, é um exame de imagem que vai avaliar a anatomia e o funcionamento do coração. Aqui podemos diagnosticar muitas alterações como o aumento do coração, coração fraco, sopros, etc."
                    }
                />
                <ServiceCard
                    img={serviceImg1}
                    title={"Ecocardiograma com Strain"}
                    paragraph={
                        "uma consulta com o cardiologista Dr. Mauricio Medeiros será o passo inicial para seu diagnóstico e seu tratamento. É como ele sempre diz: “Hoje começa a melhora”."
                    }
                />
            </div>
            <div className="cards-lines-services-container">
                <ServiceCard
                    img={serviceImg7}
                    title={"Teste Ergométrico Computadorizado"}
                    paragraph={
                        "mais um importantíssimo exame cardiológico, no qual avaliamos o eletrocardiograma do paciente, a pressão arterial, a frequência cardíaca e os sintomas do paciente durante o esforço em esteira. Doença coronariana (“veia entupida”) e arritmias são exemplos de doenças diagnosticadas no teste ergométrico."
                    }
                />
                <ServiceCard
                    img={serviceImg4}
                    title={"Holter 24h"}
                    paragraph={
                        "É um exame realizado por meio de um pequeno aparelho acoplado ao paciente, registrando seu eletrocardiograma durante 24h, enquanto ele executa suas atividades de rotina. Importante para o diagnóstico e acompanhamento de arritmias, palpitações e desmaios."
                    }
                />
            </div>
            <div className="cards-lines-services-container">
                <ServiceCard
                    img={serviceImg5}
                    title={"MAPA 24h"}
                    paragraph={
                        "É um exame no qual é verificada a pressão arterial durante 24 horas, inclusive durante o sono. Utilizado para diagnosticar hipertensão ou para avaliar se a pressão alta está controlada com as medicações em uso."
                    }
                />
                <ServiceCard
                    img={serviceImg6}
                    title={"Polissonografia tipo 3"}
                    paragraph={
                        "É um exame que irá avaliar a sua respiração durante o sono, através de uma análise detalhada dos movimentos respiratórios, fluxo de ar pelas vias aéreas e oximetria. Indicado avaliar roncos e Apneia obstrutiva do sono. Se você ronca muito, faça esse exame! Vale ressaltar que nosso exame é realizado no conforto da sua casa, pois já temos tecnologia para isso!"
                    }
                />
            </div>
            <a href={linkButton} target="_blank" rel="noreferrer">
                <button className="button">Agendar consulta</button>
            </a>
        </div>
    );
}

export default ServiceSection;