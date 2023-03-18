import { useFirstInteraction } from "../../hooks/useFirstInteraction";
import "../white-page/animation.css";

const PulsateButton = () => {
    const interact = useFirstInteraction();

    return (
        <>
            <a
                className={interact ? "pulsate-fwd" : ""}
                href="https://t.me/+YNJoIg28SccxMDU0"
                role="button"
                style={{
                    fontSize: "18px",
                    fontWeight: "700",
                    textDecoration: "none",
                    lineHeight: "1",
                    color: "#FFFFFF",
                    borderRadius: "8px",
                    padding: "18px 3rem",
                    backgroundColor: "#007FAD",
                    backgroundSize: "400% 200%",
                    boxShadow: "none",
                    transition: "all 0.3s",
                    transitionProperty: "transform"
                }}
            >
                ACESSE O CANAL FREE
            </a>
        </>
    )
}

export default PulsateButton;