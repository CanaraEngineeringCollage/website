import React from 'react';

type MagazineItem = {
    image: string[];
    linkUrl: string[];
};

type MagazineSection = {
    title: string;
    data: MagazineItem[];
};

type MagazinesProps = {
    data: MagazineSection[];
};

const Magazines: React.FC<MagazinesProps> = ({ data }) => {
    return (
        <div className="lg2:px-24 mx-5 text-[#86868B] text-[17px]">
            {data.map((section, idx) => (
                <div key={idx} className="mb-8">
                    {section.title && (
                        <h2 className="text-xl font-semibold mb-4 ">{section.title}</h2>
                    )}
                    {section.data.map((item, i) => (
                        <div key={i} className="flex flex-row flex-wrap gap-6 mb-4">
                            {item.image.map((img, j) => (
                                <a
                                    key={j}
                                    href={item.linkUrl[j]}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block"
                                >
                                    <img
                                        src={img}
                                        alt={`Magazine ${i + 1}-${j + 1}`}
                                        className="w-40 h-56 object-cover rounded shadow"
                                    />
                                </a>
                            ))}
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default Magazines;
