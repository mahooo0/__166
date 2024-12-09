import Header from '../components/Header';
import BreadcrumbNavigation from '../components/BreadCump';
import { Footer } from '../components/Footer';
import BlogCard from '../components/BlogCard';
import CompanieCArd from '../components/CompaniesCard';
import Kompanies_swipper from '../components/Kompanies_swipper';
import Rewiues_Section from '../components/Rewiues_swipper';
import { Reviue } from '../components/Rewiues_swipper/Rewiuse';
import DinamicMap from '../components/DinamicMap';

export default function Reviews() {
    return (
        <div>
            <Header />
            <main className="lg:px-[100px] md:px-[60px] px-[30px]">
                <BreadcrumbNavigation />
                <section className="flex gap-3 items-center self-start text-3xl font-semibold text-gray-900 whitespace-nowrap mt-10">
                    <div className="shrink-0 self-stretch my-auto h-px bg-amber-300 border border-amber-300 border-solid w-[52px]" />
                    <div className="self-stretch my-auto ">Kompaniya name</div>
                </section>
                <div
                    className="flex overflow-hidden flex-col px-20 py-16 text-xl font-semibold text-center text-black rounded-lg max-md:px-5 mt-[23px]"
                    style={{
                        backgroundImage:
                            'url("https://s3-alpha-sig.figma.com/img/d663/bfe7/208bae039f54037008263754ade3c4b6?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nBHGepG1TdDEmKduHY~DISUPnH-y9GIcan0rybBV6kwmvTFT~1QGQUr~PGMftZMAyNoKqN5sO-t3sOlUkSry1~fsDsotism4nyfS~951yZe3uM5HTibee-9kH4YMPnlM01o2cRC64U0kwH01r0R9fxJuLNC7tOb6uXufLcidQ93NiqjNOFlVbzXW~wDf~CF3li3TqfJoN8f~ms0~dr2uKnTNVkuDz2AsuVN68ccqLniLMKngmr4mJLYVoB5C2lLZKDwBTobzRUSPcvIDFR~65siyz4JjJNOvRu2o2B8m0Qxs5Jzufm8yrnObHodGovUr2SgVHYclq~JmM~OoKvpVBQ__")',
                        backgroundSize: 'cover',
                    }}
                >
                    <div className="flex flex-col self-end max-w-full w-[710px]">
                        <div className="gap-2.5 self-start p-2.5 rounded-lg bg-white bg-opacity-30">
                            105K+ Lorem
                        </div>
                        <div className="gap-2.5 self-end p-2.5 mt-28 rounded-lg bg-white bg-opacity-30 max-md:mt-10">
                            20+ Lorem
                        </div>
                    </div>
                    <div className="gap-2.5 self-start p-2.5 rounded-lg bg-white bg-opacity-30">
                        25+ Lorem
                    </div>
                </div>
                <section className="flex felx-row flex-wrap lg:justify-between justify-center gap-6 mt-20">
                    <Reviue />
                    <Reviue />
                    <Reviue />
                    <Reviue />
                    <Reviue />
                    <Reviue />
                    <Reviue />
                </section>
                <section className="mt-[120px] lg:block hidden ">
                    <div className="flex flex-wrap gap-10 justify-start items-end  mb-[30px] ">
                        <h2 className="text-5xl font-semibold text-blue-950 max-md:text-4xl  mb-[100px]">
                            Fəaliyyət göstərdiyimiz ölkələr{' '}
                        </h2>
                        <DinamicMap />
                    </div>
                </section>
            </main>
            <Footer />{' '}
        </div>
    );
}
