import { Helmet } from "react-helmet";
import { Header } from "./Header"
import bg1mines from "../../assets/images/BG1-Mines.webp";
import { Loader } from "../Loader";
import {lazy, Suspense} from "react";

const FreeClass = lazy(() => import("./FreeClass"));
const EmbedVideo = lazy(() => import("./EmbedVideo"));
const WatchingNow = lazy(() => import("../white-page/WatchingNow"));
const OfferAvailable = lazy(() => import("./OfferAvailable"));
const Countdown = lazy(() => import("./Countdown"));
const PulsateButton = lazy(() => import("../white-page/PulsateButton"));
const FacebookComments = lazy(() => import("./FacebookComments"));

const AulaGratis = () => {
    return (
        <>
            <Helmet>
                <title>Aula Grátis</title>
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
                <Suspense fallback={<Loader />}>
                    <FreeClass />
                </Suspense>

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
                    <WatchingNow />
                </Suspense>

                <Suspense fallback={<Loader />}>
                    <OfferAvailable />
                </Suspense>

                <Suspense fallback={<Loader />}>
                    <Countdown />
                </Suspense>

                <Suspense fallback={<Loader />}>
                    <PulsateButton
                        text="QUERO TER MEU ACESSO!"
                        link="https://pay.kiwify.com.br/uTQZf2J"
                    />
                </Suspense>

                <Suspense fallback={<Loader />}>
                    <div
                        style={{
                            marginTop: "50px"
                        }}
                    >
                        <FacebookComments />
                    </div>
                </Suspense>
            </div>
        </>
    );
}

export default AulaGratis;