import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';

export default function PartnerSwiper() {
    // Sample array with 10 elements for mapping slides
    const slides = Array(10).fill(1); // or replace with any unique data for each slide

    return (
        <Swiper
            className="!lg:pl-[100px] !md:pl-[60px] !pl-[30px] "
            modules={[Autoplay]}
            spaceBetween={20}
            slidesPerView={'auto'}
            freeMode={true}
            autoplay={{
                delay: 0, // Continuous scrolling
                disableOnInteraction: false,
            }}
            speed={5000} // Set a longer speed for smoother transitions
            loop={true}
            onSlideChange={() => {
                if (Swiper.autoplay) {
                    Swiper.autoplay.start();
                }
            }}
        >
            {slides.map((_, index) => (
                <SwiperSlide key={index} className="!w-fit">
                    <div
                        style={{ boxShadow: '0px 0px 14px 0px #0033440F' }}
                        className="w-[193px] h-[85px] mt-2 mb-2 flex justify-center items-center px-[20px] py-[27px]"
                    >
                        <img
                            src="https://s3-alpha-sig.figma.com/img/efcc/4202/78dd57d3af3d23e4ccf47edb1f3be2b5?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YL5IOFIuj6-uzWX5aAmuuGC8gPCRaOg~TqkqaAUpD2pu4ZvlO-YaNDYowhLk7aBYkrhB-A6CUM1Qp1fC85AJryqwrL6g7dUI4evEACRmq~y~RIWnW-ZCsTITzyNntb36YN5Nh35MtGliTIwdPNZ0fKQ9gtJ9VRqwkhUo45K4Ty~XHoXGKDe86W6woUv90DnVXHsGSxurcYRG1aSMbTzzcm~oAAVjfoIEhjRvUCRl~cmsUnC61fwLF~YtvMsMjtewPGXnyBliyeAK-~KUSCxvnNSvAiltF5nOicpqSGiKUWGIH8qiGk9~XR9as9c7cB6nQSZH6hvChuFAy2gaZ4ApyQ__"
                            alt="Partner_icon"
                        />
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}
