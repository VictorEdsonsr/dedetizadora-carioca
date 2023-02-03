import Image from "next/image";
import principalOne from "../../../public/img/dedetizador-img.jpg";
import principalTwo from "../../../public/img/casa-img.jpg";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default function Slider() {
    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 4500,
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
                        className=" w-full h-[400px] sm:h-[590px]"
                        src={principalOne}
                        alt="image slide 1"
                    />
                    <article className="absolute z-10 m-auto text-white  text-center max-w-6xl">
                        <h1 className="font-extrabold text-md sm:text-5xl my-3">
                            Um acampamento de férias no Interior do Rio de Janeiro 90
                            quilômetros do Aeroporto Santos Dumont
                        </h1>

                        <p className="font-bold text-sm sm:text-xl">
                            Acampamento seguindo padrões e procedimentos da International
                            Camping Fellowship
                        </p>
                    </article>

                    <div className="bg-gradient-to-t from-slate-900 to-transparent absolute top-0 right-0 left-0 bottom-0"></div>
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        className=" w-full h-[400px] sm:h-[590px]"
                        src={principalTwo}
                        alt="image slide 2"
                    />
                </SwiperSlide>
            </Swiper>
        </>
    );
}