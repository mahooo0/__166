import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Import basic Swiper styles
import { Reviue } from './Rewiuse';
import { useRef } from 'react';
import 'swiper/swiper-bundle.css';

export default function Rewiues_Section() {
    const swipperRef = useRef<any>(null);

    return (
        <section className="lg:px-[100px] md:px-[60px] px-[30px] mt-[120px]">
            <div className="flex flex-wrap gap-10 items-start w-full justify-between">
                <div className="flex flex-col max-md:max-w-full min-h-[136px] h-fit">
                    <h2 className="self-start text-5xl font-semibold text-black max-md:text-4xl">
                        Müştəri rəyləri
                    </h2>
                    <p className="mt-4 text-xl leading-8 text-zinc-800 max-md:max-w-full">
                        Lorem Ipsum Dolor Sit Amet Consectetur. Magna Tellus
                        Nibh Lectus Congue Amet.
                    </p>
                </div>
                <div className="flex flex-col mt-3 min-h-[136px] h-fit">
                    <h4 className="text-2xl font-semibold text-zinc-600">
                        Total Reviews
                    </h4>
                    <span className="mt-4 text-4xl font-bold text-zinc-800">
                        122 K
                    </span>
                </div>
            </div>
            <div className="relative flex justify-between items-center">
                <Swiper
                    onSwiper={(swiper: any) => (swipperRef.current = swiper)}
                    className="!p-[10px]"
                    slidesPerView={3}
                    spaceBetween={50}
                    breakpoints={{
                        268: {
                            slidesPerView: 1,
                        },
                        568: {
                            slidesPerView: 2,
                        },
                        768: {
                            slidesPerView: 3,
                        },
                    }}
                >
                    {Array.from({ length: 10 }).map((_, index) => (
                        <SwiperSlide key={index}>
                            <Reviue />
                        </SwiperSlide>
                    ))}
                </Swiper>
                <button
                    className="w-[52px] stroke-black hover:stroke-white h-[52px] flex justify-center items-center rounded-full border-[#E4E4E4] border bg-white absolute z-50 left-[-25px] hover:bg-[#FFCC4D]"
                    onClick={() => swipperRef.current?.slidePrev()}
                >
                    <svg
                        width="42"
                        height="42"
                        viewBox="0 0 42 42"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M24.5 29.75L15.75 21L24.5 12.25"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </button>
                <button
                    className="w-[52px] stroke-black hover:stroke-white h-[52px] rounded-full flex justify-center items-center border-[#E4E4E4] border bg-white absolute z-50 right-[-25px] hover:bg-[#FFCC4D]"
                    onClick={() => swipperRef.current?.slideNext()}
                >
                    <svg
                        className="rotate-180"
                        width="42"
                        height="42"
                        viewBox="0 0 42 42"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M24.5 29.75L15.75 21L24.5 12.25"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </button>
            </div>
        </section>
    );
}
