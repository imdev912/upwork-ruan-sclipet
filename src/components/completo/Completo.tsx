import { Helmet } from "react-helmet";
import { Header } from "./Header";
import bg1mines from "../../assets/images/BG1-Mines.webp";
import { Loader } from "../Loader";
import { lazy, Suspense } from "react";
import ContentAccess from "./ContentAccess";
import "./completo.css";

const EmbedVideo = lazy(() => import("../aula-gratis/EmbedVideo"));
const Countdown = lazy(() => import("../aula-gratis/Countdown"));
const AccessButton = lazy(() => import("../white-page/AccessButton"));
const FacebookComments = lazy(() => import("../aula-gratis/FacebookComments"));;

const Completo = () => {
    return (
        <>
            <Helmet>
                <title>Front Completo – Links</title>
            </Helmet>
            
            <Header />

            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "20px",
                    backgroundColor: "#000000",
                    backgroundImage: `url(${bg1mines})`,
                    backgroundPosition: "top center",
                    backgroundSize: "cover",
                    padding: "20px",
                    paddingBottom: "80px"
                }}
            >
                <div className="intro text-center">
                    <div>
                        ESSE MÉTODO É O RESPONSÁVEL POR
                    </div>

                    <div
                        style={{
                            backgroundColor: "#DD0000"
                        }}
                    >
                        MILHARES DE BRASILEIRO ESTAREM
                        <br/>
                        OSTENTANDO NAS REDES SOCIAS!
                    </div>
                </div>

                <div className="hint text-center">
                    ASSISTA O VÍDEO PARA ENTENDER COMO CONSEGUIR O MESMO
                </div>

                <Suspense fallback={<Loader />}>
                    <div
                        style={{
                            paddingBlock: "30px"
                        }}
                    >
                        <EmbedVideo />
                    </div>
                </Suspense>

                <Suspense fallback={<Loader />}>
                    <div className="content-access">
                        <ContentAccess />
                    </div>
                </Suspense>

                <Suspense fallback={<Loader />}>
                    <div className="countdown">
                        <Countdown />

                        <div className="countdown--message">
                            ESPERO QUE FAÇA A ESCOLHA CERTA!
                        </div>
                    </div>
                </Suspense>

                <Suspense fallback={<Loader />}>
                    <AccessButton
                        link="https://pay.kiwify.com.br/Z7u8BVj"
                    />
                </Suspense>
            </div>

            <Suspense fallback={<Loader />}>
                <div
                    style={{
                        paddingBlock: "50px",
                        backgroundColor: "#FFFFFF"
                    }}
                >
                    <FacebookComments />
                </div>
            </Suspense>
        </>
    );
}

export default Completo;