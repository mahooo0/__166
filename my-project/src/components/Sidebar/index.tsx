import * as React from 'react';
import CollapsibleComponent from './MultiDropdown';
const sidebarData = [
    {
        title: 'Transport',
        items: null, // No items, so this will be a simple header
    },
    {
        title: 'Yuyucu xidmətlər',
        items: [
            'Dəri və xəz məmulatlarının yuyulması',
            'Pərdə və tül yuyulması',
            'Quru təmizləmə',
            'İdman geyimlərinin yuyulması',
        ],
    },
    {
        title: 'Logistika',
        items: null, // No items, simple header
    },
    {
        title: 'Yükdaşıma',
        items: ['Ağır yüklərin daşınması', 'Xüsusi avadanlıqla daşınma'],
    },
    {
        title: 'Evakuasiya',
        items: null, // No items, simple header
    },
    {
        title: 'Anbar xidməti',
        items: null, // No items, simple header
    },
    {
        title: 'İşçi qüvvəsi xidməti',
        items: null, // No items, simple header
    },
    {
        title: 'Texnoloji həllər',
        items: ['Müasir avtomatlaşdırma', 'Yüksək dəqiqlikli texnologiyalar'],
    },
    {
        title: 'HVAC',
        items: null, // No items, simple header
    },
    {
        title: 'Karqo xidməti',
        items: ['Beynəlxalq daşınmalar', 'Sürətli çatdırılma'],
    },
];

export function Sidebar() {
    return (
        <div className="flex overflow-hidden items-start bg-white rounded-lg border border-solid border-zinc-100 min-w-[250px] h-fit pb-[28px]">
            <div className="flex flex-col h-fit w-full">
                <div className="flex flex-col px-3 pt-4 w-full">
                    {sidebarData.map(
                        (
                            section: {
                                title: string;
                                items?: string[] | null;
                            },
                            index: number
                        ) => {
                            // Check if `items` are present to decide which component to render
                            if (section.items) {
                                return (
                                    <CollapsibleComponent
                                        key={index}
                                        title={section.title}
                                        items={section.items}
                                    />
                                );
                            } else {
                                return (
                                    <div
                                        key={index}
                                        className={`flex items-center p-2 mt-6 w-full text-base rounded-lg font-semibold${
                                            index === 0
                                                ? ' text-white bg-[#FFCC4D] '
                                                : ' text-gray-900 '
                                        }whitespace-nowrap `}
                                    >
                                        <div className="flex-1 shrink gap-4 self-stretch my-auto w-full">
                                            {section.title}
                                        </div>
                                    </div>
                                );
                            }
                        }
                    )}
                </div>
            </div>
        </div>
    );
}
