import Header from '../components/Header';
import BreadcrumbNavigation from '../components/BreadCump';
import { Footer } from '../components/Footer';

export default function Aply() {
    return (
        <div>
            <Header />
            <main className="lg:px-[100px] md:px-[60px] px-[30px]">
                <BreadcrumbNavigation />
                <div className="rounded-none">
                    <div className="flex gap-5 max-md:flex-col">
                        <div className="flex flex-col w-[55%] max-md:ml-0 max-md:w-full">
                            <div className="flex flex-col self-stretch my-auto w-full font-semibold max-md:mt-10 max-md:max-w-full">
                                <div className="mr-10 text-4xl text-black max-md:mr-2.5 max-md:max-w-full">
                                    Müraciətiniz üçün təşəkkür edirik!
                                </div>
                                <div className="mt-4 text-lg text-neutral-700 max-md:max-w-full">
                                    Sorğunuz qəbul edildi, ən qısa zamanda
                                    əməkdaşlarımız sizinlə əlaqə saxlayacaq
                                </div>
                                <div className="flex gap-2.5 justify-center items-center self-start px-2.5 py-2 mt-6 text-base text-white bg-amber-300 rounded-lg min-h-[36px]">
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/0b31e0c8503d9e1480af7ea096c9fd425201c4b49e7eb2f204e31ca5d2d9ae00?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099"
                                        className="object-contain shrink-0 self-stretch my-auto aspect-[0.9] w-[18px]"
                                    />
                                    <div className="self-stretch my-auto">
                                        Ana səhifəyə qayıt
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col ml-5 w-[45%] max-md:ml-0 max-md:w-full">
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/334c96266a8093f725283e540d39d31c2cebc96b51f03a4a2a751c1ef4de7495?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099"
                                className="object-contain grow w-full aspect-[1.1] max-md:mt-10 max-md:max-w-full"
                            />
                        </div>
                    </div>
                </div>
            </main>
            <Footer />{' '}
        </div>
    );
}
