import * as React from 'react';

export default function MediaCard() {
    return (
        <div className="flex overflow-hidden flex-col pb-10 rounded-lg bg-neutral-50 max-w-[392px]">
            <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/5fd8af26411efb2adbea6a9b8510a54beb180c7912f291f9d74ec40a7540ea9f?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/5fd8af26411efb2adbea6a9b8510a54beb180c7912f291f9d74ec40a7540ea9f?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5fd8af26411efb2adbea6a9b8510a54beb180c7912f291f9d74ec40a7540ea9f?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/5fd8af26411efb2adbea6a9b8510a54beb180c7912f291f9d74ec40a7540ea9f?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/5fd8af26411efb2adbea6a9b8510a54beb180c7912f291f9d74ec40a7540ea9f?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5fd8af26411efb2adbea6a9b8510a54beb180c7912f291f9d74ec40a7540ea9f?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/5fd8af26411efb2adbea6a9b8510a54beb180c7912f291f9d74ec40a7540ea9f?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/5fd8af26411efb2adbea6a9b8510a54beb180c7912f291f9d74ec40a7540ea9f?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099"
                className="object-contain w-full aspect-[2.1]"
            />
            <div className="flex flex-col px-7 mt-7 w-full">
                <div className="flex flex-col w-full max-w-[296px]">
                    <div className="text-sm text-stone-300">17 June 2021</div>
                    <div className="text-lg font-medium text-black">
                        Lorem ipsum dolor sit amet consectetur?
                    </div>
                </div>
                <div className="mt-3.5 text-base text-neutral-400">
                    Lorem ipsum dolor sit amet consectetur. Est vestibulum
                    ornare viverra vestibulum neque turpis. Enim at amet et
                    vivamus rhoncus.
                </div>
            </div>
        </div>
    );
}
