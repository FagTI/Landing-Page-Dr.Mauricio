import "./style.css";

import examplesImg1 from "../../../assets/images/examples/Img 01.png";
import examplesImg2 from "../../../assets/images/examples/Img 02.png";
import examplesImg3 from "../../../assets/images/examples/Img 03.png";

const FaqSection = () => {
    return (
        <div className="faq-container">
            <div className="faq-object">
                <h1 className="title-faq-container">
                    Quando devo agendar um atendimento com Dr. Maurício Medeiros?
                </h1>
                <div className="faq-bottom1">
                    <img className="faq-img" src={examplesImg1} alt="" />
                    <div className="faq-topics">
                        • Quando tenho algum sintoma de doença cardíaca: dor no peito,
                        falta de ar, palpitações, edema nas pernas, desmaios, etc.
                        <br />
                        <br />
                        • Realização de check up cardiológico: consulta e exames
                        cardiológicos
                        <br />
                        <br />
                        • Realização de exames cardiológicos: Eletrocardiograma,
                        Ecocardiograma, Teste Ergométrico, MAPA 24h, Holter 24h, US de
                        carótidas e Polissonografia. <br />
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
                <h1 className="title-faq-container">
                    Que doenças o Dr. Mauricio Medeiros trata, principalmente:
                </h1>
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
                <h1 className="title-faq-container">
                    Que exames do coração o Dr. Mauricio Medeiros realiza na
                    Centrocardio Sobral:
                </h1>
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
    );
};

export default FaqSection;