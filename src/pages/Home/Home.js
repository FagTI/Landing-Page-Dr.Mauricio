import "./Home.css";

import React from "react";

import maosIcon from "../../assets/icons/maos-apertando.svg";
import pessoaEstrelaIcon from "../../assets/icons/pessoa-estrela.svg";

import examplesImg1 from "../../assets/images/examples/Img 01.png";
import examplesImg2 from "../../assets/images/examples/Img 02.png";
import examplesImg3 from "../../assets/images/examples/Img 03.png";

import serviceImg1 from "../../assets/images/services/Ecocardiograma com Strain.png";
import serviceImg2 from "../../assets/images/services/Img Ecocardiograma.png";
import serviceImg3 from "../../assets/images/services/Img Eletrocardiograma.png";
import serviceImg4 from "../../assets/images/services/Img holter 24.png";
import serviceImg5 from "../../assets/images/services/Img MAPA 24h.png";
import serviceImg6 from "../../assets/images/services/Img Polissonografia tipo 3.png";
import serviceImg7 from "../../assets/images/services/Img Teste Ergométrico Computadorizado.png";
import serviceImg8 from "../../assets/images/services/Img consulta cardiologica.png";

import ExperienceCard from "../../components/ExperienceCard/ExperienceCard";
import ServiceCard from "../../components/ServiceCard/ServiceCard";
import FeedbackCard from "../../components/FeedbackCard/FeedbackCard";

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
                <button className="button">
                    Agendar consulta
                </button>
            </div>
            <div className="why-container">
                <div className="title-why-container">
                    Por que se consultar com o Dr. Maurício Medeiros?
                </div>
                <div className="cards-why-container">
                    <ExperienceCard
                        icon={maosIcon}
                        title={"Experiente e sempre atualizado:"}
                        paragraph={"Médico com mais de 20 anos de experiência. Desde 2010 atuando no Hospital do Coração de Sobral em todos os setores: pronto- atendimento, UTI cardiológica, enfermaria e ambulatório. A sua atividade como professor e médico de referência o obriga a estar sempre atualizado. Saiba que, com o Dr. Mauricio Medeiros, você estará em ótimas mãos!"}
                    />
                    <ExperienceCard
                        icon={pessoaEstrelaIcon}
                        title={"Atencioso e humano:"}
                        paragraph={"O diferencial do Dr. Mauricio Medeiros está no cuidado individualizado e humanizado que ele dá a cada paciente seu. Ao mesmo tempo que utiliza das mais modernas técnicas da cardiologia, com equipamentos de ponta; ele mantém a cultura da medicina tradicional, com foco no paciente: olho no olho, escutando e examinando atentamente o seu paciente. O Dr. Mauricio Medeiros não enxerga seus pacientes simplesmente como portadores de doença. Ele procura ir além: tenta entender suas dores, suas angústias e seu modo de vida. Outro diferencial é a sua forma de se comunicar com seus pacientes, explicando tudo de uma forma fácil e didática para o entendimento de todos."}
                    />
                </div>
            </div>
            <div className="faq-container">
                <div className="faq-object">
                    <div className="title-faq-container">
                        Quando devo agendar um atendimento com Dr. Maurício Medeiros?
                    </div>
                    <div className="faq-bottom1">
                        <img className="faq-img" src={examplesImg1} alt="" />
                        <div className="faq-topics">
                            • Quando tenho algum sintoma de doença cardíaca: dor no peito, falta de ar, palpitações, edema nas pernas, desmaios, etc.
                            <br />
                            <br />

                            • Realização de check up cardiológico: consulta e exames cardiológicos
                            <br />
                            <br />

                            • Realização de exames cardiológicos: Eletrocardiograma, Ecocardiograma, Teste Ergométrico, MAPA 24h, Holter 24h, US de carótidas e Polissonografia. <br />
                            <br />

                            • Avaliação de risco cirúrgico/ pré-operatório
                            <br />
                            <br />

                            • Prevenção e diagnóstico precoce de doenças cardíacas
                            <br />
                            <br />

                            • Doenças cardíacas na família
                            <br />
                            <br />

                            • Avaliação para atividade física
                            <br />
                            <br />

                            • Reabilitação Cardiológica
                            <br />
                            <br />
                        </div>
                    </div>
                </div>
                <div className="faq-line" />
                <div className="faq-object">
                    <div className="title-faq-container">
                        Que doenças o Dr. Mauricio Medeiros trata, principalmente:
                    </div>
                    <div className="faq-bottom2">
                        <img className="faq-img" src={examplesImg2} alt="" />
                        <div className="faq-topics">
                            • Hipertensão Arterial (pressão alta)
                            <br />
                            <br />

                            • Pressão baixa
                            <br />
                            <br />

                            • Insuficiência Cardíaca (“Coração fraco”, “Coração crescido”)
                            <br />
                            <br />

                            • Doenças valvares (Sopros cardíacos)
                            <br />
                            <br />

                            • Diabetes e colesterol alto
                            <br />
                            <br />

                            • Outras doenças cardíacas e clínicas
                            <br />
                            <br />
                        </div>
                    </div>
                </div>
                <div className="faq-line" />
                <div className="faq-object">
                    <div className="title-faq-container">
                        Que exames do coração o Dr. Mauricio Medeiros realiza na Centrocardio Sobral:
                    </div>
                    <div className="faq-bottom3">
                        <img className="faq-img" src={examplesImg3} alt="" />
                        <div className="faq-topics">
                            • Eletrocardiograma (ECG)
                            <br />
                            <br />

                            • Ecocardiograma
                            <br />
                            <br />

                            • Ecocardiograma com Strain
                            <br />
                            <br />

                            • Teste Ergométrico
                            <br />
                            <br />

                            • MAPA 24h
                            <br />
                            <br />

                            • Holter 24h
                            <br />
                            <br />

                            • US de carótidas e Vertebrais
                            <br />
                            <br />

                            • Polissonografia
                            <br />
                            <br />
                        </div>
                    </div>
                </div>
            </div>
            <div className="services-container">
                <div className="title-services-container">
                    Nossos serviços
                </div>
                <div className="cards-lines-services-container">
                    <ServiceCard
                        img={serviceImg8}
                        title={"Consulta Cardiológica"}
                        paragraph={"uma consulta com o cardiologista Dr. Mauricio Medeiros será o passo inicial para seu diagnóstico e seu tratamento. É como ele sempre diz: “Hoje começa a melhora”."} />
                    <ServiceCard
                        img={serviceImg8}
                        title={"Eletrocardiograma"}
                        paragraph={"É um exame que irá avaliar a sua respiração durante o sono, através de uma análise detalhada dos movimentos respiratórios, fluxo de ar pelas vias aéreas e oximetria. Indicado avaliar roncos e Apneia obstrutiva do sono. Se você ronca muito, faça esse exame! Vale ressaltar que nosso exame é realizado no conforto da sua casa, pois já temos tecnologia para isso!"} />
                </div>
                <div className="cards-lines-services-container">
                    <ServiceCard
                        img={serviceImg8}
                        title={"Ecocardiograma"}
                        paragraph={"esse exame que vem se tornando quase obrigatório na avaliação cardíaca, é um exame de imagem que vai avaliar a anatomia e o funcionamento do coração. Aqui podemos diagnosticar muitas alterações como o aumento do coração, coração fraco, sopros, etc."} />
                    <ServiceCard
                        img={serviceImg8}
                        title={"Ecocardiograma com Strain"}
                        paragraph={"uma consulta com o cardiologista Dr. Mauricio Medeiros será o passo inicial para seu diagnóstico e seu tratamento. É como ele sempre diz: “Hoje começa a melhora”."} />
                </div>
                <div className="cards-lines-services-container">
                    <ServiceCard
                        img={serviceImg8}
                        title={"Teste Ergométrico Computadorizado"}
                        paragraph={"mais um importantíssimo exame cardiológico, no qual avaliamos o eletrocardiograma do paciente, a pressão arterial, a frequência cardíaca e os sintomas do paciente durante o esforço em esteira. Doença coronariana (“veia entupida”) e arritmias são exemplos de doenças diagnosticadas no teste ergométrico."} />
                    <ServiceCard
                        img={serviceImg8}
                        title={"Holter 24h"}
                        paragraph={"É um exame realizado por meio de um pequeno aparelho acoplado ao paciente, registrando seu eletrocardiograma durante 24h, enquanto ele executa suas atividades de rotina. Importante para o diagnóstico e acompanhamento de arritmias, palpitações e desmaios."} />
                </div>
                <div className="cards-lines-services-container">
                    <ServiceCard
                        img={serviceImg8}
                        title={"MAPA 24h"}
                        paragraph={"É um exame no qual é verificada a pressão arterial durante 24 horas, inclusive durante o sono. Utilizado para diagnosticar hipertensão ou para avaliar se a pressão alta está controlada com as medicações em uso."} />
                    <ServiceCard
                        img={serviceImg8}
                        title={"Polissonografia tipo 3"}
                        paragraph={"É um exame que irá avaliar a sua respiração durante o sono, através de uma análise detalhada dos movimentos respiratórios, fluxo de ar pelas vias aéreas e oximetria. Indicado avaliar roncos e Apneia obstrutiva do sono. Se você ronca muito, faça esse exame! Vale ressaltar que nosso exame é realizado no conforto da sua casa, pois já temos tecnologia para isso!"} />
                </div>
                <button className="button">
                    Agendar consulta
                </button>
            </div>
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