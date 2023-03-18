import PulsateButton from "../white-page/PulsateButton";
import bg5 from "../../assets/images/BG-5.webp";
import dias7 from "../../assets/images/7-Dias.webp";

const Warranty = () => {
    return (
        <div
            className="warranty"
            style={{
                backgroundColor: "#FFFFFF",
                backgroundImage: `url(${bg5})`,
                backgroundPosition: "top center",
                backgroundSize: "cover"
            }}
        >
            <div
                style={{
                    marginBottom: "30px"
                }}
            >
                <div>
                    RISCO ZERO
                </div>

                <div
                    style={{
                        fontSize: "30px",
                        fontWeight: "700"
                    }}
                >
                    GARANTIA INCONDICIONAL
                </div>

                <div
                    style={{
                        color: "#00ebff",
                        fontWeight: "500"
                    }}
                >
                    de 7 dias, você está protegido por lei
                </div>
            </div>

            <div>
                Eu realmente espero que você goste o material e fique feliz, caso contrário, você terá 
                <br/>
                <strong>100% do seu dinheiro de volta…</strong>
                <br />
                <br />
            </div>

            <div>
                Percebe que <strong>não existe nenhum risco</strong>  nessa transação? Percebe que eu estou assumindo todos os risco?
            </div>

            <div>
                Estou fazendo isso por uma razão muito simples, <strong> estou certo que você irá adorar o material e terá resultados com ele</strong>  e que esse é o inicio de uma relação de longo prazo entre nós.
            </div>

            <br />

            <PulsateButton
                text="COMPRAR AGORA COM GARANTIA!"
                link="https://pay.kiwify.com.br/Z7u8BVj"
            />

            <br />

            <img
                src={dias7}
                width={823}
                height={483}
                alt=""
                loading="lazy"
                style={{
                    maxWidth: "100%",
                    height: "auto"
                }}
            />
        </div>
    )
}

export default Warranty;