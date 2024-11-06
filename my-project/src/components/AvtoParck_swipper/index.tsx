// components/MySwiper.tsx
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Import basic Swiper styles
// import logistika_icaon from '../../public/svg/lagistika.svg';
// import Star_icaon from '../../public/svg/Star.svg';

// Optionally import Swiper modules

export default function Avtoparck_swipper() {
    return (
        <Swiper
            className="lg:!pl-[100px] md:!pl-[60px] !pl-[30px] !py-[20px]  "
            // Add the Navigation module
            spaceBetween={24} // Spacing between slides
            slidesPerView={'auto'} // Number of slides to show
        >
            <SwiperSlide className={' flex flex-col !w-fit '}>
                <div className="flex flex-col px-3 py-4 bg-white rounded-lg max-w-[288px] shadow-[0px_0px_6px_rgba(0,0,0,0.12)] mx-2">
                    <div className="flex flex-col self-center max-w-full text-xl font-semibold w-[143px]">
                        <h2 className="text-center text-black">Soyuduculu</h2>
                        <p className="mt-3.5 text-neutral-400">
                            5.1 metr / 5 ton
                        </p>
                    </div>{' '}
                    <div className="flex flex-col px-7 mt-5 w-full">
                        <img
                            loading="lazy"
                            src="https://s3-alpha-sig.figma.com/img/6cd1/d73e/c5737edb1fd8bf985bcc702aad857b81?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DZ3nrwOFThquPuJILoYjgqbv01It0VbY8dUGAf1ttOpTzSI0BX7Wr~7pirPu8YFQc1DaI-Y7Kflqg4yRL8w~Q8nn4Q28QehJVKNWuOqU7nwSOYRhBtzCK5ShEf6ySNxgEfF4ltGjqi3SwuJG54nZK0lSHzB9V2Vkfeq3BOcZeTuW~HJciUqw2McgECi6r~2C2sD7mfgdBPly4boiTyw9d0bDa5L8kPT2-nw0oRoD6-I9QP~~n88u-WmEgBN4O4~TMzEL-0rFFdYUOzUd4Kk8s5Ky4gYTdPZFK7NJtdW6zTlaweVsRSfSt-LYkKdixMribx6yuG84ADWUBzBqE2Oj8Q__"
                            alt=""
                            className="object-contain aspect-[1.38] w-[210px]"
                        />
                    </div>{' '}
                </div>
            </SwiperSlide>
            <SwiperSlide className={' flex flex-col !w-fit '}>
                <div className="flex flex-col px-3 py-4 bg-white rounded-lg max-w-[288px] shadow-[0px_0px_6px_rgba(0,0,0,0.12)] mx-2">
                    <div className="flex flex-col self-center max-w-full text-xl font-semibold w-[143px]">
                        <h2 className="text-center text-black">Soyuduculu</h2>
                        <p className="mt-3.5 text-neutral-400">
                            5.1 metr / 5 ton
                        </p>
                    </div>{' '}
                    <div className="flex flex-col px-7 mt-5 w-full">
                        <img
                            loading="lazy"
                            src="https://s3-alpha-sig.figma.com/img/6cd1/d73e/c5737edb1fd8bf985bcc702aad857b81?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DZ3nrwOFThquPuJILoYjgqbv01It0VbY8dUGAf1ttOpTzSI0BX7Wr~7pirPu8YFQc1DaI-Y7Kflqg4yRL8w~Q8nn4Q28QehJVKNWuOqU7nwSOYRhBtzCK5ShEf6ySNxgEfF4ltGjqi3SwuJG54nZK0lSHzB9V2Vkfeq3BOcZeTuW~HJciUqw2McgECi6r~2C2sD7mfgdBPly4boiTyw9d0bDa5L8kPT2-nw0oRoD6-I9QP~~n88u-WmEgBN4O4~TMzEL-0rFFdYUOzUd4Kk8s5Ky4gYTdPZFK7NJtdW6zTlaweVsRSfSt-LYkKdixMribx6yuG84ADWUBzBqE2Oj8Q__"
                            alt=""
                            className="object-contain aspect-[1.38] w-[210px]"
                        />
                    </div>{' '}
                </div>
            </SwiperSlide>
            <SwiperSlide className={' flex flex-col !w-fit '}>
                <div className="flex flex-col px-3 py-4 bg-white rounded-lg max-w-[288px] shadow-[0px_0px_6px_rgba(0,0,0,0.12)] mx-2">
                    <div className="flex flex-col self-center max-w-full text-xl font-semibold w-[143px]">
                        <h2 className="text-center text-black">Soyuduculu</h2>
                        <p className="mt-3.5 text-neutral-400">
                            5.1 metr / 5 ton
                        </p>
                    </div>{' '}
                    <div className="flex flex-col px-7 mt-5 w-full">
                        <img
                            loading="lazy"
                            src="https://s3-alpha-sig.figma.com/img/6cd1/d73e/c5737edb1fd8bf985bcc702aad857b81?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DZ3nrwOFThquPuJILoYjgqbv01It0VbY8dUGAf1ttOpTzSI0BX7Wr~7pirPu8YFQc1DaI-Y7Kflqg4yRL8w~Q8nn4Q28QehJVKNWuOqU7nwSOYRhBtzCK5ShEf6ySNxgEfF4ltGjqi3SwuJG54nZK0lSHzB9V2Vkfeq3BOcZeTuW~HJciUqw2McgECi6r~2C2sD7mfgdBPly4boiTyw9d0bDa5L8kPT2-nw0oRoD6-I9QP~~n88u-WmEgBN4O4~TMzEL-0rFFdYUOzUd4Kk8s5Ky4gYTdPZFK7NJtdW6zTlaweVsRSfSt-LYkKdixMribx6yuG84ADWUBzBqE2Oj8Q__"
                            alt=""
                            className="object-contain aspect-[1.38] w-[210px]"
                        />
                    </div>{' '}
                </div>
            </SwiperSlide>
            <SwiperSlide className={' flex flex-col !w-fit '}>
                <div className="flex flex-col px-3 py-4 bg-white rounded-lg max-w-[288px] shadow-[0px_0px_6px_rgba(0,0,0,0.12)] mx-2">
                    <div className="flex flex-col self-center max-w-full text-xl font-semibold w-[143px]">
                        <h2 className="text-center text-black">Soyuduculu</h2>
                        <p className="mt-3.5 text-neutral-400">
                            5.1 metr / 5 ton
                        </p>
                    </div>{' '}
                    <div className="flex flex-col px-7 mt-5 w-full">
                        <img
                            loading="lazy"
                            src="https://s3-alpha-sig.figma.com/img/6cd1/d73e/c5737edb1fd8bf985bcc702aad857b81?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DZ3nrwOFThquPuJILoYjgqbv01It0VbY8dUGAf1ttOpTzSI0BX7Wr~7pirPu8YFQc1DaI-Y7Kflqg4yRL8w~Q8nn4Q28QehJVKNWuOqU7nwSOYRhBtzCK5ShEf6ySNxgEfF4ltGjqi3SwuJG54nZK0lSHzB9V2Vkfeq3BOcZeTuW~HJciUqw2McgECi6r~2C2sD7mfgdBPly4boiTyw9d0bDa5L8kPT2-nw0oRoD6-I9QP~~n88u-WmEgBN4O4~TMzEL-0rFFdYUOzUd4Kk8s5Ky4gYTdPZFK7NJtdW6zTlaweVsRSfSt-LYkKdixMribx6yuG84ADWUBzBqE2Oj8Q__"
                            alt=""
                            className="object-contain aspect-[1.38] w-[210px]"
                        />
                    </div>{' '}
                </div>
            </SwiperSlide>
            <SwiperSlide className={' flex flex-col !w-fit '}>
                <div className="flex flex-col px-3 py-4 bg-white rounded-lg max-w-[288px] shadow-[0px_0px_6px_rgba(0,0,0,0.12)] mx-2">
                    <div className="flex flex-col self-center max-w-full text-xl font-semibold w-[143px]">
                        <h2 className="text-center text-black">Soyuduculu</h2>
                        <p className="mt-3.5 text-neutral-400">
                            5.1 metr / 5 ton
                        </p>
                    </div>{' '}
                    <div className="flex flex-col px-7 mt-5 w-full">
                        <img
                            loading="lazy"
                            src="https://s3-alpha-sig.figma.com/img/6cd1/d73e/c5737edb1fd8bf985bcc702aad857b81?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DZ3nrwOFThquPuJILoYjgqbv01It0VbY8dUGAf1ttOpTzSI0BX7Wr~7pirPu8YFQc1DaI-Y7Kflqg4yRL8w~Q8nn4Q28QehJVKNWuOqU7nwSOYRhBtzCK5ShEf6ySNxgEfF4ltGjqi3SwuJG54nZK0lSHzB9V2Vkfeq3BOcZeTuW~HJciUqw2McgECi6r~2C2sD7mfgdBPly4boiTyw9d0bDa5L8kPT2-nw0oRoD6-I9QP~~n88u-WmEgBN4O4~TMzEL-0rFFdYUOzUd4Kk8s5Ky4gYTdPZFK7NJtdW6zTlaweVsRSfSt-LYkKdixMribx6yuG84ADWUBzBqE2Oj8Q__"
                            alt=""
                            className="object-contain aspect-[1.38] w-[210px]"
                        />
                    </div>{' '}
                </div>
            </SwiperSlide>
            <SwiperSlide className={' flex flex-col !w-fit '}>
                <div className="flex flex-col px-3 py-4 bg-white rounded-lg max-w-[288px] shadow-[0px_0px_6px_rgba(0,0,0,0.12)] mx-2">
                    <div className="flex flex-col self-center max-w-full text-xl font-semibold w-[143px]">
                        <h2 className="text-center text-black">Soyuduculu</h2>
                        <p className="mt-3.5 text-neutral-400">
                            5.1 metr / 5 ton
                        </p>
                    </div>{' '}
                    <div className="flex flex-col px-7 mt-5 w-full">
                        <img
                            loading="lazy"
                            src="https://s3-alpha-sig.figma.com/img/6cd1/d73e/c5737edb1fd8bf985bcc702aad857b81?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DZ3nrwOFThquPuJILoYjgqbv01It0VbY8dUGAf1ttOpTzSI0BX7Wr~7pirPu8YFQc1DaI-Y7Kflqg4yRL8w~Q8nn4Q28QehJVKNWuOqU7nwSOYRhBtzCK5ShEf6ySNxgEfF4ltGjqi3SwuJG54nZK0lSHzB9V2Vkfeq3BOcZeTuW~HJciUqw2McgECi6r~2C2sD7mfgdBPly4boiTyw9d0bDa5L8kPT2-nw0oRoD6-I9QP~~n88u-WmEgBN4O4~TMzEL-0rFFdYUOzUd4Kk8s5Ky4gYTdPZFK7NJtdW6zTlaweVsRSfSt-LYkKdixMribx6yuG84ADWUBzBqE2Oj8Q__"
                            alt=""
                            className="object-contain aspect-[1.38] w-[210px]"
                        />
                    </div>{' '}
                </div>
            </SwiperSlide>
            <SwiperSlide className={' flex flex-col !w-fit '}>
                <div className="flex flex-col px-3 py-4 bg-white rounded-lg max-w-[288px] shadow-[0px_0px_6px_rgba(0,0,0,0.12)] mx-2">
                    <div className="flex flex-col self-center max-w-full text-xl font-semibold w-[143px]">
                        <h2 className="text-center text-black">Soyuduculu</h2>
                        <p className="mt-3.5 text-neutral-400">
                            5.1 metr / 5 ton
                        </p>
                    </div>{' '}
                    <div className="flex flex-col px-7 mt-5 w-full">
                        <img
                            loading="lazy"
                            src="https://s3-alpha-sig.figma.com/img/6cd1/d73e/c5737edb1fd8bf985bcc702aad857b81?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DZ3nrwOFThquPuJILoYjgqbv01It0VbY8dUGAf1ttOpTzSI0BX7Wr~7pirPu8YFQc1DaI-Y7Kflqg4yRL8w~Q8nn4Q28QehJVKNWuOqU7nwSOYRhBtzCK5ShEf6ySNxgEfF4ltGjqi3SwuJG54nZK0lSHzB9V2Vkfeq3BOcZeTuW~HJciUqw2McgECi6r~2C2sD7mfgdBPly4boiTyw9d0bDa5L8kPT2-nw0oRoD6-I9QP~~n88u-WmEgBN4O4~TMzEL-0rFFdYUOzUd4Kk8s5Ky4gYTdPZFK7NJtdW6zTlaweVsRSfSt-LYkKdixMribx6yuG84ADWUBzBqE2Oj8Q__"
                            alt=""
                            className="object-contain aspect-[1.38] w-[210px]"
                        />
                    </div>{' '}
                </div>
            </SwiperSlide>
            <SwiperSlide className={' flex flex-col !w-fit '}>
                <div className="flex flex-col px-3 py-4 bg-white rounded-lg max-w-[288px] shadow-[0px_0px_6px_rgba(0,0,0,0.12)] mx-2">
                    <div className="flex flex-col self-center max-w-full text-xl font-semibold w-[143px]">
                        <h2 className="text-center text-black">Soyuduculu</h2>
                        <p className="mt-3.5 text-neutral-400">
                            5.1 metr / 5 ton
                        </p>
                    </div>{' '}
                    <div className="flex flex-col px-7 mt-5 w-full">
                        <img
                            loading="lazy"
                            src="https://s3-alpha-sig.figma.com/img/6cd1/d73e/c5737edb1fd8bf985bcc702aad857b81?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DZ3nrwOFThquPuJILoYjgqbv01It0VbY8dUGAf1ttOpTzSI0BX7Wr~7pirPu8YFQc1DaI-Y7Kflqg4yRL8w~Q8nn4Q28QehJVKNWuOqU7nwSOYRhBtzCK5ShEf6ySNxgEfF4ltGjqi3SwuJG54nZK0lSHzB9V2Vkfeq3BOcZeTuW~HJciUqw2McgECi6r~2C2sD7mfgdBPly4boiTyw9d0bDa5L8kPT2-nw0oRoD6-I9QP~~n88u-WmEgBN4O4~TMzEL-0rFFdYUOzUd4Kk8s5Ky4gYTdPZFK7NJtdW6zTlaweVsRSfSt-LYkKdixMribx6yuG84ADWUBzBqE2Oj8Q__"
                            alt=""
                            className="object-contain aspect-[1.38] w-[210px]"
                        />
                    </div>{' '}
                </div>
            </SwiperSlide>
            <SwiperSlide className={' flex flex-col !w-fit '}>
                <div className="flex flex-col px-3 py-4 bg-white rounded-lg max-w-[288px] shadow-[0px_0px_6px_rgba(0,0,0,0.12)] mx-2">
                    <div className="flex flex-col self-center max-w-full text-xl font-semibold w-[143px]">
                        <h2 className="text-center text-black">Soyuduculu</h2>
                        <p className="mt-3.5 text-neutral-400">
                            5.1 metr / 5 ton
                        </p>
                    </div>{' '}
                    <div className="flex flex-col px-7 mt-5 w-full">
                        <img
                            loading="lazy"
                            src="https://s3-alpha-sig.figma.com/img/6cd1/d73e/c5737edb1fd8bf985bcc702aad857b81?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DZ3nrwOFThquPuJILoYjgqbv01It0VbY8dUGAf1ttOpTzSI0BX7Wr~7pirPu8YFQc1DaI-Y7Kflqg4yRL8w~Q8nn4Q28QehJVKNWuOqU7nwSOYRhBtzCK5ShEf6ySNxgEfF4ltGjqi3SwuJG54nZK0lSHzB9V2Vkfeq3BOcZeTuW~HJciUqw2McgECi6r~2C2sD7mfgdBPly4boiTyw9d0bDa5L8kPT2-nw0oRoD6-I9QP~~n88u-WmEgBN4O4~TMzEL-0rFFdYUOzUd4Kk8s5Ky4gYTdPZFK7NJtdW6zTlaweVsRSfSt-LYkKdixMribx6yuG84ADWUBzBqE2Oj8Q__"
                            alt=""
                            className="object-contain aspect-[1.38] w-[210px]"
                        />
                    </div>{' '}
                </div>
            </SwiperSlide>
            <SwiperSlide className={' flex flex-col !w-fit '}>
                <div className="flex flex-col px-3 py-4 bg-white rounded-lg max-w-[288px] shadow-[0px_0px_6px_rgba(0,0,0,0.12)] mx-2">
                    <div className="flex flex-col self-center max-w-full text-xl font-semibold w-[143px]">
                        <h2 className="text-center text-black">Soyuduculu</h2>
                        <p className="mt-3.5 text-neutral-400">
                            5.1 metr / 5 ton
                        </p>
                    </div>{' '}
                    <div className="flex flex-col px-7 mt-5 w-full">
                        <img
                            loading="lazy"
                            src="https://s3-alpha-sig.figma.com/img/6cd1/d73e/c5737edb1fd8bf985bcc702aad857b81?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DZ3nrwOFThquPuJILoYjgqbv01It0VbY8dUGAf1ttOpTzSI0BX7Wr~7pirPu8YFQc1DaI-Y7Kflqg4yRL8w~Q8nn4Q28QehJVKNWuOqU7nwSOYRhBtzCK5ShEf6ySNxgEfF4ltGjqi3SwuJG54nZK0lSHzB9V2Vkfeq3BOcZeTuW~HJciUqw2McgECi6r~2C2sD7mfgdBPly4boiTyw9d0bDa5L8kPT2-nw0oRoD6-I9QP~~n88u-WmEgBN4O4~TMzEL-0rFFdYUOzUd4Kk8s5Ky4gYTdPZFK7NJtdW6zTlaweVsRSfSt-LYkKdixMribx6yuG84ADWUBzBqE2Oj8Q__"
                            alt=""
                            className="object-contain aspect-[1.38] w-[210px]"
                        />
                    </div>{' '}
                </div>
            </SwiperSlide>
        </Swiper>
    );
}
