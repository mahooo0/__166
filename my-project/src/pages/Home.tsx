import React from 'react';
import Header from '../components/Header';
import CountriesSlider from '../components/CountriesSlider';
import Partner_swipper from '../components/PartnersSlider/index';
import Services_swipper from '../components/Services_swipper';
import Avtoparck_swipper from '../components/AvtoParck_swipper';
import Rewiues_swipper from '../components/Rewiues_swipper';
import Rewiues_Section from '../components/Rewiues_swipper';
import DinamicMap from '../components/DinamicMap';
import { Footer } from '../components/Footer';
// import CountriesSlider from '../components/PartnersSwipper';

export default function Home() {
    return (
        <div>
            <Header />
            <section className="mt-9 CountriesSwippenSection">
                <h1
                    data-layername="pesəkarKomandamizVəInnovativHəllərimizIləYukDasimalariniziDahaSurətliVəEffektivSəkildəHəyataKeciririk"
                    className="lg:px-[100px] md:px-[60px] px-[30px] pb-[30px] text-5xl font-bold text-black max-w-[1119px] max-md:max-w-full lg:text-4xl md:text-4xl text-[32px]"
                >
                    <span className=" lg:leading-[60px] leading-7">
                        Peşəkar komandamız və innovativ həllərimiz ilə yük
                        daşımalarınızı daha{' '}
                        <span className="text-amber-300">sürətli</span>
                        və <span className="text-amber-300">effektiv</span>{' '}
                        şəkildə həyata keçiririk.
                    </span>
                </h1>
                <CountriesSlider />
            </section>
            <section className="lg:px-[100px] md:px-[60px] px-[30px] mt-8">
                <div className="rounded-lg">
                    <div className="flex gap-5 max-md:flex-col">
                        <div className="flex flex-col w-[51%] max-md:ml-0 max-md:w-full">
                            <div className="flex overflow-hidden flex-col grow pt-8 pr-6 w-full bg-amber-300 rounded-lg max-md:mt-6 max-md:max-w-full">
                                <div className="self-end text-3xl font-semibold text-black max-md:mr-1.5">
                                    Xidmətlərimiz
                                </div>
                                <div className="flex relative flex-col items-end px-20 pt-72 pb-8 min-h-[338px] max-md:pt-24 max-md:pl-5 max-md:max-w-full">
                                    <img
                                        loading="lazy"
                                        srcSet="https://cdn.builder.io/api/v1/image/assets/c6f3c7bb740649e5a32c147b3037a1c2/1bde1f8f5de25d576fc71bfb3c535f6db173e289d5ff897f5f1f09ea8fcf69da?apiKey=c6f3c7bb740649e5a32c147b3037a1c2&width=100 100w, https://cdn.builder.io/api/v1/image/assets/c6f3c7bb740649e5a32c147b3037a1c2/1bde1f8f5de25d576fc71bfb3c535f6db173e289d5ff897f5f1f09ea8fcf69da?apiKey=c6f3c7bb740649e5a32c147b3037a1c2&width=200 200w, https://cdn.builder.io/api/v1/image/assets/c6f3c7bb740649e5a32c147b3037a1c2/1bde1f8f5de25d576fc71bfb3c535f6db173e289d5ff897f5f1f09ea8fcf69da?apiKey=c6f3c7bb740649e5a32c147b3037a1c2&width=400 400w, https://cdn.builder.io/api/v1/image/assets/c6f3c7bb740649e5a32c147b3037a1c2/1bde1f8f5de25d576fc71bfb3c535f6db173e289d5ff897f5f1f09ea8fcf69da?apiKey=c6f3c7bb740649e5a32c147b3037a1c2&width=800 800w, https://cdn.builder.io/api/v1/image/assets/c6f3c7bb740649e5a32c147b3037a1c2/1bde1f8f5de25d576fc71bfb3c535f6db173e289d5ff897f5f1f09ea8fcf69da?apiKey=c6f3c7bb740649e5a32c147b3037a1c2&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/c6f3c7bb740649e5a32c147b3037a1c2/1bde1f8f5de25d576fc71bfb3c535f6db173e289d5ff897f5f1f09ea8fcf69da?apiKey=c6f3c7bb740649e5a32c147b3037a1c2&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/c6f3c7bb740649e5a32c147b3037a1c2/1bde1f8f5de25d576fc71bfb3c535f6db173e289d5ff897f5f1f09ea8fcf69da?apiKey=c6f3c7bb740649e5a32c147b3037a1c2&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/c6f3c7bb740649e5a32c147b3037a1c2/1bde1f8f5de25d576fc71bfb3c535f6db173e289d5ff897f5f1f09ea8fcf69da?apiKey=c6f3c7bb740649e5a32c147b3037a1c2&"
                                        className="object-cover absolute inset-0 size-full"
                                    />
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/c6f3c7bb740649e5a32c147b3037a1c2/8cb0618e609cf9365e652f69d78a797a8c18f60a4ecadff3b544e8aa18091df0?apiKey=c6f3c7bb740649e5a32c147b3037a1c2&"
                                        className="object-contain rounded-lg aspect-[2.33] w-[84px] max-sm:w-[95px] absolute z-20 bottom-3 right-3"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col ml-5 w-[24%] max-md:ml-0 max-md:w-full">
                            <div className="flex overflow-hidden flex-col grow p-8 w-full text-3xl font-semibold text-black whitespace-nowrap bg-amber-300 rounded-lg max-md:px-5 max-md:mt-6">
                                <div className="self-start">Partnyorlar</div>
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/c6f3c7bb740649e5a32c147b3037a1c2/8cb0618e609cf9365e652f69d78a797a8c18f60a4ecadff3b544e8aa18091df0?apiKey=c6f3c7bb740649e5a32c147b3037a1c2&"
                                    className="object-contain self-end mt-72 rounded-lg aspect-[2.33] w-[84px] max-md:mt-10"
                                />
                            </div>
                        </div>
                        <div className="flex flex-col ml-5 w-[24%] max-md:ml-0 max-md:w-full">
                            <div className="flex flex-col grow text-3xl font-semibold text-black max-md:mt-6  justify-between">
                                <div className="flex overflow-hidden flex-col p-8 whitespace-nowrap bg-amber-300 rounded-lg max-md:px-5 justify-between">
                                    <div className="self-start">Haqqımızda</div>
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/c6f3c7bb740649e5a32c147b3037a1c2/8cb0618e609cf9365e652f69d78a797a8c18f60a4ecadff3b544e8aa18091df0?apiKey=c6f3c7bb740649e5a32c147b3037a1c2&"
                                        className="object-contain self-end mt-14 rounded-lg aspect-[2.33] w-[84px] max-md:mt-10"
                                    />
                                </div>
                                <div className="flex overflow-hidden flex-col justify-center p-8 mt-6 bg-amber-300 rounded-lg max-md:px-5">
                                    <div>Müştəri Rəyləri</div>
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/c6f3c7bb740649e5a32c147b3037a1c2/8cb0618e609cf9365e652f69d78a797a8c18f60a4ecadff3b544e8aa18091df0?apiKey=c6f3c7bb740649e5a32c147b3037a1c2&"
                                        className="object-contain self-end mt-14 rounded-lg aspect-[2.33] w-[84px] max-md:mt-10"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="lg:px-[100px] md:px-[60px] px-[30px] mt-[120px]">
                <div className="flex flex-col">
                    <div className="flex z-10 flex-wrap gap-10 items-start -mt-3 w-full max-w-[1164px] max-md:max-w-full">
                        <div className="grow shrink text-5xl font-semibold text-black w-[417px] max-md:max-w-full max-md:text-4xl">
                            Bizim Uğur Hekayəmiz
                        </div>
                        <div className="grow shrink mt-4 text-base text-slate-500 w-[349px] max-md:max-w-full">
                            Uzun illərin təcrübəsi ilə müştərilərimizin inamını
                            və etibarını qazanmışıq. Hər bir nailiyyətimiz birgə
                            gördüyümüz işlərin nəticəsidir və bu yolda davam
                            edirik.
                        </div>
                    </div>
                    <div className="flex flex-wrap gap-6 justify-center items-center mt-20 max-md:mt-10">
                        <div className="flex flex-col justify-center self-stretch px-8 py-7 my-auto bg-white rounded-lg border border-solid border-neutral-200 min-w-[240px] w-[392px] max-md:px-5">
                            <div className="self-center text-6xl font-bold text-zinc-800 max-md:text-4xl">
                                <span className="text-amber-300">600</span> +
                            </div>
                            <div className="mt-3.5 text-xl font-semibold text-center text-neutral-700">
                                Tərəfdaş
                            </div>
                            <div className="mt-3.5 text-base text-center text-neutral-400">
                                Əsas tərəfdaşlarımızla uzunmüddətli və etibarlı
                                işgüzar münasibətlər qururuq.
                            </div>
                        </div>
                        <div className="flex flex-col justify-center self-stretch px-8 py-7 my-auto bg-white rounded-lg border border-solid border-neutral-200 min-w-[240px] w-[392px] max-md:px-5">
                            <div className="self-center text-6xl font-bold text-zinc-800 max-md:text-4xl">
                                <span className="text-amber-300">300K</span> +
                            </div>
                            <div className="mt-3.5 text-xl font-semibold text-center text-neutral-700">
                                Müştəri məmnuniyyəti
                            </div>
                            <div className="mt-3.5 text-base text-center text-neutral-400">
                                Müştərilərimiz bizdən aldıqları xidmətin
                                keyfiyyətindən razıdırlar.
                            </div>
                        </div>
                        <div className="flex flex-col justify-center self-stretch px-8 py-7 my-auto bg-white rounded-lg border border-solid border-neutral-200 min-w-[240px] w-[392px] max-md:px-5">
                            <div className="self-center text-6xl font-bold text-zinc-800 max-md:text-4xl">
                                <span className="text-amber-300">13 il</span> +
                            </div>{' '}
                            <div className="mt-3.5 text-xl font-semibold text-center text-neutral-700">
                                Təcrübə
                            </div>
                            <div className="mt-3.5 text-base text-center text-neutral-400">
                                Uzun illər ərzində sektorun liderlərindən biri
                                olaraq fəaliyyət göstəririk.
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="mt-[67px] CountriesSwippenSection">
                <Partner_swipper />
            </section>
            <section className="mt-[120px]">
                <div className="flex flex-wrap gap-10 justify-between items-end lg:px-[100px] md:px-[60px] px-[30px] mb-[30px]">
                    <h2 className="text-5xl font-semibold text-blue-950 max-md:text-4xl">
                        Xidmətlər
                    </h2>
                    <button className="flex gap-2 justify-center items-center px-3 text-xl text-amber-300 rounded-lg">
                        <span className="self-stretch my-auto">
                            Hamısına bax
                        </span>
                        <img
                            src="https://cdn.builder.io/api/v1/image/assets/c6f3c7bb740649e5a32c147b3037a1c2/1e6d06d51071ce63a2021f8120ada8a018a48f1d67c6f56d7660f1c6022079a4?apiKey=c6f3c7bb740649e5a32c147b3037a1c2&"
                            alt=""
                            className="object-contain shrink-0 self-stretch my-auto aspect-square w-[18px]"
                        />
                    </button>{' '}
                </div>
                <Services_swipper />
            </section>
            <section className="mt-[120px]">
                <div className="flex flex-wrap gap-10 justify-between items-end lg:px-[100px] md:px-[60px] px-[30px] mb-[30px]">
                    <h2 className="text-5xl font-semibold text-blue-950 max-md:text-4xl">
                        Xidmətlər
                    </h2>
                    <button className="flex gap-2 justify-center items-center px-3 text-xl text-amber-300 rounded-lg">
                        <span className="self-stretch my-auto">
                            Bizim avtopark{' '}
                        </span>
                        <img
                            src="https://cdn.builder.io/api/v1/image/assets/c6f3c7bb740649e5a32c147b3037a1c2/1e6d06d51071ce63a2021f8120ada8a018a48f1d67c6f56d7660f1c6022079a4?apiKey=c6f3c7bb740649e5a32c147b3037a1c2&"
                            alt=""
                            className="object-contain shrink-0 self-stretch my-auto aspect-square w-[18px]"
                        />
                    </button>{' '}
                </div>
                <Avtoparck_swipper />
            </section>
            <section className="mt-[120px] lg:px-[100px] md:px-[60px] px-[30px]">
                <div className="flex flex-wrap gap-10 justify-between items-end  mb-[30px]">
                    <h2 className="text-5xl font-semibold text-blue-950 max-md:text-4xl">
                        Xidmətlər
                    </h2>
                    <button className="flex gap-2 justify-center items-center px-3 text-xl text-amber-300 rounded-lg">
                        <span className="self-stretch my-auto">
                            Bizim avtopark{' '}
                        </span>
                        <img
                            src="https://cdn.builder.io/api/v1/image/assets/c6f3c7bb740649e5a32c147b3037a1c2/1e6d06d51071ce63a2021f8120ada8a018a48f1d67c6f56d7660f1c6022079a4?apiKey=c6f3c7bb740649e5a32c147b3037a1c2&"
                            alt=""
                            className="object-contain shrink-0 self-stretch my-auto aspect-square w-[18px]"
                        />
                    </button>{' '}
                </div>
                <div
                    style={{
                        backgroundImage:
                            "url('https://s3-alpha-sig.figma.com/img/3a54/edf3/d9e0a6aa53d450e6687e597e262b10a3?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DEPEhmqFgw7CH8H8aZ6TFD9KwowPN5Toi01lPj2febCbrTP7H6KgDFcbUbKFt~wGKjCbuUYCq3WeXXMGwb4B8ENzjG~OtFdhN4LJ9iXgR~gQRa95TVd4YdA014ErfhSNo4TOdO9OtFfSc~nnhxganzPnDxbs-R7ZJbo7yPfkXvMe5ofwWZpzrbK3ziNBnVTM9CX2bvW-6g0Moz129Z8vE-ebdBQNgMlPJ0ncUlkPPdmjZwzuUZvgHgWbK3VoCCFtKD9QfVB7hCM9lkdeLtv4X0sdDdWpHlO6pzBODVIUyRn5nNBRBiOAPXL14nuoCKEFuRuNXkXVIAsPQnyTRnmq0w__')",
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                    }}
                >
                    <div className="flex overflow-hidden flex-col items-start pt-40 pr-20 pb-8 pl-7 w-full rounded-lg bg-black bg-opacity-40 max-md:px-5 max-md:pt-24 max-md:max-w-full">
                        <div className="flex flex-col">
                            <h4 className="text-sm text-stone-300">
                                17 June 2021
                            </h4>
                            <p className="text-lg font-medium text-white">
                                Lorem ipsum dolor sit amet consectetur.
                            </p>
                        </div>
                        <button className="gap-2.5 self-stretch p-2.5 mt-6 text-base font-semibold text-white bg-amber-300 rounded-lg w-[136px]">
                            Ətraflı oxu
                        </button>
                    </div>
                </div>
                <div className="flex flex-row  gap-6 justify-center flex-wrap mt-6">
                    <div className="flex overflow-hidden flex-col grow shrink self-stretch pb-10 my-auto rounded-lg bg-neutral-50 min-w-[240px] w-[314px]">
                        <img
                            loading="lazy"
                            srcSet="https://cdn.builder.io/api/v1/image/assets/c6f3c7bb740649e5a32c147b3037a1c2/5fd8af26411efb2adbea6a9b8510a54beb180c7912f291f9d74ec40a7540ea9f?apiKey=c6f3c7bb740649e5a32c147b3037a1c2&width=100 100w, https://cdn.builder.io/api/v1/image/assets/c6f3c7bb740649e5a32c147b3037a1c2/5fd8af26411efb2adbea6a9b8510a54beb180c7912f291f9d74ec40a7540ea9f?apiKey=c6f3c7bb740649e5a32c147b3037a1c2&width=200 200w, https://cdn.builder.io/api/v1/image/assets/c6f3c7bb740649e5a32c147b3037a1c2/5fd8af26411efb2adbea6a9b8510a54beb180c7912f291f9d74ec40a7540ea9f?apiKey=c6f3c7bb740649e5a32c147b3037a1c2&width=400 400w, https://cdn.builder.io/api/v1/image/assets/c6f3c7bb740649e5a32c147b3037a1c2/5fd8af26411efb2adbea6a9b8510a54beb180c7912f291f9d74ec40a7540ea9f?apiKey=c6f3c7bb740649e5a32c147b3037a1c2&width=800 800w, https://cdn.builder.io/api/v1/image/assets/c6f3c7bb740649e5a32c147b3037a1c2/5fd8af26411efb2adbea6a9b8510a54beb180c7912f291f9d74ec40a7540ea9f?apiKey=c6f3c7bb740649e5a32c147b3037a1c2&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/c6f3c7bb740649e5a32c147b3037a1c2/5fd8af26411efb2adbea6a9b8510a54beb180c7912f291f9d74ec40a7540ea9f?apiKey=c6f3c7bb740649e5a32c147b3037a1c2&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/c6f3c7bb740649e5a32c147b3037a1c2/5fd8af26411efb2adbea6a9b8510a54beb180c7912f291f9d74ec40a7540ea9f?apiKey=c6f3c7bb740649e5a32c147b3037a1c2&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/c6f3c7bb740649e5a32c147b3037a1c2/5fd8af26411efb2adbea6a9b8510a54beb180c7912f291f9d74ec40a7540ea9f?apiKey=c6f3c7bb740649e5a32c147b3037a1c2&"
                            className="object-contain w-full aspect-[2.1]"
                        />
                        <div className="flex flex-col pr-1 pl-7 mt-7 max-md:pl-5">
                            <div className="flex flex-col max-w-full w-[296px]">
                                <h6 className="text-sm text-stone-300">
                                    17 June 2021
                                </h6>
                                <p className="text-lg font-medium text-black">
                                    Lorem ipsum dolor sit amet consectetur?
                                </p>
                            </div>
                            <p className="mt-1.5 text-base text-neutral-400">
                                Lorem ipsum dolor sit amet consectetur. Est
                                vestibulum ornare viverra vestibulum neque
                                turpis. Enim at amet et vivamus rhoncus.
                            </p>
                        </div>
                    </div>
                    <div className="flex overflow-hidden flex-col grow shrink self-stretch pb-10 my-auto rounded-lg bg-neutral-50 min-w-[240px] w-[314px]">
                        <img
                            loading="lazy"
                            srcSet="https://cdn.builder.io/api/v1/image/assets/c6f3c7bb740649e5a32c147b3037a1c2/5fd8af26411efb2adbea6a9b8510a54beb180c7912f291f9d74ec40a7540ea9f?apiKey=c6f3c7bb740649e5a32c147b3037a1c2&width=100 100w, https://cdn.builder.io/api/v1/image/assets/c6f3c7bb740649e5a32c147b3037a1c2/5fd8af26411efb2adbea6a9b8510a54beb180c7912f291f9d74ec40a7540ea9f?apiKey=c6f3c7bb740649e5a32c147b3037a1c2&width=200 200w, https://cdn.builder.io/api/v1/image/assets/c6f3c7bb740649e5a32c147b3037a1c2/5fd8af26411efb2adbea6a9b8510a54beb180c7912f291f9d74ec40a7540ea9f?apiKey=c6f3c7bb740649e5a32c147b3037a1c2&width=400 400w, https://cdn.builder.io/api/v1/image/assets/c6f3c7bb740649e5a32c147b3037a1c2/5fd8af26411efb2adbea6a9b8510a54beb180c7912f291f9d74ec40a7540ea9f?apiKey=c6f3c7bb740649e5a32c147b3037a1c2&width=800 800w, https://cdn.builder.io/api/v1/image/assets/c6f3c7bb740649e5a32c147b3037a1c2/5fd8af26411efb2adbea6a9b8510a54beb180c7912f291f9d74ec40a7540ea9f?apiKey=c6f3c7bb740649e5a32c147b3037a1c2&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/c6f3c7bb740649e5a32c147b3037a1c2/5fd8af26411efb2adbea6a9b8510a54beb180c7912f291f9d74ec40a7540ea9f?apiKey=c6f3c7bb740649e5a32c147b3037a1c2&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/c6f3c7bb740649e5a32c147b3037a1c2/5fd8af26411efb2adbea6a9b8510a54beb180c7912f291f9d74ec40a7540ea9f?apiKey=c6f3c7bb740649e5a32c147b3037a1c2&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/c6f3c7bb740649e5a32c147b3037a1c2/5fd8af26411efb2adbea6a9b8510a54beb180c7912f291f9d74ec40a7540ea9f?apiKey=c6f3c7bb740649e5a32c147b3037a1c2&"
                            className="object-contain w-full aspect-[2.1]"
                        />
                        <div className="flex flex-col pr-1 pl-7 mt-7 max-md:pl-5">
                            <div className="flex flex-col max-w-full w-[296px]">
                                <h6 className="text-sm text-stone-300">
                                    17 June 2021
                                </h6>
                                <p className="text-lg font-medium text-black">
                                    Lorem ipsum dolor sit amet consectetur?
                                </p>
                            </div>
                            <p className="mt-1.5 text-base text-neutral-400">
                                Lorem ipsum dolor sit amet consectetur. Est
                                vestibulum ornare viverra vestibulum neque
                                turpis. Enim at amet et vivamus rhoncus.
                            </p>
                        </div>
                    </div>
                    <div className="flex overflow-hidden flex-col grow shrink self-stretch pb-10 my-auto rounded-lg bg-neutral-50 min-w-[240px] w-[314px]">
                        <img
                            loading="lazy"
                            srcSet="https://cdn.builder.io/api/v1/image/assets/c6f3c7bb740649e5a32c147b3037a1c2/5fd8af26411efb2adbea6a9b8510a54beb180c7912f291f9d74ec40a7540ea9f?apiKey=c6f3c7bb740649e5a32c147b3037a1c2&width=100 100w, https://cdn.builder.io/api/v1/image/assets/c6f3c7bb740649e5a32c147b3037a1c2/5fd8af26411efb2adbea6a9b8510a54beb180c7912f291f9d74ec40a7540ea9f?apiKey=c6f3c7bb740649e5a32c147b3037a1c2&width=200 200w, https://cdn.builder.io/api/v1/image/assets/c6f3c7bb740649e5a32c147b3037a1c2/5fd8af26411efb2adbea6a9b8510a54beb180c7912f291f9d74ec40a7540ea9f?apiKey=c6f3c7bb740649e5a32c147b3037a1c2&width=400 400w, https://cdn.builder.io/api/v1/image/assets/c6f3c7bb740649e5a32c147b3037a1c2/5fd8af26411efb2adbea6a9b8510a54beb180c7912f291f9d74ec40a7540ea9f?apiKey=c6f3c7bb740649e5a32c147b3037a1c2&width=800 800w, https://cdn.builder.io/api/v1/image/assets/c6f3c7bb740649e5a32c147b3037a1c2/5fd8af26411efb2adbea6a9b8510a54beb180c7912f291f9d74ec40a7540ea9f?apiKey=c6f3c7bb740649e5a32c147b3037a1c2&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/c6f3c7bb740649e5a32c147b3037a1c2/5fd8af26411efb2adbea6a9b8510a54beb180c7912f291f9d74ec40a7540ea9f?apiKey=c6f3c7bb740649e5a32c147b3037a1c2&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/c6f3c7bb740649e5a32c147b3037a1c2/5fd8af26411efb2adbea6a9b8510a54beb180c7912f291f9d74ec40a7540ea9f?apiKey=c6f3c7bb740649e5a32c147b3037a1c2&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/c6f3c7bb740649e5a32c147b3037a1c2/5fd8af26411efb2adbea6a9b8510a54beb180c7912f291f9d74ec40a7540ea9f?apiKey=c6f3c7bb740649e5a32c147b3037a1c2&"
                            className="object-contain w-full aspect-[2.1]"
                        />
                        <div className="flex flex-col pr-1 pl-7 mt-7 max-md:pl-5">
                            <div className="flex flex-col max-w-full w-[296px]">
                                <h6 className="text-sm text-stone-300">
                                    17 June 2021
                                </h6>
                                <p className="text-lg font-medium text-black">
                                    Lorem ipsum dolor sit amet consectetur?
                                </p>
                            </div>
                            <p className="mt-1.5 text-base text-neutral-400">
                                Lorem ipsum dolor sit amet consectetur. Est
                                vestibulum ornare viverra vestibulum neque
                                turpis. Enim at amet et vivamus rhoncus.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <Rewiues_Section />
            <section className="mt-[120px] lg:block hidden ">
                <div className="flex flex-wrap gap-10 justify-start items-end  mb-[30px] ">
                    <h2 className="text-5xl font-semibold text-blue-950 max-md:text-4xl px-[100px] mb-[100px]">
                        Fəaliyyət göstərdiyimiz ölkələr{' '}
                    </h2>
                    <DinamicMap />
                </div>
            </section>
            <section className="mt-[120px] lg:px-[100px] md:px-[60px] px-[30px]">
                {' '}
                <div
                    className="flex overflow-hidden flex-col items-start px-14 py-8 font-semibold text-white rounded-lg bg-black bg-opacity-30 max-md:px-5"
                    style={{
                        backgroundImage:
                            'url("https://s3-alpha-sig.figma.com/img/62f4/77d2/beada38f22d5ab00ca39ebf60e0e1c89?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BHvxi9vketc3Bd34f~SLLc6YRZ5eAV8JKeipT9zH7rU3wQLhTVhwtungQ-~6w3CtF~CeFRU0W7uFfPwUoeeCLBAYu7Nggb6HIk6g6QOG9zMOhAkRe8eHfUw~184bzqJPuQwmSUjGoxSnzogWE6bJ7UzkBnsCS6ETxDksSWP5F~FZ~we1Xgk2-N39ZsfN8JwiyMY7E~azlAAbGJDkVwSg4XHJ1ttPfnKp1AKZeJZhIAEpHvxLz~rRRMGA6ulyutEJtUM1wbmBdqpzo4RNEnEGUKGAA0zkQCSPPwG0zG1B~SW~BGS4d2X6DfCy6-xgEp~Z3saYDzFYO5EgKnagVQB3Pw__")',
                        backgroundSize: 'cover',
                        height: '100%', // Set height as needed
                        width: '100%', // Set width as needed
                    }}
                >
                    <div className="text-sm text-neutral-100">
                        03.08.25-ə qədər
                    </div>
                    <div className="mt-6 text-4xl w-[644px] max-md:max-w-full">
                        Hər həftə sonları bütün xidmətlərimizə 15% endirim
                        tətbiq olunur
                    </div>
                    <div className="mt-3 text-base font-medium w-[860px] max-md:max-w-full">
                        Bütün  xidmətlərimizdə 15%-dək endirimdən yararlanın.
                        Sürətli və təhlükəsiz daşınma ilə yükləriniz zamanında
                        təyinat nöqtəsinə çatdırılsın.
                    </div>
                    <div className="flex flex-col justify-center items-center px-4 py-3 mt-7 max-w-full text-lg text-white whitespace-nowrap bg-amber-300 rounded-lg min-h-[45px] w-[155px]">
                        <div className="flex gap-1.5 justify-center items-center">
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/c6f3c7bb740649e5a32c147b3037a1c2/051a12f446a5e365013bb14a67ea029d11ffdd1ede89920cc4e5a623c73f612b?apiKey=c6f3c7bb740649e5a32c147b3037a1c2&"
                                className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
                            />
                            <div className="self-stretch my-auto">166</div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
}
