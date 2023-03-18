import { Helmet } from "react-helmet";
import { Header } from "./Header";
import bg1mines from "../../assets/images/BG1-Mines.webp";
import { Loader } from "../Loader";
import { lazy, Suspense } from "react";
import ContentAccess from "./ContentAccess";
import "./completo.css";

const EmbedVideo = lazy(() => import("../aula-gratis/EmbedVideo"));
const Countdown = lazy(() => import("../aula-gratis/Countdown"));
const PulsateButton = lazy(() => import("../white-page/PulsateButton"));
const Carousel1 = lazy(() => import("./Carouse1"));
const Pupils = lazy(() => import("./Pupils"));
const Carousel2 = lazy(() => import("./Carouse2"));
const Warranty = lazy(() => import("./Warranty"));
const FacebookComments = lazy(() => import("../aula-gratis/FacebookComments"));

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

                {/* video component */}
                <Suspense fallback={<Loader />}>
                    <div
                        style={{
                            paddingBlock: "30px"
                        }}
                    >
                        <EmbedVideo />
                    </div>
                </Suspense>

                {/* access messaage component */}
                <Suspense fallback={<Loader />}>
                    <div className="content-access">
                        <ContentAccess />
                    </div>
                </Suspense>

                {/* countdown component */}
                <Suspense fallback={<Loader />}>
                    <div className="countdown">
                        <Countdown />

                        <div className="countdown--message">
                            ESPERO QUE FAÇA A ESCOLHA CERTA!
                        </div>
                    </div>
                </Suspense>

                {/* access button */}
                <Suspense fallback={<Loader />}>
                    <PulsateButton
                        text="QUERO TER MEU ACESSO!"
                        link="https://pay.kiwify.com.br/Z7u8BVj"
                    />
                </Suspense>
            </div>

            {/* first carousel */}
            <Suspense fallback={<Loader />}>
                <div
                    style={{
                        backgroundColor: "#FFFFFF",
                        backgroundImage: `url(${bg1mines})`,
                        backgroundPosition: "top center",
                        backgroundSize: "cover",
                        padding: "80px 20px"
                    }}
                >
                    
                    <Carousel1 />
                </div>
            </Suspense>

            {/* students component */}
            <Suspense fallback={<Loader />}>
                <div
                    style={{
                        paddingBlock: "50px",
                        backgroundColor: "#FFFFFF"
                    }}
                >
                    <Pupils />
                </div>
            </Suspense>

            {/* second carousel */}
            <Suspense fallback={<Loader />}>
                <div
                    style={{
                        padding: "80px 20px",
                        backgroundColor: "#FFFFFF"
                    }}
                >

                    <Carousel2 />
                </div>
            </Suspense>

            {/* warranty */}
            <Suspense fallback={<Loader />}>
                <Warranty />
            </Suspense>

            {/* facebook comments */}
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