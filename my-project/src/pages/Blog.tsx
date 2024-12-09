import React from 'react';
import Header from '../components/Header';
import BreadcrumbNavigation from '../components/BreadCump';
import { Footer } from '../components/Footer';
import TeamCard from '../components/Team_Card';
import MediaCard from '../components/MediaCard';
import Pagination from '../components/Pagonation';
import BlogCard from '../components/BlogCard';

export default function Blog() {
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
                <div className="flex gap-3 items-center self-start text-3xl font-semibold text-gray-900 whitespace-nowrap mt-10">
                    <div className="shrink-0 self-stretch my-auto h-px bg-amber-300 border border-amber-300 border-solid w-[52px]" />
                    <div className="self-stretch my-auto ">Haqqımızda</div>
                </div>
                <div className="rounded-none">
                    <div className="flex gap-5 max-md:flex-col">
                        <div className="flex flex-col w-[69%] max-md:ml-0 max-md:w-full">
                            <div className="flex flex-col w-full max-md:mt-10 max-md:max-w-full">
                                <img
                                    loading="lazy"
                                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/12487739d90a5f8a9e5be90502828eb57b6a6e4c2f5613986edb9fe185d908b1?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/12487739d90a5f8a9e5be90502828eb57b6a6e4c2f5613986edb9fe185d908b1?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/12487739d90a5f8a9e5be90502828eb57b6a6e4c2f5613986edb9fe185d908b1?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/12487739d90a5f8a9e5be90502828eb57b6a6e4c2f5613986edb9fe185d908b1?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/12487739d90a5f8a9e5be90502828eb57b6a6e4c2f5613986edb9fe185d908b1?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/12487739d90a5f8a9e5be90502828eb57b6a6e4c2f5613986edb9fe185d908b1?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/12487739d90a5f8a9e5be90502828eb57b6a6e4c2f5613986edb9fe185d908b1?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/12487739d90a5f8a9e5be90502828eb57b6a6e4c2f5613986edb9fe185d908b1?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099"
                                    className="object-contain w-full rounded-lg aspect-[1.79] max-md:max-w-full"
                                />
                                <div className="self-start mt-5 text-2xl font-semibold leading-tight text-black max-md:max-w-full">
                                    Soyuducu anbarların sərfəli üstünlükləri
                                </div>
                                <div className="mt-4 text-lg leading-6 text-neutral-700 max-md:max-w-full">
                                    166 Anbar, müştərilərinə yüksək keyfiyyətli
                                    soyuducu anbar xidmətləri təqdim edərək,
                                    məhsullarınızın təhlükəsizliyini təmin edir.
                                    Fərqli ölçü və ehtiyaclara uyğun anbar
                                    seçimləri ilə 166 Anbar hər bir müştərinin
                                    tələblərinə cavab verən həllər təklif edir.
                                    Peşəkar yanaşma, müasir avadanlıqlar və
                                    optimal şərait məhsullarınızın hər zaman
                                    təhlükəsiz və keyfiyyətli şəkildə
                                    saxlanmasını təmin edir. Məhsullarınızı
                                    qorumaq üçün 166-nın etibarlı soyuducu anbar
                                    xidmətlərindən faydalana bilərsiniz.
                                </div>
                                <div className="flex flex-wrap gap-10 justify-between items-center mt-5 w-full whitespace-nowrap text-neutral-400 max-md:max-w-full">
                                    <div className="self-stretch my-auto text-base leading-snug">
                                        16.12.24
                                    </div>
                                    <div className="flex gap-2.5 justify-center items-center self-stretch my-auto text-sm">
                                        <img
                                            loading="lazy"
                                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/938d63f58b29caa3da3cc7a8ab147b93c5c2270d96cb9ef416c1357a87b9d05e?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099"
                                            className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
                                        />
                                        <div className="self-stretch my-auto">
                                            (328K)
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col ml-5 w-[31%] max-md:ml-0 max-md:w-full">
                            <div className="flex flex-col w-full max-md:mt-10">
                                <div className="flex flex-col justify-center items-start p-px w-full text-lg whitespace-nowrap rounded-lg border border-solid border-zinc-100 text-neutral-200 max-md:pr-5">
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
                                <div className="self-start mt-4 text-3xl font-semibold text-gray-900">
                                    TRENDLƏR
                                </div>
                                <div className="flex gap-8 items-start mt-4 flex-wrap flex-row">
                                    <div className="flex flex-col min-h-[92px] w-[230px] min-w-[180px]">
                                        <div className="flex-1 text-base font-semibold leading-5 text-black whitespace-nowrap text-ellipsis text-wrap">
                                            Soyuducu anbarların sərfəli
                                            üstünlükləri
                                        </div>
                                        <div className="flex-1 mt-2 text-sm leading-5 text-neutral-700">
                                            166 Anbar, müştərilərinə yüksək
                                            keyfiyyətli soyuducu anbar
                                            xidmətləri təqdim edərək,{' '}
                                        </div>
                                    </div>
                                    <img
                                        loading="lazy"
                                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/b961955547c2d0dcd6bc65934c92a600678202d8bf0ef8ca5e80266a87f38239?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/b961955547c2d0dcd6bc65934c92a600678202d8bf0ef8ca5e80266a87f38239?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b961955547c2d0dcd6bc65934c92a600678202d8bf0ef8ca5e80266a87f38239?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/b961955547c2d0dcd6bc65934c92a600678202d8bf0ef8ca5e80266a87f38239?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/b961955547c2d0dcd6bc65934c92a600678202d8bf0ef8ca5e80266a87f38239?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b961955547c2d0dcd6bc65934c92a600678202d8bf0ef8ca5e80266a87f38239?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/b961955547c2d0dcd6bc65934c92a600678202d8bf0ef8ca5e80266a87f38239?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/b961955547c2d0dcd6bc65934c92a600678202d8bf0ef8ca5e80266a87f38239?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099"
                                        className="object-contain shrink-0 rounded-lg aspect-[1.12] w-[103px] "
                                    />
                                </div>{' '}
                                <div className="flex gap-8 items-start mt-4 flex-wrap flex-row">
                                    <div className="flex flex-col min-h-[92px] w-[230px] min-w-[180px]">
                                        <div className="flex-1 text-base font-semibold leading-5 text-black whitespace-nowrap text-ellipsis text-wrap">
                                            Soyuducu anbarların sərfəli
                                            üstünlükləri
                                        </div>
                                        <div className="flex-1 mt-2 text-sm leading-5 text-neutral-700">
                                            166 Anbar, müştərilərinə yüksək
                                            keyfiyyətli soyuducu anbar
                                            xidmətləri təqdim edərək,{' '}
                                        </div>
                                    </div>
                                    <img
                                        loading="lazy"
                                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/b961955547c2d0dcd6bc65934c92a600678202d8bf0ef8ca5e80266a87f38239?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/b961955547c2d0dcd6bc65934c92a600678202d8bf0ef8ca5e80266a87f38239?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b961955547c2d0dcd6bc65934c92a600678202d8bf0ef8ca5e80266a87f38239?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/b961955547c2d0dcd6bc65934c92a600678202d8bf0ef8ca5e80266a87f38239?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/b961955547c2d0dcd6bc65934c92a600678202d8bf0ef8ca5e80266a87f38239?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b961955547c2d0dcd6bc65934c92a600678202d8bf0ef8ca5e80266a87f38239?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/b961955547c2d0dcd6bc65934c92a600678202d8bf0ef8ca5e80266a87f38239?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/b961955547c2d0dcd6bc65934c92a600678202d8bf0ef8ca5e80266a87f38239?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099"
                                        className="object-contain shrink-0 rounded-lg aspect-[1.12] w-[103px] "
                                    />
                                </div>{' '}
                                <div className="flex gap-8 items-start mt-4 flex-wrap flex-row">
                                    <div className="flex flex-col min-h-[92px] w-[230px] min-w-[180px]">
                                        <div className="flex-1 text-base font-semibold leading-5 text-black whitespace-nowrap text-ellipsis text-wrap">
                                            Soyuducu anbarların sərfəli
                                            üstünlükləri
                                        </div>
                                        <div className="flex-1 mt-2 text-sm leading-5 text-neutral-700">
                                            166 Anbar, müştərilərinə yüksək
                                            keyfiyyətli soyuducu anbar
                                            xidmətləri təqdim edərək,{' '}
                                        </div>
                                    </div>
                                    <img
                                        loading="lazy"
                                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/b961955547c2d0dcd6bc65934c92a600678202d8bf0ef8ca5e80266a87f38239?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/b961955547c2d0dcd6bc65934c92a600678202d8bf0ef8ca5e80266a87f38239?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b961955547c2d0dcd6bc65934c92a600678202d8bf0ef8ca5e80266a87f38239?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/b961955547c2d0dcd6bc65934c92a600678202d8bf0ef8ca5e80266a87f38239?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/b961955547c2d0dcd6bc65934c92a600678202d8bf0ef8ca5e80266a87f38239?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b961955547c2d0dcd6bc65934c92a600678202d8bf0ef8ca5e80266a87f38239?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/b961955547c2d0dcd6bc65934c92a600678202d8bf0ef8ca5e80266a87f38239?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/b961955547c2d0dcd6bc65934c92a600678202d8bf0ef8ca5e80266a87f38239?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099"
                                        className="object-contain shrink-0 rounded-lg aspect-[1.12] w-[103px] "
                                    />
                                </div>{' '}
                            </div>
                        </div>
                    </div>
                </div>
                <section className="flex felx-row flex-wrap lg:justify-between justify-center gap-6 mt-20">
                    <BlogCard />
                    <BlogCard />
                    <BlogCard />
                    <BlogCard />
                    <BlogCard />
                    <BlogCard />
                </section>{' '}
                <div className="w-full flex justify-center mt-[40px]">
                    <Pagination
                        totalPages={10}
                        currentPage={2}
                        onPageChange={(page: number) => {
                            console.log(page);
                        }}
                    />
                </div>
            </main>
            <Footer />{' '}
        </div>
    );
}
