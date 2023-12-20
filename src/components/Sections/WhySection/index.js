import "./style.css";

import maosIcon from "../../../assets/icons/maos-apertando.svg";
import pessoaEstrelaIcon from "../../../assets/icons/pessoa-estrela.svg";

import ExperienceCard from "../../ExperienceCard/ExperienceCard";

const WhySection = () => {
    return (
        <div className="why-container">
            <div className="title-why-container">
                Por que se consultar com o Dr. Maurício Medeiros?
            </div>
            <div className="cards-why-container">
                <ExperienceCard
                    icon={maosIcon}
                    title={"Experiente e sempre atualizado:"}
                    paragraph={
                        "Médico com mais de 20 anos de experiência. Desde 2010 atuando no Hospital do Coração de Sobral em todos os setores: pronto- atendimento, UTI cardiológica, enfermaria e ambulatório. A sua atividade como professor e médico de referência o obriga a estar sempre atualizado. Saiba que, com o Dr. Mauricio Medeiros, você estará em ótimas mãos!"
                    }
                />
                <ExperienceCard
                    icon={pessoaEstrelaIcon}
                    title={"Atencioso e humano:"}
                    paragraph={
                        "O diferencial do Dr. Mauricio Medeiros está no cuidado individualizado e humanizado que ele dá a cada paciente seu. Ao mesmo tempo que utiliza das mais modernas técnicas da cardiologia, com equipamentos de ponta; ele mantém a cultura da medicina tradicional, com foco no paciente: olho no olho, escutando e examinando atentamente o seu paciente. O Dr. Mauricio Medeiros não enxerga seus pacientes simplesmente como portadores de doença. Ele procura ir além: tenta entender suas dores, suas angústias e seu modo de vida. Outro diferencial é a sua forma de se comunicar com seus pacientes, explicando tudo de uma forma fácil e didática para o entendimento de todos."
                    }
                />
            </div>
        </div>
    );
};

export default WhySection;