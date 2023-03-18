import { Virtual, Navigation, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

const Carousel = (props: {images: string[]}) => {
    return (
        <Swiper
            modules={[Virtual, Navigation, A11y, Autoplay]}
            breakpoints={{
                576: {
                    width: 280,
                    slidesPerView: 1,
                },
                768: {
                    width: 300,
                    slidesPerView: 2,
                },
                1024: {
                    slidesPerView: 3
                }
            }}
            spaceBetween={20}
            virtual={true}
            navigation={true}
            autoplay={true}
        >
            {
                props.images.map((image, index) => {
                    return (
                        <SwiperSlide
                            key={index}
                            virtualIndex={index}
                        >
                            <img
                                src={image}
                                width={300}
                                alt=""
                                loading="lazy"
                                style={{
                                    width: "100%",
                                    height: "auto",
                                    borderRadius: "25px"
                                }}
                            />
                        </SwiperSlide>
                    )
                })
            }
        </Swiper>
    );
}

export default Carousel;