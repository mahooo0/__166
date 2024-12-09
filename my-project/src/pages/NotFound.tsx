import React from 'react';
import { Footer } from '../components/Footer';
import Header from '../components/Header';

export default function NotFound() {
    return (
        <div>
            <Header />
            <main className="flex justify-center lg:px-[100px] md:px-[60px] px-[30px]">
                <div className="flex flex-col items-center text-center text-black mt-[100px] rounded-none max-w-[341px]">
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/8ea2b9b29a12b6dd527a2538eb4d805a85cfe79b3874e3c1f8cc16a87cdafea4?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099"
                        className="object-contain max-w-full aspect-[0.44] w-[201px]"
                    />
                    <div className="self-stretch mt-6 w-full text-2xl">
                        Oops it seems you follow backlink
                    </div>
                    <div className="flex gap-3.5 px-7 py-2.5 mt-6 max-w-full text-lg font-medium rounded-lg border border-black border-solid shadow-lg w-[219px]">
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/014ac408a06f5155b9d858e69f92db66ad3a132e6de0b905dd289eb3157bafb2?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099"
                            className="object-contain shrink-0 my-auto rounded-lg aspect-[1.79] w-[25px]"
                        />
                        <div className="grow shrink w-[118px]">
                            Back To Home
                        </div>
                    </div>
                </div>
            </main>
            <Footer />{' '}
        </div>
    );
}
