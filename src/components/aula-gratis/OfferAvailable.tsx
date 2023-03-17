import { useIPLocale } from "../../hooks/useIPLocale"

const OfferAvailable = () => {
    const city = useIPLocale();
    
    return (
        <div
            style={{
                color: "#FFFFFF",
                fontSize: "20px",
                fontWeight: "bolder"
            }}
        >
            OFERTA DISPONÍVEL SOMENTE HOJE PARA AS PESSOAS DE

            <span
                style={{
                    color: "#3FF9F6"
                }}
            >
                &nbsp;{city}
            </span>
        </div>
    )
}

export default OfferAvailable;