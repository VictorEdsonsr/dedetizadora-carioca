import Image from "next/image";
import sliderOne from "../../../public/img/slider-1.jpg";
import sliderTwo from "../../../public/img/slider-2.jpg";
import sliderThree from "../../../public/img/slider-3.jpg";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export function Slider() {
    return (

        <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
                delay: 10000,
                disableOnInteraction: false,
            }}
            pagination={{
                clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
        >
            <SwiperSlide>
                <Image
                    className="object-cover object-center h-[36rem]"
                    src={sliderOne}
                    alt="image slide 1"
                />


                <div className="bg-black-tra absolute top-0 right-0 left-0 bottom-0"></div>
            </SwiperSlide>
            <SwiperSlide>
                <Image
                    className="object-cover object-center h-[36rem]"
                    src={sliderTwo}
                    alt="image slide 2"
                />

                <div className="bg-black-tra  absolute top-0 right-0 left-0 bottom-0"></div>
            </SwiperSlide>

            <SwiperSlide>
                <Image
                    className="object-cover object-center h-[36rem]"
                    src={sliderThree}
                    alt="image slide 2"
                />

                <div className="bg-black-tra  absolute top-0 right-0 left-0 bottom-0"></div>
            </SwiperSlide>
        </Swiper>

    );
}

