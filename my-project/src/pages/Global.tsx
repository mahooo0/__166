import Header from '../components/Header';
import BreadcrumbNavigation from '../components/BreadCump';
import { Footer } from '../components/Footer';

export default function Global() {
    return (
        <div>
            <Header />
            <main className="lg:px-[100px] md:px-[60px] px-[30px]">
                <BreadcrumbNavigation />
                <section className="flex flex-col rounded-none mt-[40px]">
                    <div className="flex flex-wrap gap-8 justify-center items-center px-28 w-full text-base font-semibold leading-loose whitespace-nowrap border-b border-solid border-b-slate-50 max-md:px-5 max-md:max-w-full">
                        <div className="gap-2.5 self-stretch p-2.5 my-auto text-neutral-700">
                            Özbəkistan
                        </div>
                        <div className="gap-2.5 self-stretch p-2.5 my-auto text-amber-300 border-b border-solid border-b-amber-300">
                            Dubay
                        </div>
                    </div>
                    <div className="mt-28 w-full max-md:mt-10 max-md:max-w-full">
                        <div className="flex gap-5 max-md:flex-col">
                            <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                                <img
                                    loading="lazy"
                                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/7e091e77a9b4d8508eec280157faed8f98dbc3dc9add0e6c2769f417e9f900f9?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/7e091e77a9b4d8508eec280157faed8f98dbc3dc9add0e6c2769f417e9f900f9?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/7e091e77a9b4d8508eec280157faed8f98dbc3dc9add0e6c2769f417e9f900f9?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/7e091e77a9b4d8508eec280157faed8f98dbc3dc9add0e6c2769f417e9f900f9?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/7e091e77a9b4d8508eec280157faed8f98dbc3dc9add0e6c2769f417e9f900f9?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/7e091e77a9b4d8508eec280157faed8f98dbc3dc9add0e6c2769f417e9f900f9?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/7e091e77a9b4d8508eec280157faed8f98dbc3dc9add0e6c2769f417e9f900f9?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/7e091e77a9b4d8508eec280157faed8f98dbc3dc9add0e6c2769f417e9f900f9?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099"
                                    className="object-contain grow w-full rounded-lg aspect-[1.41] max-md:mt-6 max-md:max-w-full"
                                />
                            </div>
                            <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                                <div className="flex flex-col max-md:mt-6 max-md:max-w-full">
                                    <div className="text-2xl font-semibold text-gray-900 max-md:mr-2.5 max-md:max-w-full">
                                        166 Recovery şirkəti Dubayda sizin yol
                                        dostunuzdur
                                    </div>
                                    <div className="mt-4 text-base leading-6 text-zinc-700 max-md:max-w-full">
                                        Evakuator xidməti sizin sadiq  dostunuz
                                        kimidir. Nə vaxt yola çıxsaz, arxayın
                                        ola bilərsiniz, dostunuz bir
                                        çağırışınızla gələcəkdir. Maşınlarınızı
                                        çox arxayınlıqla bizim evakuator
                                        xidmətinə etibar edə bilərsiniz. 
                                        <br />
                                        Yüksək təcrübəmizə əsaslanaraq 166
                                        Yükdaşıma və Logistika şirkəti artıq
                                        Dubay şəhərində fəaliyyətə uğurla
                                        başladı.
                                        <br />
                                        Əsas məqsədimiz Azərbaycan brendini
                                        xarici ölkədə uğurla tanıtmaq və
                                        qarşımıza qoyduğumuz məqsədə uğurla
                                        çatmaqdır.
                                        <br />
                                        <br />
                                        166 Recovery haqqında daha çox məlumat
                                        almaq isdəyirsinizsə , veb saytımıza
                                        keçid edərək məlumat əldə edə
                                        bilərsiniz, 
                                        <a
                                            href="https://166recovery.com/"
                                            className="text-amber-300 underline"
                                            target="_blank"
                                        >
                                            VEB SAYTA KEÇİD
                                        </a>
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
