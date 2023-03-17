import { Helmet } from "react-helmet";
import { Header } from "./Header"
import WatchingNow from "./WatchingNow";
import { YouTubeVideo } from "../YouTubeVideo";
import AccessButton from "./AccessButton";
import bg1mines from "../../assets/images/BG1-Mines.webp";

const WhitePage = () => {
    return (
        <>
            <Helmet>
                <title>sitepagafacil</title>
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
                        color: "#FFFFFF",
                        fontSize: "18px",
                        fontWeight: "700",
                        lineHeight: "1"
                    }}
                >
                    Boas vindas, clique no vídeo abaixo e comece a assistir!
                </div>

                <WatchingNow />
                
                <div
                    style={{
                        paddingBlock: "30px"
                    }}
                >
                    <YouTubeVideo
                        vidId="9SdyUB4jM8A"
                        vidTitle="[BOT VIP] Mines"
                    />
                </div>

                <AccessButton
                    link="https://pay.kiwify.com.br/Z7u8BVj"
                />
            </div>
        </>
    );
}

export default WhitePage;