import React, { useState } from 'react';

interface NavItemProps {
    label: string;
    hasDropdown?: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ label, hasDropdown = false }) => {
    const [isopen, setisopen] = useState<boolean>(false);
    return (
        <div
            className="flex gap-1 items-center self-stretch my-auto whitespace-nowrap relative min-w-[100px]"
            onMouseEnter={() => setisopen(true)}
            onMouseLeave={() => setisopen(false)}
        >
            {hasDropdown ? (
                <>
                    <div className="self-stretch my-auto">{label}</div>
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/c6f3c7bb740649e5a32c147b3037a1c2/e6f40cdbe228508eb262469625c9d9d42577f03b2657a8ebd6219603f6fded28?apiKey=c6f3c7bb740649e5a32c147b3037a1c2&"
                        alt="Dropdown Icon"
                        className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
                    />
                    <div
                        style={
                            isopen ? { display: 'flex' } : { display: 'none' }
                        }
                        className=" absolute top-[100%] bg-white w-full rounded-lg h-[100px] z-50 border border-black border-opacity-20"
                    ></div>
                </>
            ) : (
                <div className="self-stretch my-auto">{label}</div>
            )}
            {/* <div className=" absolute top-0 w-full h-[30pz ]">
                <div className="self-stretch my-auto">{label}</div>
            </div> */}
        </div>
    );
};

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
    return (
        <nav className="flex flex-wrap gap-10 items-center justify-between px-28 py-1.5 w-full bg-white shadow-[0px_2px_4px_rgba(105,105,105,0.12)] max-md:px-5 max-md:max-w-full">
            <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/c6f3c7bb740649e5a32c147b3037a1c2/eda35ffc32fb918a4487278d4fad3295496e75ead6865cf55da86d99d128170c?apiKey=c6f3c7bb740649e5a32c147b3037a1c2&"
                alt="Company Logo"
                className="object-contain shrink-0 self-stretch my-auto aspect-[1.27] w-[94px]"
            />
            <div className="flex flex-wrap gap-10 items-center self-stretch my-auto min-w-[240px] max-md:max-w-full">
                <div className="flex flex-col self-stretch my-auto text-lg whitespace-nowrap rounded-lg border border-solid border-zinc-100 text-neutral-200 w-[200px]">
                    <div className="flex gap-4 px-4 py-2 bg-white rounded-lg justify-center items-center">
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/c6f3c7bb740649e5a32c147b3037a1c2/f06325b2b7439ca9cf60443c4bce3ec06e9144bd7dac83e2b4726f33015d8aeb?apiKey=c6f3c7bb740649e5a32c147b3037a1c2&"
                            alt="Search Icon"
                            className="object-cover shrink-0  w-5 aspect-square "
                        />
                        <input
                            type="text"
                            name=""
                            className="grow shrink w-32  h-full  focus:outline-none text-black"
                            placeholder="Search"
                            id=""
                        />
                        {/* <div className="grow shrink w-32">Search</div> */}
                    </div>
                </div>
                <div className="flex flex-wrap gap-10 items-center self-stretch my-auto min-w-[240px] max-md:max-w-full">
                    <div className="lg:flex hidden gap-6 items-center self-stretch my-auto text-sm font-medium text-black min-w-[240px] max-md:max-w-full">
                        <NavItem label="Əsas səhifə" />
                        <NavItem label="Şirkətimiz" hasDropdown />
                        <NavItem label="Xidmətlər" hasDropdown />
                        <NavItem label="Blog" hasDropdown />
                        <NavItem label="Əlaqə" />
                    </div>
                    <div className="flex gap-2.5 items-center self-stretch px-2.5 py-1.5 my-auto text-base font-semibold text-white bg-amber-300 rounded-lg min-h-[36px]">
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/c6f3c7bb740649e5a32c147b3037a1c2/efa8b1340653e8c024486e1e9748984b4e4c8b0ccc4d3fdc68e77508aaf56fe0?apiKey=c6f3c7bb740649e5a32c147b3037a1c2&"
                            alt="Call Icon"
                            className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
                        />
                        <div className="self-stretch my-auto">Book a call</div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
