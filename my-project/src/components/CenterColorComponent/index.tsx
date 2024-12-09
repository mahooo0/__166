import React, { useEffect, useState, useRef } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const CenterColorComponent = ({
    diraction = 'row',
}: {
    diraction?: 'row' | 'rewerse';
}) => {
    const [isAtTheCentre, setIsAtTheCentre] = useState<boolean>(false);
    const componentRef = useRef<HTMLDivElement | null>(null);

    const checkIfCentered = () => {
        if (componentRef.current) {
            const rect = componentRef.current.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            // Check if the element's center is within the center of the viewport
            const elementCenter = rect.top + rect.height / 2;
            const isCenterInView =
                elementCenter >= windowHeight / 2 - 150 &&
                elementCenter <= windowHeight / 2 + 150;

            setIsAtTheCentre(isCenterInView);
        }
    };

    useEffect(() => {
        AOS.init(); // Initialize AOS
        window.addEventListener('scroll', checkIfCentered);
        checkIfCentered(); // Initial check

        return () => {
            window.removeEventListener('scroll', checkIfCentered);
        };
    }, []);

    if (diraction === 'row') {
        return (
            <div className="w-full flex" data-aos="fade-up">
                <div className="w-2/5 lg:block hidden"></div>
                <div className="w-1/5  flex-col justify-center items-center lg:flex hidden">
                    <div
                        ref={componentRef}
                        style={{ transition: 'background-color 0.4s' }}
                        className={`w-[8px] h-[300px] rounded-t-lg ${
                            isAtTheCentre ? 'bg-[#FFCC4D]' : 'bg-[#F2F2F2]'
                        }`}
                        // Apply the fade-up effect here
                    ></div>
                </div>
                <div className="lg:w-2/5 w-full flex flex-col lg:items-start items-center">
                    <h5
                        style={{ transition: 'background-color 0.4s' }}
                        className={`h-11 w-11 rounded-full flex justify-center items-center text-white text-[20px] font-semibold ${
                            isAtTheCentre ? 'bg-[#FFCC4D]' : 'bg-[#D7D7D7]'
                        }`}
                        // Apply the fade-up effect here
                    >
                        1
                    </h5>
                    <h6 className="mt-[18px] text-[18px] font-semibold lg:text-start text-center">
                        166-ya zəng etməklə sifariş verirsiniz
                    </h6>
                    <p className="text-4 mt-[10px] font-normal lg:text-start text-center">
                        Birbaşa 166-ya zəng edə və ya sayt vasitəsilə “Sizə
                        zəng”-dən istifadə etməklə biz əlaqə saxlaya bilərik 166
                        və ya
                    </p>
                </div>
            </div>
        );
    } else {
        return (
            <div className="w-full flex flex-row-reverse" data-aos="fade-up">
                <div className="w-2/5 lg:block hidden"></div>
                <div className="w-1/5  flex-col justify-center items-center lg:flex hidden">
                    <div
                        ref={componentRef}
                        style={{ transition: 'background-color 0.4s' }}
                        className={`w-[8px] h-[300px] rounded-t-lg ${
                            isAtTheCentre ? 'bg-[#FFCC4D]' : 'bg-[#F2F2F2]'
                        }`}
                        // Apply the fade-up effect here
                    ></div>
                </div>
                <div className="lg:w-2/5 w-full flex flex-col lg:items-end items-center">
                    <h5
                        style={{ transition: 'background-color 0.4s' }}
                        className={`h-11 w-11 rounded-full flex justify-center items-center text-white text-[20px] font-semibold ${
                            isAtTheCentre ? 'bg-[#FFCC4D]' : 'bg-[#D7D7D7]'
                        }`}
                        // Apply the fade-up effect here
                    >
                        1
                    </h5>
                    <h6 className="mt-[18px] text-[18px] font-semibold lg:text-end text-center">
                        166-ya zəng etməklə sifariş verirsiniz
                    </h6>
                    <p className="text-4 mt-[10px] font-normal lg:text-end text-center">
                        Birbaşa 166-ya zəng edə və ya sayt vasitəsilə “Sizə
                        zəng”-dən istifadə etməklə biz əlaqə saxlaya bilərik 166
                        və ya
                    </p>
                </div>
            </div>
        );
    }
};

export default CenterColorComponent;
