import React from "react";
import placeholder from "../../assets/images/Captura-de-tela_20230223_014251.webp";

const EmbedVideo = () => {
    const [showVideo, setShowVideo] = React.useState(false);

    React.useEffect(() => {
        if (showVideo) {
            const script = document.createElement("script");
            script.id = "scr_63f6bef5d5a1b900093b0e54";
            script.src = "https://scripts.converteai.net/f5c03364-a49d-4087-816f-6bd7bd5b8987/players/63f6bef5d5a1b900093b0e54/player.js";
            document.head.appendChild(script);
        }
    }, [showVideo]);
    
    return (
        <div>
            {
                showVideo ? (
                    <>
                        <div
                            id="vid_63f6bef5d5a1b900093b0e54"
                            style={{
                                width: "640px",
                                height: "360px",
                                maxWidth: "100%"
                            }}
                        >
                        </div>
                    </>
                ) : (
                    <img
                        src={placeholder}
                        width={640}
                        height={360}
                        alt="play"
                        onClick={() => setShowVideo(true)}
                        style={{
                            height: "auto",
                            maxWidth: "100%",
                            cursor: "pointer"
                        }}
                    />
                )
            }

        </div>
    );
}

export default EmbedVideo;