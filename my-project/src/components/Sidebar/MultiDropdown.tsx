import { useState } from 'react';
interface Proops {
    title: string;
    items: string[];
}
function CollapsibleComponent({ title, items }: Proops) {
    // State to manage the visibility of the bottom div
    const [isOpen, setIsOpen] = useState(false);

    // Toggle function to handle the opening and closing of the div
    const toggleOpen = () => setIsOpen(!isOpen);

    return (
        <div className="flex flex-col mt-6 w-full">
            {/* Top div that triggers the toggle */}
            <div
                className="flex items-center p-2 w-full text-base font-semibold text-gray-900 whitespace-nowrap hover:bg-gray-100 rounded-lg cursor-pointer"
                onClick={toggleOpen} // Add click event to toggle
            >
                <div className="flex-1 shrink gap-4 self-stretch my-auto">
                    {title}
                </div>
                <img
                    loading="lazy"
                    style={!isOpen ? { rotate: '180deg' } : {}}
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/2b2e976ffefe0d67282d20b98b16d8072b166d35992c35061c986623def98677?placeholderIfAbsent=true&apiKey=2d5d82cf417847beb8cd2fbbc5e3c099"
                    className="object-contain shrink-0 self-stretch my-auto aspect-square w-[22px]"
                />
            </div>

            {/* Bottom div that toggles visibility */}
            {isOpen && items && (
                <div className="flex flex-col justify-center pl-6 mt-1.5 max-w-full text-sm font-medium text-neutral-400">
                    {items.map((item, index) => (
                        <div key={index} className="py-2.5 w-full">
                            {item}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default CollapsibleComponent;
