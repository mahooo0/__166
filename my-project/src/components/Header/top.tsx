import React, { useState } from 'react';

type CustomerType = 'individual' | 'corporate';
type Language = {
    code: string;
    name: string;
    flag: string;
};

const languages: Language[] = [
    {
        code: 'en',
        name: 'English',
        flag: 'https://cdn.builder.io/api/v1/image/assets/c6f3c7bb740649e5a32c147b3037a1c2/fec43d2e72b3590c9136cfeb79929066450e7f93fa0f0c6648c8fc6cd0c21260?apiKey=c6f3c7bb740649e5a32c147b3037a1c2&',
    },
    { code: 'az', name: 'Azərbaycan', flag: 'http://b.io/az-flag-' },
    { code: 'ru', name: 'Русский', flag: 'http://b.io/ru-flag-' },
];

const socialIcons = [
    {
        src: 'https://cdn.builder.io/api/v1/image/assets/c6f3c7bb740649e5a32c147b3037a1c2/633b2080940d7a3f7bbbf0d03ab45649afd40dc13972c463a795f5584909f26f?apiKey=c6f3c7bb740649e5a32c147b3037a1c2&',
        alt: 'Social icon 1',
    },
    {
        src: 'https://cdn.builder.io/api/v1/image/assets/c6f3c7bb740649e5a32c147b3037a1c2/de1015fbfc88c5b2c1a2c176447322192ed2138e5c6254bd64ee7651aeb163fb?apiKey=c6f3c7bb740649e5a32c147b3037a1c2&',
        alt: 'Social icon 2',
    },
    {
        src: 'https://cdn.builder.io/api/v1/image/assets/c6f3c7bb740649e5a32c147b3037a1c2/1cb939e43e6c2919ce72d9c8bafea5179e4a63279b93c020965c1c625f317773?apiKey=c6f3c7bb740649e5a32c147b3037a1c2&',
        alt: 'Social icon 3',
    },
    {
        src: 'https://cdn.builder.io/api/v1/image/assets/c6f3c7bb740649e5a32c147b3037a1c2/07ce28cf50c93da05d8ad0a10b723abd5a7f1a63deaa62a29d6ac49de6fa3cdc?apiKey=c6f3c7bb740649e5a32c147b3037a1c2&',
        alt: 'Social icon 4',
    },
];

const TopBar = ({
    setpaymentmodasl,
}: {
    setpaymentmodasl: (par: boolean) => void;
}) => {
    const [customerType, setCustomerType] =
        useState<CustomerType>('individual');
    const [selectedLanguage, setSelectedLanguage] = useState<Language>(
        languages[0]
    );
    const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);

    const handleCustomerTypeChange = (type: CustomerType) => {
        setCustomerType(type);
    };

    const handleLanguageChange = (language: Language) => {
        setSelectedLanguage(language);
        setIsLanguageDropdownOpen(false);
    };

    return (
        <header className="flex flex-wrap gap-10 justify-between items-center px-28 pt-3.5 pb-5 w-full bg-white shadow-[0px_0px_4px_rgba(105,105,105,0.12)] max-md:px-5 max-md:max-w-full">
            <div className="flex flex-wrap gap-10 justify-between items-center self-stretch my-auto min-w-[240px] w-[518px] max-md:max-w-full">
                <div className="flex items-center self-stretch my-auto text-sm font-medium bg-white rounded-lg min-w-[240px] shadow-[0px_0px_4px_rgba(0,0,0,0.12)]">
                    <button
                        onClick={() => handleCustomerTypeChange('individual')}
                        className={`gap-2.5 self-stretch p-2.5 my-auto rounded-lg ${
                            customerType === 'individual'
                                ? 'text-yellow-500 border border-yellow-500 border-solid'
                                : 'text-black'
                        }`}
                    >
                        Fərdi Müştərilər
                    </button>
                    <button
                        onClick={() => handleCustomerTypeChange('corporate')}
                        className={`gap-2.5 self-stretch p-2.5 my-auto rounded-lg ${
                            customerType === 'corporate'
                                ? 'text-yellow-500 border border-yellow-500 border-solid'
                                : 'text-black'
                        }`}
                    >
                        Korporativ Müştərilər
                    </button>
                </div>
                <div className="flex gap-6 items-center self-stretch my-auto">
                    {socialIcons.map((icon, index) => (
                        <img
                            key={index}
                            loading="lazy"
                            src={icon.src}
                            alt={icon.alt}
                            className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square"
                        />
                    ))}
                </div>
            </div>
            <div className="flex gap-10 items-end self-stretch my-auto text-sm min-w-[240px]">
                <button
                    className="flex gap-1.5 items-center font-medium text-black"
                    onClick={() => setpaymentmodasl(true)}
                >
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/c6f3c7bb740649e5a32c147b3037a1c2/58d125d4330d21fe4cffca74e6471256e97b08993d99e0ee703ab9fc4683c505?apiKey=c6f3c7bb740649e5a32c147b3037a1c2&"
                        alt="Online payment icon"
                        className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
                    />
                    <div className="self-stretch my-auto">Onlayn ödəniş</div>
                </button>
                <div className="relative flex flex-col leading-none text-black whitespace-nowrap w-[70px]">
                    <button
                        className="flex gap-1.5 justify-center items-center"
                        onClick={() =>
                            setIsLanguageDropdownOpen(!isLanguageDropdownOpen)
                        }
                        aria-haspopup="listbox"
                        aria-expanded={isLanguageDropdownOpen}
                    >
                        <img
                            loading="lazy"
                            src={selectedLanguage.flag}
                            alt={`${selectedLanguage.name} flag`}
                            className="object-contain shrink-0 self-stretch my-auto w-5 rounded-full aspect-square"
                        />
                        <div className="self-stretch my-auto">
                            {selectedLanguage.code}
                        </div>
                    </button>
                    {isLanguageDropdownOpen && (
                        <ul
                            className="absolute top-full left-0 mt-1 bg-white border border-gray-200 rounded-md shadow-lg z-10"
                            role="listbox"
                        >
                            {languages.map((language) => (
                                <li key={language.code}>
                                    <button
                                        className="w-full text-left px-4 py-2 hover:bg-gray-100 flex items-center gap-2"
                                        onClick={() =>
                                            handleLanguageChange(language)
                                        }
                                        role="option"
                                        aria-selected={
                                            language.code ===
                                            selectedLanguage.code
                                        }
                                    >
                                        <img
                                            src={language.flag}
                                            alt={`${language.name} flag`}
                                            className="w-5 h-5 rounded-full"
                                        />
                                        {language.name}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </header>
    );
};

export default TopBar;
