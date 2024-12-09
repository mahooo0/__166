import React from 'react';

export default function BlogCard() {
    return (
        <div className="flex flex-col bg-white rounded-lg max-w-[392px] shadow-[0px_0px_4px_rgba(105,105,105,0.12)]">
            <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/f9a96d5c1f235cdb462df895ea1cc3115201b18f5285dd1c7e53dbdcba13cf89?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/f9a96d5c1f235cdb462df895ea1cc3115201b18f5285dd1c7e53dbdcba13cf89?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f9a96d5c1f235cdb462df895ea1cc3115201b18f5285dd1c7e53dbdcba13cf89?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/f9a96d5c1f235cdb462df895ea1cc3115201b18f5285dd1c7e53dbdcba13cf89?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/f9a96d5c1f235cdb462df895ea1cc3115201b18f5285dd1c7e53dbdcba13cf89?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f9a96d5c1f235cdb462df895ea1cc3115201b18f5285dd1c7e53dbdcba13cf89?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/f9a96d5c1f235cdb462df895ea1cc3115201b18f5285dd1c7e53dbdcba13cf89?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/f9a96d5c1f235cdb462df895ea1cc3115201b18f5285dd1c7e53dbdcba13cf89?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099"
                className="object-contain w-full rounded-lg aspect-[1.78]"
            />
            <div className="flex flex-col px-5 pb-5 mt-5 w-full">
                <div className="text-lg font-bold leading-none text-neutral-700">
                    Blog başlığı lorem ipsum
                </div>
                <div className="flex flex-col mt-3.5 w-full text-base">
                    <div className="flex gap-10 justify-between items-center pb-4 w-full border-b border-zinc-100">
                        <div className="self-stretch my-auto font-light text-neutral-400">
                            Yanvar 01, 2024
                        </div>
                        <div className="self-stretch my-auto italic text-right text-yellow-500">
                            Yükdaşıma
                        </div>
                    </div>
                    <div className="mt-3.5 whitespace-wrap text-ellipsis text-neutral-600">
                        Lorem ipsum dolor sit amet consectetur. Est vestibulum
                        ornare viverra vestibulum neque turpis. Enim at amet et
                        vivamus rhoncus.{' '}
                        <span className="text-neutral-600">
                            Lorem ipsum dolor sit amet consectetur. Est
                            vestibulum ornare viverra vestibulum neque turpis.
                            Enim at amet et vivamus rhoncus.
                        </span>
                    </div>
                </div>
                <div className="flex gap-2.5 justify-center items-center self-start mt-3.5 text-sm whitespace-nowrap text-neutral-400">
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/938d63f58b29caa3da3cc7a8ab147b93c5c2270d96cb9ef416c1357a87b9d05e?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099"
                        className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
                    />
                    <div className="self-stretch my-auto">(328K)</div>
                </div>
            </div>
        </div>
    );
}
