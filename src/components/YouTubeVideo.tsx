import { useFirstInteraction } from "../hooks/useFirstInteraction";
import lazy from "../assets/images/IMAGEM-05.webp";

export const YouTubeVideo = (props: {
    vidId: string,
    vidTitle: string
}) => {
    const { vidId, vidTitle } = props;
    const interact = useFirstInteraction();

    return (
        <>
            {
                interact ? (
                    <iframe
                        width="640"
                        height="360"
                        src={`https://www.youtube.com/embed/${vidId}?autoplay=1&mute=1&enablejsapi=1`}
                        title={vidTitle}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        loading="lazy"
                        style={{
                            maxWidth: "100%",
                            border: "0px"
                        }}
                    ></iframe>
                ) : (
                    <img
                        src={lazy}
                        width="640"
                        height="360"
                        alt="paly"
                        style={{
                            maxWidth: "100%",
                            height: "auto",
                            border: "0px"
                        }}
                    />
                )
            }
        </>
    )
}