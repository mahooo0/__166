import React from 'react';

export default function CompanieCArd() {
    return (
        <div className="flex overflow-hidden flex-col pb-5 rounded-lg border border-gray-200 border-solid bg-neutral-100 max-w-[288px]">
            <div className="flex flex-col px-5 py-4 w-full bg-white">
                <div className="flex gap-1.5 items-center w-full text-base font-bold text-black">
                    <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/0e91a4201dfbd160e935f9412465a628e38467af4849c72f3e29c843bb6683cf?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/0e91a4201dfbd160e935f9412465a628e38467af4849c72f3e29c843bb6683cf?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0e91a4201dfbd160e935f9412465a628e38467af4849c72f3e29c843bb6683cf?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/0e91a4201dfbd160e935f9412465a628e38467af4849c72f3e29c843bb6683cf?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/0e91a4201dfbd160e935f9412465a628e38467af4849c72f3e29c843bb6683cf?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0e91a4201dfbd160e935f9412465a628e38467af4849c72f3e29c843bb6683cf?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/0e91a4201dfbd160e935f9412465a628e38467af4849c72f3e29c843bb6683cf?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/0e91a4201dfbd160e935f9412465a628e38467af4849c72f3e29c843bb6683cf?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099"
                        className="object-contain shrink-0 self-stretch my-auto rounded-lg aspect-square w-[50px]"
                    />
                    <div className="my-auto w-[196px]">
                        Usta xidmətlərimizə 20% endirim.
                    </div>
                </div>
                <div className="mt-6 text-xs font-semibold text-zinc-700">
                    Usta xidməti endirimlərimiz Gəncədə davam etməkdədir.
                </div>
            </div>
            <div className="gap-2.5 self-end py-1.5 pr-2 pl-2.5 mt-5 text-xs font-medium text-white bg-amber-300 rounded-lg min-h-[25px] mr-[18px]">
                Detallara bax
            </div>
        </div>
    );
}
