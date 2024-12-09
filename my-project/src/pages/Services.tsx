import React from 'react';
import Header from '../components/Header';
import { Footer } from '../components/Footer';
import BreadcrumbNavigation from '../components/BreadCump';
import { Sidebar } from '../components/Sidebar';
// import Sidebar from '../components/Sidebar';
const features = [
    { text: 'WI-FI sisteminin olması' },
    { text: 'Powerbankların olması' },
    { text: 'Sürət həddinə xüsusi nəzarət (GPS)' },
    { text: '18-20 nəfərlik olması' },
    { text: 'Yumşaq və komfortlu oturacaq' },
    { text: 'Kondisioner və monitor' },
    { text: 'Masa və işıqlı salon' },
    { text: 'Mütəmadi təmizlənən salon' },
    { text: 'Baqaj' },
    { text: 'Peşəkar sürücü heyəti' },
];
export default function Services() {
    return (
        <div>
            <Header />
            <main className="lg:px-[100px] md:px-[60px] px-[30px]">
                <BreadcrumbNavigation />
                <div className="flex lg:flex-row flex-col gap-9 mt-6">
                    <Sidebar />
                    <div className="w-full flex flex-col">
                        <div className="flex gap-5 max-md:flex-col">
                            <div className="flex flex-col w-[68%] max-md:ml-0 max-md:w-full">
                                <div className="flex flex-col w-full font-semibold max-md:mt-6 max-md:max-w-full">
                                    <div className="self-start text-3xl text-gray-900">
                                        Transport
                                    </div>
                                    <div className="flex flex-wrap gap-10 justify-between items-center mt-3 w-full max-md:max-w-full">
                                        <div className="gap-2.5 self-stretch px-2.5 py-2 my-auto text-base text-white bg-amber-300 rounded-lg min-h-[36px]">
                                            Sifariş ver
                                        </div>
                                        <div className="flex flex-col justify-center items-center self-stretch py-1.5 my-auto text-lg text-black whitespace-nowrap rounded-lg border border-solid bg-neutral-50 border-zinc-100 min-h-[36px] w-[92px]">
                                            <div className="flex gap-1.5 justify-center items-center">
                                                <img
                                                    loading="lazy"
                                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/65f9a8759e8d4fe80432e765c87c23f6b0e35cdf4361b3ba4ea6175f36a6d0b9?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099"
                                                    className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
                                                />
                                                <div className="self-stretch my-auto">
                                                    166
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-5 text-base leading-7 text-neutral-700 max-md:mr-2.5 max-md:max-w-full">
                                        Turizm, iş və digər sahələrdə ən rahat,
                                        müasir standartlara uyğun və operativ
                                        sərnişin daşınma xidmətini 166 Transport
                                        təklif edir. 
                                        <br />
                                        166 Transport xidməti hazırda ölkənin
                                        Sprinter icarəsi və turların təşkili
                                        üzrə ən qabaqcıl xidmətlərindən
                                        biridir. 
                                        <br />
                                        Peşəkar sürücülərimiz tərəfindən
                                        sərnişinlərin bir ünvandan digər ünvana
                                        təhlükəsiz daşınmasını təmin edirik.
                                        <br />
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col ml-5 w-[32%] max-md:ml-0 max-md:w-full">
                                <img
                                    loading="lazy"
                                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/d89659267fb458b1c498506efda0b0592dd0f861501a0b8d4799ebd4afd416dd?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/d89659267fb458b1c498506efda0b0592dd0f861501a0b8d4799ebd4afd416dd?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d89659267fb458b1c498506efda0b0592dd0f861501a0b8d4799ebd4afd416dd?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/d89659267fb458b1c498506efda0b0592dd0f861501a0b8d4799ebd4afd416dd?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/d89659267fb458b1c498506efda0b0592dd0f861501a0b8d4799ebd4afd416dd?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d89659267fb458b1c498506efda0b0592dd0f861501a0b8d4799ebd4afd416dd?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/d89659267fb458b1c498506efda0b0592dd0f861501a0b8d4799ebd4afd416dd?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/d89659267fb458b1c498506efda0b0592dd0f861501a0b8d4799ebd4afd416dd?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099"
                                    className="object-contain grow w-full aspect-[0.58] max-md:mt-6"
                                />
                            </div>
                        </div>
                        <div className="flex flex-col items-start rounded-lg w-full">
                            <div className="w-full flex flex-wrap gap-5 mt-8">
                                {features.map((feature, index) => (
                                    <div
                                        key={index}
                                        className="flex-grow flex-shrink-0 px-5 py-11  text-base leading-7 text-center text-black bg-white rounded-lg shadow-[0px_0px_4px_rgba(105,105,105,0.12)] min-h-[138px] max-w-[210px] w-[210px]"
                                    >
                                        {feature.text}
                                    </div>
                                ))}
                            </div>
                            <div className="gap-2.5 self-stretch px-7 pt-6 mt-8 text-base leading-7 rounded-lg border border-solid border-zinc-100 text-neutral-700 max-md:px-5 max-md:max-w-full">
                                Şəhərdaxili sərnişin daşınması 
                                <br />
                                Ailəvi, dostlarla və ya iş yoldaşlarınızla birgə
                                 istirahət üçün
                                <br />
                                Toy, yas və digər mərasimlər üçün 
                                <br />
                                Ölkədaxili işgüzar səfərlər məqsədi ilə (işçi
                                heyətinin daşınması)
                                <br />
                                Hava limanından turistlərin istənilən ünvana
                                çatdırılması 
                                <br />
                                Həftəiçi şirkət işçilərinin daşınması
                                <br />
                                Məktəblilərin və universitet tələbələrinin
                                daşınması
                                <br />
                                Müalicə məqsədilə bölgələrimizə səyahət edən
                                şəxslər
                                <br />
                                Ölkənin dörd bir yanına səfər təşkil edən tur
                                agentləri
                                <br />
                                Zavod, fabrik, bank işçilərinin istirahət və ya
                                iş məqsədilə daşınması 
                                <br />
                                Özəl səfərlər üçün sürücü və nəqliyyat
                                vasitəsinin icarəsi
                                <br />
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />{' '}
        </div>
    );
}
