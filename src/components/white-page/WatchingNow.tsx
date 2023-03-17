import React from "react"
import { useFirstInteraction } from "../../hooks/useFirstInteraction";

const WatchingNow = () => {
    //  people watching now
    const [count, setCount] = React.useState(674);
    const interact = useFirstInteraction();

    const updateCount = () => {
        // set some random count
        interact && setCount(Math.floor(Math.random() * (697 - 553) + 553));
    }

    React.useEffect(() => {
        // update count after every 2 seconds
        const countUpdatInterval = setInterval(updateCount, 2000);
        return () => clearInterval(countUpdatInterval);
    });

    return (
        <div
            style={{
                textAlign: "center",
                color: "#FFFFFF"
            }}
        >
            <span
                style={{
                    fontWeight: "bolder"
                }}
            >
                🟢&nbsp;{count}&nbsp;
            </span>
            pessoas assistindo agora!
            <br/>
            🔊 Verifique que seu som esteja ligado
        ​</div>
    );
}

export default WatchingNow;