import React from 'react';

type MagazineItem = {
    image: string[];
    linkUrl: string[];
    title: string[];
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
        <div className="text-textGray text-[17px]">
            {data.map((section, idx) => (
                <div key={idx} className="mb-8">
                    {section.title && (
                        <h2 className="text-2xl font-semibold mb-4">{section.title}</h2>
                    )}
                    {section.data.map((item, i) => (
                        <div key={i} className="flex flex-row flex-wrap gap-6 mb-4">
                            {item.image.map((img, j) => (
                                <div key={j} className="flex flex-col w-40 ">
                                    <a
                                        href={item.linkUrl[j]}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block"
                                    >
                                        <img
                                            src={img}
                                            alt={``}
                                            className="w-40 h-56 object-cover rounded shadow"
                                        />
                                    </a>
                                    {item.title && item.title[j] && (
                                        <span className="mt-2 text-center">{item.title[j]}</span>
                                    )}
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default Magazines;
