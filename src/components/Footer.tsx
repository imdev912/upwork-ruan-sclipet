import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer
            style={{
                textAlign: "center",
                color: "#ffffff",
                fontSize: "14px",
                fontWeight: "400",
                padding: "20px",
                backgroundColor: "#1d1d1dde"
            }}
        >
            <div>
                Este site no faz parte nem é endossado pelo Facebook. Facebook é uma marca comercial da Facebook, Inc.
            </div>

            <div>
                Esse produto no garante a obtenção de resultados financeiros, qualquer referência ao desempenho de uma estratégia não deve ser interpretada como garantia de resultados.
            </div>

            <p
                style={{
                    fontSize: "12px",
                    fontWeight: "bolder"
                }}
            >
                COPYRIGHT © 2023
                &nbsp;|&nbsp;
                TODOS OS DIREITORS RESERVADO
                &nbsp;|&nbsp;
                {/* link to politicas-de-privacidade page */}
                <Link
                    to="politicas-de-privacidade"
                    style={{
                        color: "#ffffff"
                    }}
                >
                    POLÍTICAS DE PRIVACIDADE
                </Link>
                &nbsp;|&nbsp;
                {/* link to termos-de-uso page */}
                <Link
                    to="termos-de-uso"
                    style={{
                        color: "#ffffff"
                    }}
                >
                    TERMOS DE USO
                </Link>
            </p>
        </footer>
    )
}

export default Footer;