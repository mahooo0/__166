import React from 'react';
import Header from '../components/Header';
import BreadcrumbNavigation from '../components/BreadCump';
import { Footer } from '../components/Footer';
import TeamCard from '../components/Team_Card';

export default function Team() {
    return (
        <div>
            <Header />
            <main className="lg:px-[100px] md:px-[60px] px-[30px]">
                <BreadcrumbNavigation />
                <section className="flex flex-wrap gap-8 mt-[34px] justify-center items-center px-28 text-base font-semibold leading-loose border-b border-solid border-b-slate-50 text-neutral-700 max-md:px-5 mt-34">
                    <div className="gap-2.5 self-stretch p-2.5 my-auto text-amber-300 whitespace-nowrap border-b border-solid border-b-amber-300">
                        Haqqımızda
                    </div>
                    <div className="gap-2.5 self-stretch p-2.5 my-auto whitespace-nowrap">
                        Komandamız
                    </div>
                    <div className="gap-2.5 self-stretch p-2.5 my-auto">
                        Mediada biz
                    </div>
                    <div className="gap-2.5 self-stretch p-2.5 my-auto whitespace-nowrap">
                        Blog
                    </div>
                    <div className="gap-2.5 self-stretch p-2.5 my-auto">
                        Tez-tez verilən suallar
                    </div>
                    <div className="gap-2.5 self-stretch p-2.5 my-auto whitespace-nowrap">
                        Qalereya
                    </div>
                </section>
                <div className="flex gap-3 items-center self-start text-3xl font-semibold text-gray-900 whitespace-nowrap mt-10">
                    <div className="shrink-0 self-stretch my-auto h-px bg-amber-300 border border-amber-300 border-solid w-[52px]" />
                    <div className="self-stretch my-auto ">Haqqımızda</div>
                </div>
                <section className="flex felx-row flex-wrap lg:justify-between justify-center gap-6 mt-20">
                    <TeamCard varioant="1" />
                    <TeamCard varioant="2" />
                    <TeamCard varioant="3" />
                    <TeamCard varioant="1" />
                    <TeamCard varioant="2" />
                    <TeamCard varioant="3" />
                    <TeamCard varioant="1" />
                    <TeamCard varioant="2" />
                    <TeamCard varioant="3" />
                </section>{' '}
            </main>
            <Footer />{' '}
        </div>
    );
}
