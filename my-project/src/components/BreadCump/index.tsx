import React from 'react';
interface BreadcrumbItemProps {
    icon: string;
    text: string;
    isLast?: boolean;
}

const BreadcrumbItem: React.FC<BreadcrumbItemProps> = ({
    icon,
    text,
    isLast = false,
}) => (
    <>
        <span
            className={`self-stretch my-auto ${
                isLast ? 'font-medium text-zinc-400' : ''
            }`}
        >
            {text}
        </span>
    </>
);

const breadcrumbData = [
    {
        icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/a4b9ba2426e30ea8708ffc720aa8994899e0cdcbc8c60ec3c07ba973313ce680?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099',
        text: 'Parent',
    },
    {
        icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/a7ef65ed27217eb666cd31dd6d2711e7e0527fdf941456d2cd68d2d9b4b67997?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099',
        text: 'Child',
    },
    {
        icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/a7ef65ed27217eb666cd31dd6d2711e7e0527fdf941456d2cd68d2d9b4b67997?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099',
        text: 'Sub Option',
    },
    {
        icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/a7ef65ed27217eb666cd31dd6d2711e7e0527fdf941456d2cd68d2d9b4b67997?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099',
        text: 'The Chosen One',
    },
];

const BreadcrumbNavigation: React.FC = () => {
    return (
        <nav
            aria-label="Breadcrumb"
            className="flex gap-1 items-center text-xs font-semibold text-zinc-700 mt-[24px]"
        >
            {breadcrumbData.map((item, index) => (
                <React.Fragment key={index}>
                    <BreadcrumbItem
                        icon={item.icon}
                        text={item.text}
                        isLast={index === breadcrumbData.length - 1}
                    />
                    {index < breadcrumbData.length - 1 && (
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/a7ef65ed27217eb666cd31dd6d2711e7e0527fdf941456d2cd68d2d9b4b67997?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099"
                            alt=""
                            className="object-contain shrink-0 self-stretch my-auto aspect-square w-[18px]"
                        />
                    )}
                </React.Fragment>
            ))}
        </nav>
    );
};

export default BreadcrumbNavigation;
