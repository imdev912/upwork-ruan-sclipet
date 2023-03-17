import { Helmet } from "react-helmet";
import "./termos-de-uso.css";
import terms from "../../assets/data/terms.json";


const TermosDeUso = () => {
    return (
        <>
            <Helmet>
                <title>Termos de Uso e Serviço</title>
            </Helmet>
            
            <div className="container">
                <h1>
                    Termos de Uso e Serviço
                </h1>

                <b className="message">
                    IMPORTANTE: ESTES TERMOS DE SERVIÇO REGULAM O USO DESTE SITE DISPONIBILIZADO PELA INVESTIDOR DE PLANTÃO LTDA. AO ACESSAR ESTE SITE, VOCÊ ATESTA SEU CONHECIMENTO E CONCORDÂNCIA COM ESTES TERMOS DE USO. ESTES TERMOS DE USO PODEM SER ALTERADOS A QUALQUER TEMPO E SEM AVISO. A UTILIZAÇÃO DESTE SITE APÓS TAIS ALTERAÇÕES ENTRAREM EM VIGOR CONSTITUI SEU CONHECIMENTO E ACEITAÇÃO DAS MUDANÇAS. POR FAVOR, CONSULTE OS TERMOS DE USO ANTES DE CADA USO PARA AVERIGUAR MODIFICAÇÕES.
                </b>

                {
                    terms.map(section => (
                        <>
                            <div className="topic">
                                {section.topic}
                            </div>

                            <div>
                                {
                                    section.content.map(content => (
                                        <p className="content">
                                            {content}
                                        </p>
                                    ))
                                }
                            </div>
                        </>
                    ))
                }
            </div>
        </>
    );
}

export default TermosDeUso;