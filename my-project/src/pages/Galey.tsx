import React from 'react';
import Header from '../components/Header';
import BreadcrumbNavigation from '../components/BreadCump';
import { Footer } from '../components/Footer';
import TeamCard from '../components/Team_Card';
import FAQ from '../components/FAQ';
import FaqCategory from '../components/FaqCategory';

export default function Galery() {
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
                <section className="flex gap-3 items-center self-start text-3xl font-semibold text-gray-900 whitespace-nowrap mt-10">
                    <div className="shrink-0 self-stretch my-auto h-px bg-amber-300 border border-amber-300 border-solid w-[52px]" />
                    <div className="self-stretch my-auto ">Haqqımızda</div>
                </section>
                <div className="flex flex-wrap gap-10 justify-between items-center">
                    <div className="gap-2.5 self-stretch px-2.5 py-2 my-auto text-base font-semibold text-white bg-amber-300 rounded-lg min-h-[36px]">
                        Sualınız var?
                    </div>
                    <div className="max-w-[400px] mt-10 flex flex-col justify-center items-start p-px w-full text-lg whitespace-nowrap rounded-lg border border-solid border-zinc-100 text-neutral-200 max-md:pr-5">
                        <div className="flex gap-4 px-4 py-2 bg-white rounded-lg items-center">
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/f06325b2b7439ca9cf60443c4bce3ec06e9144bd7dac83e2b4726f33015d8aeb?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099"
                                className="object-contain shrink-0 self-start w-5 aspect-square"
                            />
                            <input
                                type="text"
                                placeholder="Search"
                                className="basis-auto border-none outline-none text-neutral-700"
                            />
                        </div>
                    </div>
                </div>
                <section className="flex lg:flex-row flex-col-reverse gap-7 mt-[24px]">
                    <div className="flex flex-col rounded-lg max-w-[808px]">
                        <img
                            loading="lazy"
                            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/cd6b03655651cd6aeb255c9dd3f5195ed50ef28d96226dd3e298fa52adbddd1f?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/cd6b03655651cd6aeb255c9dd3f5195ed50ef28d96226dd3e298fa52adbddd1f?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/cd6b03655651cd6aeb255c9dd3f5195ed50ef28d96226dd3e298fa52adbddd1f?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/cd6b03655651cd6aeb255c9dd3f5195ed50ef28d96226dd3e298fa52adbddd1f?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/cd6b03655651cd6aeb255c9dd3f5195ed50ef28d96226dd3e298fa52adbddd1f?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/cd6b03655651cd6aeb255c9dd3f5195ed50ef28d96226dd3e298fa52adbddd1f?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/cd6b03655651cd6aeb255c9dd3f5195ed50ef28d96226dd3e298fa52adbddd1f?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/cd6b03655651cd6aeb255c9dd3f5195ed50ef28d96226dd3e298fa52adbddd1f?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099"
                            className="object-contain w-full rounded-lg aspect-[2.75] max-md:max-w-full"
                        />
                        <div className="mt-7 w-full max-md:max-w-full">
                            <div className="flex gap-5 max-md:flex-col">
                                <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                                    <img
                                        loading="lazy"
                                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/af917cbf3b1608bc87dc05c596dbb85b05ec5b556c1bc312248b33cb420527ec?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/af917cbf3b1608bc87dc05c596dbb85b05ec5b556c1bc312248b33cb420527ec?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/af917cbf3b1608bc87dc05c596dbb85b05ec5b556c1bc312248b33cb420527ec?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/af917cbf3b1608bc87dc05c596dbb85b05ec5b556c1bc312248b33cb420527ec?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/af917cbf3b1608bc87dc05c596dbb85b05ec5b556c1bc312248b33cb420527ec?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/af917cbf3b1608bc87dc05c596dbb85b05ec5b556c1bc312248b33cb420527ec?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/af917cbf3b1608bc87dc05c596dbb85b05ec5b556c1bc312248b33cb420527ec?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/af917cbf3b1608bc87dc05c596dbb85b05ec5b556c1bc312248b33cb420527ec?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099"
                                        className="object-contain grow w-full rounded-lg aspect-[1.33] max-md:mt-6"
                                    />
                                </div>
                                <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                                    <img
                                        loading="lazy"
                                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/af917cbf3b1608bc87dc05c596dbb85b05ec5b556c1bc312248b33cb420527ec?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/af917cbf3b1608bc87dc05c596dbb85b05ec5b556c1bc312248b33cb420527ec?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/af917cbf3b1608bc87dc05c596dbb85b05ec5b556c1bc312248b33cb420527ec?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/af917cbf3b1608bc87dc05c596dbb85b05ec5b556c1bc312248b33cb420527ec?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/af917cbf3b1608bc87dc05c596dbb85b05ec5b556c1bc312248b33cb420527ec?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/af917cbf3b1608bc87dc05c596dbb85b05ec5b556c1bc312248b33cb420527ec?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/af917cbf3b1608bc87dc05c596dbb85b05ec5b556c1bc312248b33cb420527ec?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/af917cbf3b1608bc87dc05c596dbb85b05ec5b556c1bc312248b33cb420527ec?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099"
                                        className="object-contain grow w-full rounded-lg aspect-[1.33] max-md:mt-6"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="mt-7 w-full max-md:max-w-full">
                            <div className="flex gap-5 max-md:flex-col">
                                <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                                    <img
                                        loading="lazy"
                                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/af917cbf3b1608bc87dc05c596dbb85b05ec5b556c1bc312248b33cb420527ec?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/af917cbf3b1608bc87dc05c596dbb85b05ec5b556c1bc312248b33cb420527ec?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/af917cbf3b1608bc87dc05c596dbb85b05ec5b556c1bc312248b33cb420527ec?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/af917cbf3b1608bc87dc05c596dbb85b05ec5b556c1bc312248b33cb420527ec?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/af917cbf3b1608bc87dc05c596dbb85b05ec5b556c1bc312248b33cb420527ec?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/af917cbf3b1608bc87dc05c596dbb85b05ec5b556c1bc312248b33cb420527ec?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/af917cbf3b1608bc87dc05c596dbb85b05ec5b556c1bc312248b33cb420527ec?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/af917cbf3b1608bc87dc05c596dbb85b05ec5b556c1bc312248b33cb420527ec?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099"
                                        className="object-contain grow w-full rounded-lg aspect-[1.33] max-md:mt-6"
                                    />
                                </div>
                                <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                                    <img
                                        loading="lazy"
                                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/af917cbf3b1608bc87dc05c596dbb85b05ec5b556c1bc312248b33cb420527ec?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/af917cbf3b1608bc87dc05c596dbb85b05ec5b556c1bc312248b33cb420527ec?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/af917cbf3b1608bc87dc05c596dbb85b05ec5b556c1bc312248b33cb420527ec?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/af917cbf3b1608bc87dc05c596dbb85b05ec5b556c1bc312248b33cb420527ec?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/af917cbf3b1608bc87dc05c596dbb85b05ec5b556c1bc312248b33cb420527ec?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/af917cbf3b1608bc87dc05c596dbb85b05ec5b556c1bc312248b33cb420527ec?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/af917cbf3b1608bc87dc05c596dbb85b05ec5b556c1bc312248b33cb420527ec?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/af917cbf3b1608bc87dc05c596dbb85b05ec5b556c1bc312248b33cb420527ec?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099"
                                        className="object-contain grow w-full rounded-lg aspect-[1.33] max-md:mt-6"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="mt-7 w-full max-md:max-w-full">
                            <div className="flex gap-5 max-md:flex-col">
                                <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                                    <img
                                        loading="lazy"
                                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/af917cbf3b1608bc87dc05c596dbb85b05ec5b556c1bc312248b33cb420527ec?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/af917cbf3b1608bc87dc05c596dbb85b05ec5b556c1bc312248b33cb420527ec?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/af917cbf3b1608bc87dc05c596dbb85b05ec5b556c1bc312248b33cb420527ec?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/af917cbf3b1608bc87dc05c596dbb85b05ec5b556c1bc312248b33cb420527ec?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/af917cbf3b1608bc87dc05c596dbb85b05ec5b556c1bc312248b33cb420527ec?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/af917cbf3b1608bc87dc05c596dbb85b05ec5b556c1bc312248b33cb420527ec?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/af917cbf3b1608bc87dc05c596dbb85b05ec5b556c1bc312248b33cb420527ec?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/af917cbf3b1608bc87dc05c596dbb85b05ec5b556c1bc312248b33cb420527ec?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099"
                                        className="object-contain grow w-full rounded-lg aspect-[1.33] max-md:mt-6"
                                    />
                                </div>
                                <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                                    <img
                                        loading="lazy"
                                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/af917cbf3b1608bc87dc05c596dbb85b05ec5b556c1bc312248b33cb420527ec?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/af917cbf3b1608bc87dc05c596dbb85b05ec5b556c1bc312248b33cb420527ec?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/af917cbf3b1608bc87dc05c596dbb85b05ec5b556c1bc312248b33cb420527ec?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/af917cbf3b1608bc87dc05c596dbb85b05ec5b556c1bc312248b33cb420527ec?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/af917cbf3b1608bc87dc05c596dbb85b05ec5b556c1bc312248b33cb420527ec?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/af917cbf3b1608bc87dc05c596dbb85b05ec5b556c1bc312248b33cb420527ec?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/af917cbf3b1608bc87dc05c596dbb85b05ec5b556c1bc312248b33cb420527ec?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/af917cbf3b1608bc87dc05c596dbb85b05ec5b556c1bc312248b33cb420527ec?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099"
                                        className="object-contain grow w-full rounded-lg aspect-[1.33] max-md:mt-6"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <FaqCategory />
                </section>
            </main>
            <Footer />{' '}
        </div>
    );
}
