import React from 'react';

interface MenuItemProps {
    label: string;
    isActive: boolean;
    hasIcon?: boolean;
}

const MenuItem: React.FC<MenuItemProps> = ({ label, isActive, hasIcon }) => {
    return (
        <div
            className={`flex items-center p-2 mt-6 w-full text-base font-semibold ${
                isActive ? 'text-white bg-amber-300' : 'text-gray-900'
            } ${isActive ? 'rounded-lg' : ''}`}
        >
            <div className="flex-1 shrink gap-4 self-stretch my-auto w-full">
                {label}
            </div>
            {hasIcon && (
                <div className="flex items-center self-stretch my-auto w-[22px]">
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/a5ff05f233606fef07311cf687da7d917624ced6f31aabd2d8c61b051b9f3e17?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099"
                        alt=""
                        className="object-contain self-stretch my-auto aspect-square w-[22px]"
                    />
                </div>
            )}
        </div>
    );
};

export default MenuItem;
