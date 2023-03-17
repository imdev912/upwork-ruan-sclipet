import React from "react";

export const useFirstInteraction = () => {
    const [interaction, setInteraction] = React.useState(false);

    React.useLayoutEffect(() => {
        const interact = new AbortController();
        ["mousedown", "mousemove", "keydown", "scroll", "touchstart"].forEach((function (event) {
            document.addEventListener(event, (async () => {
                interact.abort();
                setInteraction(true);
            }), {
                once: true,
                signal: interact.signal
            });
        }));
    }, []);

    return interaction;
}