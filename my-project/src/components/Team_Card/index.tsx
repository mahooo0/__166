import React from 'react';

export default function TeamCard({ varioant }: { varioant: '1' | '2' | '3' }) {
    return (
        <div className="grayscale hover:grayscale-0 duration-300">
            {' '}
            <div className="flex flex-col max-w-[392px]">
                <div className="border border-[#E4E4E4] rounded-lg relative overflow-hidden">
                    {' '}
                    <img
                        src="/svg/TeamBg.svg"
                        loading="lazy"
                        alt=""
                        style={
                            varioant === '1'
                                ? { right: '-33%' }
                                : varioant === '2'
                                ? {}
                                : { left: '-33%' }
                        }
                        className=" absolute top-[20%] z-[-1]"
                    />
                    <img
                        loading="lazy"
                        src="https://s3-alpha-sig.figma.com/img/fb95/519a/4b337edf5e3a3a52360e571ea14ce69f?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZK0Ml5gaKYi0f1SOsl7ELZcPpk1POHASrulxbdby7wTyNdSTx-iHYIC7-pvebp7r-NWx7MSjfrpcWq6l~BG8eXnsTKi4Y5mUtlgRmwyNUi41tXjQWhBcT1jJPl2d-QL24DMIZxffKWq0eOyeDH1c8grNFqAxBZuKr3nxlI0eiuy0hDxKbn-E1Hb0YSOxCMEuI0eppJdvmlI4I3MU386e6QBr3bwMNwWkOwswJjyjA3fHi8ErPyb-0gWfSEmDMxlOlQvTaAuWNm05o0XgQiUGxYRpobZH4BRBzIqalVDNE2FkP7M8zTzvrgKH2fm~D3nAU2FG7s5Zy~Ii0KAxkjdk2w__"
                        className="object-contain w-full aspect-[0.91]  !z-20"
                    />
                </div>

                <div className="flex flex-col mt-3.5 max-w-full w-[246px]">
                    <div className="text-xl font-medium text-gray-900">
                        Altay Nəcəfov
                    </div>
                    <div className="mt-1.5 text-base leading-loose text-neutral-600">
                        Hüquq şöbəsinin rəhbəri
                    </div>
                </div>
            </div>
        </div>
    );
}
