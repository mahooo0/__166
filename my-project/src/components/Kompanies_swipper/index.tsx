// components/MySwiper.tsx
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Import basic Swiper styles
import CompanieCArd from '../CompaniesCard';
// import logistika_icaon from '../../public/svg/lagistika.svg';
// import Star_icaon from '../../public/svg/Star.svg';

// Optionally import Swiper modules

export default function Kompanies_swipper() {
    return (
        <Swiper
            className="lg:!pl-[100px] md:!pl-[60px] !pl-[30px] !mt-10"
            // Add the Navigation module
            spaceBetween={24} // Spacing between slides
            slidesPerView={'auto'} // Number of slides to show
        >
            <SwiperSlide className={' flex flex-col !w-fit '}>
                <CompanieCArd />
            </SwiperSlide>{' '}
            <SwiperSlide className={' flex flex-col !w-fit '}>
                <CompanieCArd />
            </SwiperSlide>{' '}
            <SwiperSlide className={' flex flex-col !w-fit '}>
                <CompanieCArd />
            </SwiperSlide>
            <SwiperSlide className={' flex flex-col !w-fit '}>
                <CompanieCArd />
            </SwiperSlide>
            <SwiperSlide className={' flex flex-col !w-fit '}>
                <CompanieCArd />
            </SwiperSlide>
            <SwiperSlide className={' flex flex-col !w-fit '}>
                <CompanieCArd />
            </SwiperSlide>
            <SwiperSlide className={' flex flex-col !w-fit '}>
                <CompanieCArd />
            </SwiperSlide>
            <SwiperSlide className={' flex flex-col !w-fit '}>
                <CompanieCArd />
            </SwiperSlide>
            <SwiperSlide className={' flex flex-col !w-fit '}>
                <CompanieCArd />
            </SwiperSlide>
            <SwiperSlide className={' flex flex-col !w-fit '}>
                <CompanieCArd />
            </SwiperSlide>
        </Swiper>
    );
}
