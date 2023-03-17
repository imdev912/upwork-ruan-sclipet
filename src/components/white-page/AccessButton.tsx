import { useFirstInteraction } from "../../hooks/useFirstInteraction";
import "./animation.css";

const AccessButton = (props: {link: string}) => {
    const { link } = props;
    const interact = useFirstInteraction();

    return (
        <>
            <a
                className={interact ? "pulsate-fwd" : ""}
                href={link}
                role="button"
                style={{
                    fontSize: "18px",
                    fontWeight: "700",
                    textAlign: "center",
                    textDecoration: "none",
                    color: "#FFFFFF",
                    borderRadius: "8px",
                    padding: "18px 3rem",
                    backgroundImage: "linear-gradient(45deg, #00ff52, #00b823, #00ff52, #00b823)",
                    backgroundSize: "400% 200%",
                    boxShadow: "none",
                    transition: "all 0.3s",
                    transitionProperty: "transform"
                }}
            >
                QUERO TER MEU ACESSO!
            </a>
        </>
    )
}

export default AccessButton;