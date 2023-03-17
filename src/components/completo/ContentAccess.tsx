import { useIPLocale } from "../../hooks/useIPLocale";

const ContentAccess = () => {
    const city = useIPLocale();

    return (
        <div
            style={{
                fontSize: "20px",
                fontWeight: "700"
            }}
        >
            <span>
                SOMENTE VOCÊ E OUTRAS 11 PESSOAS PRÓXIMAS A 
            </span>

            <span
                style={{
                    color: "#00EBFF"
                }}
            >
                &nbsp;{city}
            </span>

            &nbsp;

            <span>
                TIVERAM ACESSO A ESSA OFERTA
            </span>
        </div> 
    )
}

export default ContentAccess;