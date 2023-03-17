import { useIPLocale } from "../../hooks/useIPLocale";
import { InfoBanner } from "../InfoBanner";

export const Header = () => {
    const city = useIPLocale();

    return (
        <header>
            <InfoBanner>
                <>
                    {/* header message */}
                    SOMENTE AS PESSOAS DE {city} TIVERAM ACESSO A ESSE VÍDEO
                </>
            </InfoBanner>
        </header>
    );
}