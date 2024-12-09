import Header from '../components/Header';
import BreadcrumbNavigation from '../components/BreadCump';
import { Footer } from '../components/Footer';

export default function Contact() {
    return (
        <div>
            <Header />
            <main className="lg:px-[100px] md:px-[60px] px-[30px]">
                <BreadcrumbNavigation />
                <section className="flex gap-3 items-center self-start text-3xl font-semibold text-gray-900 whitespace-nowrap mt-10">
                    <div className="shrink-0 self-stretch my-auto h-px bg-amber-300 border border-amber-300 border-solid w-[52px]" />
                    <div className="self-stretch my-auto ">Əlaqə</div>
                </section>
                <section className="lg:h-[700px]  h-fit relative flex flex-col justify-center items-center mt-[40px] gap-10">
                    <div className="flex flex-col px-7 py-6 bg-white lg:w-[392px] w-full shadow-[0px_0px_10px_rgba(105,105,105,0.18)] lg:absolute  relative lg:left-[52px] left-0">
                        <div className="flex flex-col py-3.5 w-full text-black">
                            <div className="text-xl font-bold leading-snug">
                                Ofislə əlaqə
                            </div>
                            <div className="flex flex-col mt-8 w-full">
                                <div className="text-lg font-semibold leading-snug">
                                    Ünvan
                                </div>
                                <div className="mt-2.5 text-base leading-6">
                                    Yeni Həyat Plaza 55 Zərifə Əliyeva, Bakı,
                                    Azərbaycan
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col py-3.5 w-full leading-snug text-black">
                            <div className="text-lg font-semibold">
                                Poçt indeksi
                            </div>
                            <div className="mt-2.5 text-base">AZ1138</div>
                        </div>
                        <div className="flex flex-col py-3.5 w-full leading-snug text-black">
                            <div className="text-lg font-semibold">
                                Korporativ əlaqə
                            </div>
                            <div className="mt-2.5 text-base">
                                +994 (50) 231 16 21
                            </div>
                        </div>
                        <div className="flex flex-col py-3.5 w-full leading-snug text-black">
                            <div className="text-lg font-semibold">
                                Əlaqə nömrəsi
                            </div>
                            <div className="mt-2.5 text-base">
                                +994 (50) 253 46 16
                            </div>
                        </div>
                        <div className="flex flex-col py-3.5 w-full leading-snug text-black">
                            <div className="text-lg font-semibold">
                                Qaynar xətt
                            </div>
                            <div className="mt-2.5 text-base">
                                Bütün mobil operatorlarda{' '}
                                <span className="text-amber-300">166</span>
                                -a zəng
                            </div>
                        </div>
                        <div className="flex flex-col py-3.5 w-full leading-snug">
                            <div className="text-lg font-semibold text-black">
                                Elektron poçt
                            </div>
                            <div className="mt-2.5 text-base font-medium text-amber-300">
                                info@166.az
                            </div>
                        </div>
                    </div>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24286.86161896974!2d49.64509244999999!3d40.45628635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4030849e9792d103%3A0xb558e38a2b0c0c2b!2s28%20May!5e0!3m2!1sru!2saz!4v1731340538711!5m2!1sru!2saz"
                        className="w-full lg:h-[700px] h-auto "
                        loading="lazy"
                    ></iframe>
                </section>

                <section className="flex gap-5 max-md:flex-col mt-[40px]">
                    <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                        <div className="flex flex-col grow px-7 py-6 w-full bg-white shadow-[0px_0px_4px_rgba(105,105,105,0.12)] max-md:px-5 max-md:mt-6 max-md:max-w-full">
                            <div className="py-3.5 w-full text-xl font-bold leading-snug text-black max-md:max-w-full">
                                Reklam əməkdaşlığı üçün
                            </div>
                            <div className="flex flex-col mt-1.5 w-full max-md:max-w-full">
                                <div className="flex flex-col py-3.5 w-full text-black max-md:max-w-full">
                                    <div className="text-lg font-semibold leading-snug max-md:max-w-full">
                                        Əlaqə nömrəsi
                                    </div>
                                    <div className="mt-2.5 text-base leading-6">
                                        +994 (50) 231 17 71 <br />
                                        <br />
                                        <span className="text-neutral-800">
                                            (Yalnız reklam təklifləri üçün)
                                        </span>
                                    </div>
                                </div>
                                <div className="flex flex-col py-3.5 w-full leading-snug max-md:max-w-full">
                                    <div className="text-lg font-semibold text-black max-md:max-w-full">
                                        Elektron poçt
                                    </div>
                                    <div className="mt-2.5 text-base font-medium text-amber-300 max-md:max-w-full">
                                        marketing@166.az
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                        <div className="flex flex-col grow px-7 pt-6 pb-16 w-full leading-snug bg-white min-h-[323px] shadow-[0px_0px_4px_rgba(105,105,105,0.12)] max-md:px-5 max-md:mt-6 max-md:max-w-full">
                            <div className="py-3.5 w-full text-xl font-bold text-black max-md:max-w-full">
                                Sİfariş üçün
                            </div>
                            <div className="flex flex-col mt-1.5 w-full max-md:max-w-full">
                                <div className="flex flex-col py-3.5 w-full text-black max-md:max-w-full">
                                    <div className="text-lg font-semibold max-md:max-w-full">
                                        Əlaqə nömrəsi
                                    </div>
                                    <div className="mt-2.5 text-base">166</div>
                                </div>
                                <div className="flex flex-col py-3.5 w-full max-md:max-w-full">
                                    <div className="text-lg font-semibold text-black max-md:max-w-full">
                                        Elektron poçt
                                    </div>
                                    <div className="mt-2.5 text-base font-medium text-amber-300 max-md:max-w-full">
                                        info@166.az
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />{' '}
        </div>
    );
}
