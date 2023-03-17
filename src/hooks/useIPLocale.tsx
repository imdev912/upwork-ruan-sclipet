import React from "react";
import { useFirstInteraction } from "./useFirstInteraction";

export const useIPLocale = () => {
    const [city, setCity] = React.useState("SUA REGIÃO");
    const interact = useFirstInteraction();

    const updateCity = () => {
        // get user's city name from IP address
        // -- change token to your own token --
        fetch("https://ipinfo.io/json?token=dbe6ec9d28323c", {
            "method": "GET",
            "headers": {
                "Content-Type": "application/json"
            }
        })
            .then((response) => response.json())
            .then((data) => setCity(data.city.toUpperCase()));
    }

    React.useEffect(() => {
        // interact && updateCity();
    }, [interact]);

    return city;
}