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
            loop={true}
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
            <SwiperSlide className="relative flex flex-col items-center justify-center">
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

/*<article className="absolute z-50 m-auto text-white top-10 text-center max-w-6xl">
                    <h1 className="font-extrabold text-md sm:text-5xl my-3">
                        Um acampamento de férias no Interior do Rio de Janeiro 90
                        quilômetros do Aeroporto Santos Dumont
                    </h1>

                    <p className="font-bold text-sm sm:text-xl">
                        Acampamento seguindo padrões e procedimentos da International
                        Camping Fellowship
                    </p>
                </article> */