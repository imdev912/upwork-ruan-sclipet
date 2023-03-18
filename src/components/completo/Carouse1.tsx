import Noticia1 from "../../assets/images/Noticia-1.webp";
import Noticia2 from "../../assets/images/Noticia-2.webp";
import Noticia3 from "../../assets/images/Noticia-3.webp";
import Noticia4 from "../../assets/images/Noticia-4.webp";
import Noticia5 from "../../assets/images/Noticia-5.webp";
import Carousel from './Carousel';

const images = [
    Noticia5,
    Noticia4,
    Noticia3,
    Noticia2,
    Noticia1
];

const Carousel1 = () => {
    return (
        <>
            <Carousel images={images} />
        </>
    );
}

export default Carousel1;