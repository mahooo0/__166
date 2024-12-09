import Header from '../components/Header';
import BreadcrumbNavigation from '../components/BreadCump';
import { Footer } from '../components/Footer';
import BlogCard from '../components/BlogCard';
import CompanieCArd from '../components/CompaniesCard';
import Kompanies_swipper from '../components/Kompanies_swipper';
import Rewiues_Section from '../components/Rewiues_swipper';

export default function Partners() {
    return (
        <div>
            <Header />
            <main className="lg:px-[100px] md:px-[60px] px-[30px]">
                <BreadcrumbNavigation />
                <section className="flex gap-3 items-center self-start text-3xl font-semibold text-gray-900 whitespace-nowrap mt-10">
                    <div className="shrink-0 self-stretch my-auto h-px bg-amber-300 border border-amber-300 border-solid w-[52px]" />
                    <div className="self-stretch my-auto ">Kompaniya name</div>
                </section>
                <section className="flex felx-row flex-wrap lg:justify-between justify-center gap-6 mt-20">
                    <div className="flex overflow-hidden flex-col justify-center items-center px-14 py-16 bg-white rounded-lg max-w-[288px] shadow-[0px_0px_14px_rgba(0,51,68,0.06)]">
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/bd98dedb6935b30fa99370cfa5bb61b978bbb326bda7f7636e4f9047b171b4b2?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099"
                            className="object-contain w-full aspect-[3.76]"
                        />
                    </div>
                    <div className="flex overflow-hidden flex-col justify-center items-center px-14 py-16 bg-white rounded-lg max-w-[288px] shadow-[0px_0px_14px_rgba(0,51,68,0.06)]">
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/bd98dedb6935b30fa99370cfa5bb61b978bbb326bda7f7636e4f9047b171b4b2?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099"
                            className="object-contain w-full aspect-[3.76]"
                        />
                    </div>
                    <div className="flex overflow-hidden flex-col justify-center items-center px-14 py-16 bg-white rounded-lg max-w-[288px] shadow-[0px_0px_14px_rgba(0,51,68,0.06)]">
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/bd98dedb6935b30fa99370cfa5bb61b978bbb326bda7f7636e4f9047b171b4b2?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099"
                            className="object-contain w-full aspect-[3.76]"
                        />
                    </div>
                    <div className="flex overflow-hidden flex-col justify-center items-center px-14 py-16 bg-white rounded-lg max-w-[288px] shadow-[0px_0px_14px_rgba(0,51,68,0.06)]">
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/bd98dedb6935b30fa99370cfa5bb61b978bbb326bda7f7636e4f9047b171b4b2?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099"
                            className="object-contain w-full aspect-[3.76]"
                        />
                    </div>
                    <div className="flex overflow-hidden flex-col justify-center items-center px-14 py-16 bg-white rounded-lg max-w-[288px] shadow-[0px_0px_14px_rgba(0,51,68,0.06)]">
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/bd98dedb6935b30fa99370cfa5bb61b978bbb326bda7f7636e4f9047b171b4b2?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099"
                            className="object-contain w-full aspect-[3.76]"
                        />
                    </div>
                    <div className="flex overflow-hidden flex-col justify-center items-center px-14 py-16 bg-white rounded-lg max-w-[288px] shadow-[0px_0px_14px_rgba(0,51,68,0.06)]">
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/bd98dedb6935b30fa99370cfa5bb61b978bbb326bda7f7636e4f9047b171b4b2?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099"
                            className="object-contain w-full aspect-[3.76]"
                        />
                    </div>
                </section>
            </main>
            <Rewiues_Section />
            <Footer />{' '}
        </div>
    );
}
