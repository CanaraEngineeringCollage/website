"use client";

import dynamic from "next/dynamic";

// Because this file has "use client", we are allowed to use ssr: false here.
const ExploreCampus = dynamic(() => import("./ExploreCampus"), {
  ssr: false,
  loading: () => <div className="min-h-[50vh] flex items-center justify-center"></div>,
});

interface ExploreCampusProps {
  title?: string;
  description?: string;
  [key: string]: any;
}

export default function ExploreCampusWrapper({ title, description, ...rest }: ExploreCampusProps) {
  return (
    <>
      {/* 
        We explicitly render the title and description here instead of passing them
        down so they can be SSR'd and are instantly visible before the client bundle loads.
      */}
      {(title || description) && (
        <section className="max-w-7xl xl:max-w-[75%] mx-auto text-[#1D1D1F] pt-16 -mb-6 relative z-10">
          <div className="text-center lg:px-32">
            {title && <h1 className="text-center md:leading-[1.1] text-3xl md:text-[46px] mb-5 font-bold">{title}</h1>}
            {description && <p className="text-center text-[21px]">{description}</p>}
          </div>
        </section>
      )}
      <div className={title || description ? "" : ""}>
        <ExploreCampus {...rest} title="" description="" />
      </div>
    </>
  );
}
