import { Helmet } from "react-helmet";
import bg1mines from "../../assets/images/BG1-Mines.webp";
import MinesVIP from "../../assets/images/Mines.webp";
import LeftCard from "./LeftCard";
import RightCard from "./RightCard";
import "./obrigado.css";

const Obrigado = () => {
    return (
        <>
            <Helmet>
                <title>Obrigado</title>
            </Helmet>
            
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "20px",
                    backgroundColor: "#000000",
                    backgroundImage: `url(${bg1mines})`,
                    padding: "80px 20px 100px 20px"
                }}
            >
                <img src={MinesVIP} width={143} height={88} alt="mines vip" />

                <div
                    style={{
                        textAlign: "center",
                        fontSize: "35px",
                        fontWeight: "700"
                    }}
                >
                    PARABÉNS! VOCÊ LIBEROU SEU ACESSO
                </div>

                <div
                    style={{
                        textAlign: "center",
                        fontSize: "20px",
                        fontWeight: "400",
                        padding: "0px 20px 50px 20px"
                    }}
                >
                    Estamos felizes por você tomar essa decisão, é muito bom saber que vai estar com a gente nessa jornada… Tem ideia do passo que acabou de dar?
                    &nbsp;
                    <b>Sua determinação e vontade de crescer te fizeram chegar até aqui.</b>
                </div>

                <div
                    className="flex-column flex-md-row obrigado-cards"
                >
                    <LeftCard />
                    
                    <RightCard />
                </div>
            </div>
        </>
    );
}

export default Obrigado;