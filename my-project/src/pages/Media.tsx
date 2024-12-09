import React from 'react';
import Header from '../components/Header';
import BreadcrumbNavigation from '../components/BreadCump';
import { Footer } from '../components/Footer';
import TeamCard from '../components/Team_Card';
import MediaCard from '../components/MediaCard';
import Pagination from '../components/Pagonation';

export default function Media() {
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
                <section className="flex felx-row flex-wrap lg:justify-between justify-center gap-6 mt-20">
                    <MediaCard />
                    <MediaCard />
                    <MediaCard />
                    <MediaCard />
                    <MediaCard />
                    <MediaCard /> <MediaCard />
                    <MediaCard />
                    <MediaCard /> <MediaCard />
                    <MediaCard />
                    <MediaCard />
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
                <section className="mt-[120px]">
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
                            Bütün  xidmətlərimizdə 15%-dək endirimdən
                            yararlanın. Sürətli və təhlükəsiz daşınma ilə
                            yükləriniz zamanında təyinat nöqtəsinə çatdırılsın.
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
            </main>
            <Footer />{' '}
        </div>
    );
}
