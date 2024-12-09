import React from 'react';
import Header from '../components/Header';
import BreadcrumbNavigation from '../components/BreadCump';
import { Footer } from '../components/Footer';
import CenterColorComponent from '../components/CenterColorComponent';
import Rewiues_Section from '../components/Rewiues_swipper';

export default function EbautUs() {
    return (
        <div>
            <Header />
            <main className="lg:px-[100px] md:px-[60px] px-[30px]">
                <BreadcrumbNavigation />
                <section className="flex flex-wrap gap-8 mt-[34px] justify-center items-center px-28 text-base font-semibold leading-loose border-b border-solid border-b-slate-50 text-neutral-700 max-md:px-5 mt-34">
                    <div className="gap-2.5 self-stretch p-2.5 my-auto text-amber-300 whitespace-nowrap border-b border-solid border-b-amber-300">
                        Haqqımızda
                    </div>
                    <div className="gap-2.5 self-stretch p-2.5 my-auto whitespace-nowrap">
                        Komandamız
                    </div>
                    <div className="gap-2.5 self-stretch p-2.5 my-auto">
                        Mediada biz
                    </div>
                    <div className="gap-2.5 self-stretch p-2.5 my-auto whitespace-nowrap">
                        Blog
                    </div>
                    <div className="gap-2.5 self-stretch p-2.5 my-auto">
                        Tez-tez verilən suallar
                    </div>
                    <div className="gap-2.5 self-stretch p-2.5 my-auto whitespace-nowrap">
                        Qalereya
                    </div>
                </section>
                <section className="rounded-none mt-[32px]">
                    <div className="flex gap-5 max-md:flex-col">
                        <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                            <div className="flex flex-col w-full max-md:mt-6 max-md:max-w-full">
                                <div className="flex gap-3 items-center self-start text-3xl font-semibold text-gray-900 whitespace-nowrap">
                                    <div className="shrink-0 self-stretch my-auto h-px bg-amber-300 border border-amber-300 border-solid w-[52px]" />
                                    <div className="self-stretch my-auto ">
                                        Haqqımızda
                                    </div>
                                </div>
                                <div className="mt-6 mr-9 text-2xl text-black max-md:mr-2.5 max-md:max-w-full">
                                     “166 Yükdaşıma və Logistika – Yükünüzü
                                    daşıyırıq”
                                </div>
                                <img
                                    loading="lazy"
                                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/3624548426d7b6a9dadc12c4e4f0b0c8556aba9a41893254a6d16cfb80daf9b8?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/3624548426d7b6a9dadc12c4e4f0b0c8556aba9a41893254a6d16cfb80daf9b8?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3624548426d7b6a9dadc12c4e4f0b0c8556aba9a41893254a6d16cfb80daf9b8?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/3624548426d7b6a9dadc12c4e4f0b0c8556aba9a41893254a6d16cfb80daf9b8?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/3624548426d7b6a9dadc12c4e4f0b0c8556aba9a41893254a6d16cfb80daf9b8?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3624548426d7b6a9dadc12c4e4f0b0c8556aba9a41893254a6d16cfb80daf9b8?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/3624548426d7b6a9dadc12c4e4f0b0c8556aba9a41893254a6d16cfb80daf9b8?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/3624548426d7b6a9dadc12c4e4f0b0c8556aba9a41893254a6d16cfb80daf9b8?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099"
                                    className="object-contain mt-7 w-full rounded-lg aspect-[1.6] max-md:max-w-full"
                                />
                            </div>
                        </div>
                        <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                            <div className="mt-6 text-base leading-7 underline decoration-auto decoration-solid text-neutral-600 underline-offset-auto max-md:mt-10 max-md:max-w-full">
                                2012-ci ildə fəaliyyətinə bir neçə yük maşını
                                ilə başlayan “Yüktaksisi.az MMC” brendi hazırda
                                yükdaşıma və logistika sahəsi üzrə ölkənin
                                qabaqcıl şirkətlərindən biridir. Yüklərin
                                daşınması yalnız ölkədaxili sərhədlərlə
                                məhdudlaşmır, həmçinin beynəlxalq arenada da
                                həyata keçirilir.Daim müştərilərimizin
                                xidmətində olmaq və operativ xidmət göstərmək
                                məqsədilə 166 qaynar xəttimiz 7/24 ölkənin
                                istənilən nöqtəsindən zəngləri qəbul edir.
                                <br />
                                Göstərdiyimiz xidmətin müştərilərimizə rahat və
                                əlçatan olması məqsədilə xidmət sahələrimiz
                                genişlənməyə davam edir. Şirkətimiz yükdaşıma
                                sahəsi ilə fəaliyyətə başlasa da, hazırda
                                müxtəlif kompleks xidmətləri –
                                <span className="text-neutral-600">
                                     yükdaşıma ve logistika
                                </span>
                                , 
                                <span className="text-neutral-600">
                                    evakuasiya
                                </span>
                                <a
                                    href="https://166.az/az/isci-quvvesi-xidmeti"
                                    className="underline text-neutral-600"
                                    target="_blank"
                                >
                                    , işçi qüvvəsi
                                </a>
                                , 
                                <span className="text-neutral-600">
                                    usta xidməti, anbar xidməti
                                </span>
                                , 
                                <a
                                    href="https://166.az/az/temizlik-xidmeti"
                                    className="underline text-neutral-600"
                                    target="_blank"
                                >
                                    təmizlik xidməti
                                </a>
                                 və 
                                <span className="text-neutral-600">
                                    xalça yuma
                                </span>
                                 xidmətlərini müştərilərinə təqdim
                                edib.Xidmətlərimizin daha əlçatan olması üçün
                                sərfəli qiymət və hər bir bölgəyə xidmət
                                anlayışları ilə çalışırıq.
                                <br />
                                 166 brendi altında fəaliyyət göstərən hər bir
                                xidmətin keyfiyyətinin ölçülməsi bizim üçün
                                olduqca vacibdir. Bu məqsədlə, mütəmadi olaraq
                                müştərilərimizin göstərilən xidmətlər üzrə
                                fikirlərini öyrənir, təklif və iradlarına əsasən
                                xidmət keyfiyyətini daim təkmilləşdiririk. (ISO
                                9001:2015 - Keyfiyyət İdarəetmə Sistemi, ISO
                                45001:2018 - Peşə Sağlamlığı və Əməyin
                                Təhlükəsizliyi İdarəetmə Sistemi və ISO
                                14001:2015 - Ətraf Mühitin İdarəetmə sistemi
                                üzrə beynəlxalq sertifikatları)
                            </div>
                        </div>
                    </div>
                </section>
                <section className="rounded-none mt-[100px]">
                    <div className="flex gap-5 max-md:flex-col">
                        <div className="flex flex-col w-[50%] max-md:ml-0 max-md:w-full">
                            <div className="flex overflow-hidden flex-col grow justify-center items-start px-20 py-12 w-full text-white rounded-none bg-stone-900 max-md:px-5 max-md:mt-6 max-md:max-w-full">
                                <div className="flex flex-col justify-center max-w-full w-[228px]">
                                    <div className="flex flex-col justify-center px-2 py-5 w-full border-b border-solid border-b-neutral-700">
                                        <div className="text-4xl font-semibold">
                                            526368+
                                        </div>
                                        <div className="mt-5 text-base font-medium">
                                            Daşınmış ofis və ev
                                        </div>
                                    </div>
                                    <div className="flex flex-col justify-center px-1.5 py-5 mt-8 w-full border-b border-solid border-b-neutral-700">
                                        <div className="text-4xl font-semibold">
                                            2365+
                                        </div>
                                        <div className=" mt-5 text-base font-medium">
                                            Təmizlik edilmiş məkan
                                        </div>
                                    </div>
                                    <div className="flex flex-col justify-center px-1.5 py-5 mt-8 w-full border-b border-solid border-b-neutral-700">
                                        <div className="text-4xl font-semibold">
                                            327166+
                                        </div>
                                        <div className=" mt-5 text-base font-medium">
                                            Müştəri rəyləri
                                        </div>
                                    </div>
                                    <div className="flex flex-col justify-center px-1.5 py-5 mt-8 w-full">
                                        <div className="text-4xl font-semibold">
                                            304264+
                                        </div>
                                        <div className=" mt-5 text-base font-medium">
                                            Məmnun qalan müştərilər
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col ml-5 w-[50%] max-md:ml-0 max-md:w-full">
                            <div className="flex flex-col w-full max-md:mt-6 max-md:max-w-full">
                                <div className="flex gap-3 items-center self-start text-3xl font-semibold text-gray-900 whitespace-nowrap">
                                    <div className="shrink-0 self-stretch my-auto h-px bg-amber-300 border border-amber-300 border-solid w-[52px]" />
                                    <div className="self-stretch my-auto ">
                                        Missiyamız
                                    </div>
                                </div>
                                <div className="mt-4 text-base leading-7 text-neutral-600 max-md:max-w-full">
                                    Missiyamız, müştərilərimizi və
                                    partnyorlarımızı dərindən anlamaq, onlara
                                    effektiv logistik həlləri yüksək keyfiyyətdə
                                    təqdim etmək və eyni zamanda
                                    əməkdaşlarımızın şəxsi inkişafı və
                                    motivasiyasını üst səviyyədə tutmaqdır.
                                </div>
                                <div className="mt-7 max-md:max-w-full">
                                    <div className="flex gap-5 max-md:flex-col">
                                        <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                                            <div className="flex overflow-hidden flex-col grow justify-center items-center p-12 w-full text-lg font-medium text-gray-900 rounded-lg border border-gray-200 border-solid bg-white bg-opacity-30 max-md:px-5 max-md:mt-7">
                                                <div className="flex flex-col justify-center max-w-full w-[115px]">
                                                    <img
                                                        loading="lazy"
                                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/2cd750c9c45941680990e07ba7dce1eae59bbfd3def19e2f2dd6d3814b194899?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099"
                                                        className="object-contain self-center aspect-square w-[58px]"
                                                    />
                                                    <div className="mt-3">
                                                        Sürətli xidmət
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                                            <div className="flex overflow-hidden flex-col grow justify-center items-center p-12 w-full text-lg font-medium text-gray-900 rounded-lg border border-gray-200 border-solid bg-white bg-opacity-30 max-md:px-5 max-md:mt-7">
                                                <div className="flex flex-col max-w-full w-[115px]">
                                                    <img
                                                        loading="lazy"
                                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/3e964ccbd00f3246bb98d81a96a7e6bec7505246405b4f0a196d22b4830bf95e?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099"
                                                        className="object-contain self-center aspect-square w-[58px]"
                                                    />
                                                    <div className="mt-3">
                                                        Sərfəli qiymət
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-7 max-md:max-w-full">
                                    <div className="flex gap-5 max-md:flex-col">
                                        <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                                            <div className="flex overflow-hidden flex-col grow justify-center p-12 w-full text-lg font-medium text-gray-900 rounded-lg border border-gray-200 border-solid bg-white bg-opacity-30 max-md:px-5 max-md:mt-7">
                                                <div className="flex flex-col">
                                                    <img
                                                        loading="lazy"
                                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/4a0d45c1fae34f863b7c400442159b6ebc11e20e932182b292fd88fa28512ad1?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099"
                                                        className="object-contain self-center aspect-square w-[58px]"
                                                    />
                                                    <div className="mt-3">
                                                        Kompleks həllər
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                                            <div className="flex overflow-hidden flex-col grow px-1.5 pt-12 pb-5 w-full text-lg font-medium leading-7 text-center text-gray-900 rounded-lg border border-gray-200 border-solid bg-white bg-opacity-30 max-md:mt-7">
                                                <div className="flex flex-col">
                                                    <img
                                                        loading="lazy"
                                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/ebf40ca5130b89f6b951651c014c902abbe30d3837bf1267065c85a4b0abd84b?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099"
                                                        className="object-contain self-center aspect-square w-[58px]"
                                                    />
                                                    <div className="mt-3">
                                                        Nəqliyyat
                                                        infrastrukturunun
                                                        inkişafı
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="mt-[120px]">
                    <div className="flex flex-col mt-[50px]">
                        <CenterColorComponent />
                        <CenterColorComponent diraction="rewerse" />
                        <CenterColorComponent />
                        <CenterColorComponent diraction="rewerse" />
                        <CenterColorComponent />
                    </div>
                </section>
            </main>
            <Rewiues_Section />
            <Footer />{' '}
        </div>
    );
}
