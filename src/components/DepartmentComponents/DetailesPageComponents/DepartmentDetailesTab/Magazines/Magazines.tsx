import React from 'react';

// 1. Update your types to reflect the new object structure
type MagazineItem = {
    image: string;
    linkUrl: string;
    title?: string; // Optional, in case some items don't have titles
};

type MagazineSection = {
    title: string;
    items: MagazineItem[]; // Changed from 'data' to 'items' to match the JSON
};

type MagazinesProps = {
    data: MagazineSection[];
};

const Magazines: React.FC<MagazinesProps> = ({ data }) => {
    return (
        <div className="text-textGray text-[17px]">
            {data.map((section, idx) => (
                <div key={idx} className="mb-8">
                    {/* Section Title */}
                    {section.title && (
                        <h2 className="text-2xl font-semibold mb-4">{section.title}</h2>
                    )}
                    
                    {/* Grid of Magazine Items */}
                    <div className="flex flex-row flex-wrap gap-6 mb-4">
                        {section.items.map((item, i) => (
                            <div key={i} className="flex flex-col w-40">
                                <a
                                    href={item.linkUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block transition-transform hover:scale-105"
                                >
                                    <img
                                        src={item.image}
                                        alt={item.title || "Magazine cover"}
                                        className="w-40 h-56 object-cover rounded shadow"
                                    />
                                </a>
                                
                                {/* Item Title */}
                                {item.title && (
                                    <span className="mt-2 text-center text-sm font-medium">
                                        {item.title}
                                    </span>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Magazines;