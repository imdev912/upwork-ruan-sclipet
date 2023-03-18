import DepoimentoDM1 from "../../assets/images/Depoimento-DM-1.webp";
import DepoimentoDM2 from "../../assets/images/Depoimento-DM-2.webp";
import DepoimentoDM3 from "../../assets/images/Depoimento-DM-3.webp";
import DepoimentoDM4 from "../../assets/images/Depoimento-DM-4.webp";
import DepoimentoDM5 from "../../assets/images/Depoimento-DM-5.webp";
import Depoimento1 from "../../assets/images/Depoimento-1.webp";
import Carousel from './Carousel';

const images = [
    DepoimentoDM1,
    Depoimento1,
    DepoimentoDM5,
    DepoimentoDM4,
    DepoimentoDM3,
    DepoimentoDM2,
];

const Carousel2 = () => {
    return (
        <>
            <Carousel images={images} />
        </>
    );
}

export default Carousel2;