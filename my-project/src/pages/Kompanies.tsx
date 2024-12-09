import Header from '../components/Header';
import BreadcrumbNavigation from '../components/BreadCump';
import { Footer } from '../components/Footer';
import BlogCard from '../components/BlogCard';
import CompanieCArd from '../components/CompaniesCard';
import Kompanies_swipper from '../components/Kompanies_swipper';

export default function Kompanies() {
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
                    <CompanieCArd />
                    <CompanieCArd />
                    <CompanieCArd />
                    <CompanieCArd />
                    <CompanieCArd />
                    <CompanieCArd />
                </section>
            </main>
            <Footer />{' '}
        </div>
    );
}
