import { Helmet } from "react-helmet";
import terms from "../../assets/data/terms.json";

const TermosDeUso = () => {
    return (
        <>
            <Helmet>
                <title>Termos de Uso e Serviço</title>
            </Helmet>
            
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "20px",
                    padding: "100px 50px"
                }}
            >
                <h1
                    style={{
                        textAlign: "center",
                        fontSize: "2.5rem",
                        lineHeight: "1.2",
                        margin: "0px 0px 20px 0px"
                    }}
                >
                    Termos de Uso e Serviço
                </h1>

                <b>
                    IMPORTANTE: ESTES TERMOS DE SERVIÇO REGULAM O USO DESTE SITE DISPONIBILIZADO PELA INVESTIDOR DE PLANTÃO LTDA. AO ACESSAR ESTE SITE, VOCÊ ATESTA SEU CONHECIMENTO E CONCORDÂNCIA COM ESTES TERMOS DE USO. ESTES TERMOS DE USO PODEM SER ALTERADOS A QUALQUER TEMPO E SEM AVISO. A UTILIZAÇÃO DESTE SITE APÓS TAIS ALTERAÇÕES ENTRAREM EM VIGOR CONSTITUI SEU CONHECIMENTO E ACEITAÇÃO DAS MUDANÇAS. POR FAVOR, CONSULTE OS TERMOS DE USO ANTES DE CADA USO PARA AVERIGUAR MODIFICAÇÕES.
                </b>

                {
                    terms.map(section => (
                        <>
                            <div
                                style={{
                                    fontSize: "30px",
                                    fontWeight: "700"
                                }}
                            >
                                {section.topic}
                            </div>

                            <div>
                                {
                                    section.content.map(content => (
                                        <p
                                            style={{
                                                fontSize: "16px"
                                            }}
                                        >
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