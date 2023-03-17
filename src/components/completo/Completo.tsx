import { Helmet } from "react-helmet";
import { Header } from "./Header";
import bg1mines from "../../assets/images/BG1-Mines.webp";
import { Loader } from "../Loader";
import { lazy, Suspense } from "react";
import ContentAccess from "./ContentAccess";

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
                <div
                    style={{
                        textAlign: "center",
                        color: "#FFFFFF",
                        fontSize: "2rem",
                        fontWeight: "800",
                        lineHeight: "1.3",
                        paddingTop: "30px"
                    }}
                >
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

                <div
                    style={{
                        textAlign: "center",
                        color: "#3FF9F6",
                        fontSize: "18px",
                        fontWeight: "800"
                    }}
                >
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
                    <ContentAccess />
                </Suspense>

                <Suspense fallback={<Loader />}>
                    <div
                        style={{
                            display: "flex",
                            alignItems: "end",
                            gap: "20px",
                            marginBottom: "20px"
                        }}
                    >
                        <Countdown />

                        <div
                            style={{
                                fontSize: "20px",
                                fontWeight: "bolder",
                                paddingBlock: "10px"
                            }}
                        >
                            ESPERO QUE FAÇA A ESCOLHA CERTA!
                        </div>
                    </div>
                </Suspense>

                <Suspense fallback={<Loader />}>
                    <AccessButton
                        link="https://pay.kiwify.com.br/Z7u8BVj"
                    />
                </Suspense>

                <Suspense fallback={<Loader />}>
                    <div
                        style={{
                            paddingBlock: "50px",
                            marginTop: "50px",
                            backgroundColor: "#FFFFFF"
                        }}
                        >
                        <FacebookComments />
                    </div>
                </Suspense>
            </div>
        </>
    );
}

export default Completo;