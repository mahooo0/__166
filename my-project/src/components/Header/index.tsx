import React, { useEffect, useState } from 'react';
import TopBar from './top';
import Navbar from './bottom';

export default function Header() {
    const [paymentmodasl, setpaymentmodasl] = useState<boolean>(false);
    const [contactmodasl, setcontactmodasl] = useState<boolean>(false);

    return (
        <div className="flex flex-col relative">
            <TopBar
                setpaymentmodasl={(par: boolean) => {
                    if (contactmodasl === true) {
                        setcontactmodasl(false);
                    }
                    setpaymentmodasl(par);
                }}
            />
            <Navbar
                setcontactmodasl={(par: boolean) => {
                    if (paymentmodasl === true) {
                        setpaymentmodasl(false);
                    }
                    setcontactmodasl(par);
                }}
            />
            <section
                className="flex overflow-hidden flex-col items-start px-12 py-8 bg-white rounded-2xl lg:w-[655px] max-md:px-5 absolute top-[103%] right-0 border border-black border-opacity-10"
                style={
                    paymentmodasl ? { display: 'flex' } : { display: 'none' }
                }
            >
                <div className="flex flex-wrap gap-5 justify-between items-start self-stretch text-4xl font-medium text-black max-md:max-w-full">
                    <div className="mt-4">Online ödəniş</div>
                    <img
                        onClick={() => setpaymentmodasl(false)}
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/f2cc5e6b0ba35187cdcd58f4b00c758478481b2fe67579119a6915de82d26870?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099"
                        className="object-contain shrink-0 w-9 aspect-square cursor-pointer"
                    />
                </div>
                <div className="flex flex-col mt-9 text-base w-full">
                    <div className="flex flex-col justify-center w-full max-md:max-w-full">
                        <div className="flex flex-col w-full max-md:max-w-full">
                            <label className="font-medium text-black max-md:mr-0 max-md:max-w-full">
                                Ödəniş məbləği
                            </label>
                            <input
                                type="number"
                                placeholder="max 100000"
                                className="self-stretch px-5 py-5 mt-2 w-full rounded-lg border border-gray-300 text-neutral-500"
                            />
                        </div>
                    </div>

                    <div className="flex flex-col justify-center mt-6 w-full max-md:max-w-full">
                        <div className="flex flex-col w-full max-md:max-w-full">
                            <label className="font-medium text-black max-md:max-w-full">
                                Əlaqə nömrəsi
                            </label>
                            <input
                                type="tel"
                                placeholder="+994 70 000 00 00"
                                className="self-stretch px-5 py-5 mt-2 w-full rounded-lg border border-gray-300 text-neutral-500"
                            />
                        </div>
                    </div>

                    <div className="flex flex-col justify-center mt-6 w-full max-md:max-w-full">
                        <div className="flex flex-col w-full max-md:max-w-full">
                            <label className="font-medium text-black max-md:max-w-full">
                                Elektron poçt
                            </label>
                            <input
                                type="email"
                                placeholder="nümunə@gmail.com"
                                className="self-stretch px-5 py-5 mt-2 w-full rounded-lg border border-gray-300 text-neutral-500"
                            />
                        </div>
                    </div>

                    <div className="flex flex-col justify-center mt-6 w-full max-md:max-w-full">
                        <div className="flex flex-col w-full max-md:max-w-full">
                            <label className="font-medium text-black max-md:max-w-full">
                                Sifariş ömrəsi
                            </label>
                            <input
                                type="text"
                                placeholder="ex.."
                                className="self-stretch px-5 py-5 mt-2 w-full rounded-lg border border-gray-300 text-neutral-500"
                            />
                        </div>
                    </div>
                </div>

                <button
                    type="submit"
                    className="self-stretch px-5 py-4 mt-9 text-lg font-semibold text-white bg-amber-300 rounded-2xl min-h-[55px]"
                >
                    Göndər
                </button>
            </section>
            <section
                className="flex overflow-hidden flex-col items-start px-12 py-8 bg-white rounded-2xl lg:w-[655px] max-md:px-5 absolute top-[103%] right-0 border border-black border-opacity-10"
                style={
                    contactmodasl ? { display: 'flex' } : { display: 'none' }
                }
            >
                <div className="flex flex-wrap gap-5 justify-between items-start self-stretch text-4xl font-medium text-black max-md:max-w-full">
                    <div className="mt-4">Online ödəniş</div>
                    <img
                        onClick={() => setcontactmodasl(false)}
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/f2cc5e6b0ba35187cdcd58f4b00c758478481b2fe67579119a6915de82d26870?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099"
                        className="object-contain shrink-0 w-9 aspect-square cursor-pointer"
                    />
                </div>
                <div className="flex flex-col mt-9 text-base w-full">
                    <div className="flex flex-col justify-center mt-6 w-full max-md:max-w-full">
                        <div className="flex flex-col w-full max-md:max-w-full">
                            <label className="font-medium text-black max-md:max-w-full">
                                ad{' '}
                            </label>
                            <input
                                type="text"
                                placeholder="name"
                                className="self-stretch px-5 py-5 mt-2 w-full rounded-lg border border-gray-300 text-neutral-500"
                            />
                        </div>
                    </div>

                    <div className="flex flex-col justify-center mt-6 w-full max-md:max-w-full">
                        <div className="flex flex-col w-full max-md:max-w-full">
                            <label className="font-medium text-black max-md:max-w-full">
                                Əlaqə nömrəsi
                            </label>
                            <input
                                type="tel"
                                placeholder="+994 70 000 00 00"
                                className="self-stretch px-5 py-5 mt-2 w-full rounded-lg border border-gray-300 text-neutral-500"
                            />
                        </div>
                    </div>
                </div>

                <button
                    type="submit"
                    className="self-stretch px-5 py-4 mt-9 text-lg font-semibold text-white bg-amber-300 rounded-2xl min-h-[55px]"
                >
                    Göndər
                </button>
            </section>
        </div>
    );
}
