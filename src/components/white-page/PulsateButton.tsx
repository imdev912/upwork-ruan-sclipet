import { useFirstInteraction } from "../../hooks/useFirstInteraction";
import "./animation.css";

const PulsateButton = (props: {
    text: string,
    link: string
}) => {
    const { link } = props;
    const interact = useFirstInteraction();

    return (
        <>
            <a
                className={interact ? "pulsate pulsate-fwd" : "pulsate"}
                href={link}
                role="button"
            >
                {props.text}
            </a>
        </>
    )
}

export default PulsateButton;