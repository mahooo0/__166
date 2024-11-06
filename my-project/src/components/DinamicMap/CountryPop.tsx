import React from 'react';
type data = { img: string; title: string };
interface Proops {
    Class: string;
    show: boolean;
    data: data;
}
export default function CountryPop({ Class, show, data }: Proops) {
    return (
        <div
            className={`px-[12px] pt-[5px] pb-[22px] bg-no-repeat bg-center bg-cover transform-all duration-300 ${
                show ? ' opacity-100' : ' opacity-0'
            } hover:opacity-100 ${Class}`}
            style={{
                backgroundImage: 'url("/images/CountryPopBg.png")',
                backgroundSize: '110%',
            }}
        >
            <div className="flex flex-row gap-1 items-center">
                <img src={data.img} alt="Uzbekistan flag" />
                <p className="text-[12px] font-normal">{data.title}</p>
            </div>
        </div>
    );
}
