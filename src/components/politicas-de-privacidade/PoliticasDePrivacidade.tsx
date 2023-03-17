import { Helmet } from "react-helmet";
import "../termos-de-uso/termos-de-uso.css";
import privacy from "../../assets/data/privacy.json";

const PoliticasDePrivacidade = () => {
    return (
        <>
            <Helmet>
                <title>Política de Privacidade</title>
            </Helmet>
            
            <div className="container">
                <h1>
                    Política de Privacidade
                </h1>

                <div>
                    <p className="content">
                        NOS COMPROMETEMOS COM A TRANSPARÊNCIA DO TRATAMENTO DE DADOS PESSOAIS DOS NOSSOS USUÁRIOS. POR ISSO, A PRESENTE POLÍTICA DE PRIVACIDADE ESTABELECE COMO É FEITA A COLETA, USO E TRANSFERÊNCIA DE INFORMAÇÕES DOS USUÁRIOS QUE ACESSAM OU USAM NOSSO SITE.
                    </p>

                    <p className="content">
                        A INVESTIDOR DE PLANTÃO LTDA, (“Investidordeplantão”) é uma empresa que desenvolve e promove cursos livres na modalidade de educação a distância e empresas que edita e comercializa infoprodutos.
                    </p>

                    <p className="content">
                        Ao acessar esse site, você entende que coletaremos e usaremos suas informações pessoais nas formas descritas nesta Política, sob as normas da Lei Geral de Proteção de Dados (13.709/2018), do Direito do Consumidor, assim como demais normas previstas no ordenamento jurídico brasileiro.
                    </p>

                    <p className="content">
                        Você aceita essa política e concorda com tal coleta, armazenamento e uso ao se inscrever ou adquirir nossos produtos, serviços ou qualquer outro recurso, tecnologia ou funcionalidade que nós oferecemos ao acessar nosso site ou por qualquer outro meio.
                    </p>

                    <p className="content">
                        Fica ressalvado que podemos alterar esta política a qualquer momento, divulgando uma versão revisada e atualizada em nossos sites. A versão revisada entrará em vigor assim que disponibilizada no site, independente de prévia notificação, sendo de responsabilidade do usuário a leitura e verificação a cada vez que acessar nossos sites e serviços.
                    </p>

                    <p className="content">
                        Todavia, se a versão revisada incluir alteração substancial, avisaremos você com 30 dias de antecedência, divulgando o aviso sobre a alteração em nosso próprio site. Depois desse aviso de 30 dias, será considerado que você concorda com todas as emendas feitas a essa política.
                    </p>
                </div>

                {
                    privacy.map(section => (
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

                <b className="message">
                    ATENÇÃO! SE VOCÊ SE INSCREVER NA NOSSA BASE DE DADOS EM UM SITE DE TERCEIROS, OU POR MEIO DE UM APLICATIVO DE TERCEIROS, QUALQUER INFORMAÇÃO INSERIDA NAQUELE SITE OU APLICATIVO (E NÃO DIRETAMENTE NO NOSSO SITE) SERÁ COMPARTILHADA COM O PROPRIETÁRIO DESSE SITE OU APLICATIVO, E SUAS INFORMAÇÕES PODEM ESTAR SUJEITAS AS POLÍTICAS DE PRIVACIDADE DELES.
                </b>

                <p className="content">
                    Para entrar em contato com o site, basta escrever para <b>suporte@investidordeplantao.com.br</b>
                </p>
            </div>
        </>
    );
}

export default PoliticasDePrivacidade;