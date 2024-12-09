import React, { useState } from 'react';

interface AccordionItemProps {
    title: string;
    content?: string;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ title, content }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="flex flex-col w-full border-b border-zinc-100 max-md:max-w-full">
            <div className="flex pt-0.5 w-full min-h-[3px] max-md:max-w-full" />
            <div className="flex flex-col py-6 w-full max-md:max-w-full">
                <div className="flex flex-wrap gap-4 w-full max-md:max-w-full">
                    <h3 className="flex-1 shrink h-full text-lg font-semibold leading-tight text-black min-w-[240px] max-md:max-w-full">
                        {title}
                    </h3>
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        aria-expanded={isOpen}
                        className="flex gap-2.5 items-start self-start w-6"
                    >
                        <img
                            src={
                                isOpen
                                    ? 'https://cdn.builder.io/api/v1/image/assets/TEMP/01f7f4acec79ea113e2031113fc58fd65b0baa50239d21bd907f687aca89645e?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099'
                                    : 'https://cdn.builder.io/api/v1/image/assets/TEMP/4c914cc1a8238223ef99df5edd41912dee75dce039b1a538c30a6c8925f49ea5?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099'
                            }
                            alt={isOpen ? 'Close accordion' : 'Open accordion'}
                            className="object-contain w-6 aspect-square"
                        />
                    </button>
                </div>
                {isOpen && content && (
                    <p className="mt-4 w-full text-base leading-6 text-zinc-700 text-opacity-80 max-md:max-w-full">
                        {content}
                    </p>
                )}
            </div>
            <div className="flex pt-0.5 w-full min-h-[3px] max-md:max-w-full" />
        </div>
    );
};

interface AccordionData {
    title: string;
    content?: string;
}

interface AccordionProps {
    items: AccordionData[];
}

const Accordion: React.FC<AccordionProps> = ({ items }) => {
    return (
        <section className="flex gap-2.5 items-start w-full max-md:max-w-full">
            <div className="flex flex-col flex-1 shrink w-full basis-0 min-w-[240px] max-md:max-w-full">
                <div className="flex items-start w-full max-md:max-w-full">
                    <div className="flex flex-col flex-1 shrink w-full basis-0 min-w-[240px] max-md:max-w-full">
                        {items.map((item, index) => (
                            <AccordionItem
                                key={index}
                                title={item.title}
                                content={item.content}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

const accordionData: AccordionData[] = [
    {
        title: 'Where can I watch?',
        content:
            'Nibh quisque suscipit fermentum netus nulla cras porttitor euismod nulla. Orci, dictumst nec aliquet id ullamcorper venenatis.',
    },
    { title: 'Mauris id nibh eu fermentum mattis purus?' },
    { title: 'Eros imperdiet rhoncus?' },
    { title: 'Fames imperdiet quam fermentum?' },
    { title: 'Varius vitae, convallis amet lacus sit aliquet nibh?' },
    { title: 'Tortor nisl pellentesque sit quis orci dolor?' },
    {
        title: 'Vestibulum mauris mauris elementum proin amet auctor ipsum nibh sollicitudin?',
    },
];

const FAQ: React.FC = () => {
    return (
        <div className="flex flex-col lg:w-[73%]">
            <Accordion items={accordionData} />
        </div>
    );
};

export default FAQ;
