import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';

const CountriesSlider: React.FC = () => {
    return (
        <Swiper
            modules={[Autoplay]}
            spaceBetween={20}
            slidesPerView={'auto'}
            freeMode={true}
            // cssMode={true} // Enable CSS mode for smooth scrolling
            autoplay={{
                delay: 0, // Continuous scrolling
                disableOnInteraction: false,
            }}
            speed={10000} // Set a longer speed for smoother transitions
            loop={true}
            onSlideChange={() => {
                // Allow continuous autoplay
                if (Swiper.autoplay) {
                    Swiper.autoplay.start();
                }
            }}
        >
            {/* Duplicate slides for a seamless loop effect */}
            {Array.from({ length: 10 }).map((_, index) => (
                <SwiperSlide key={index} className="!w-fit">
                    <div className="flex flex-row w-fit py-[11px] px-[16px] gap-[11px] bg-[#F4F4F4] rounded-lg min-w-[151px]">
                        <img src="/svg/uzbekistan.svg" alt="Uzbekistan icon" />
                        Uzbekistan {index + 1}
                    </div>
                </SwiperSlide>
            ))}
            {Array.from({ length: 10 }).map((_, index) => (
                <SwiperSlide key={index + 10} className="!w-fit">
                    <div className="flex flex-row w-fit py-[11px] px-[16px] gap-[11px] bg-[#F4F4F4] rounded-lg min-w-[151px]">
                        <img src="/svg/uzbekistan.svg" alt="Uzbekistan icon" />
                        Uzbekistan {index + 1}
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default CountriesSlider;
