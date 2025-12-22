"use client";
import Link from "next/link";
import React from "react";
import Button from "@/components/Common/Button/Button";

const StickyBottomBar = ({title ,link ,buttonText}: {title: string , link: string , buttonText: string}) => {
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 w-full bg-white  z-50 py-4    transition-all duration-700 ease-in-out transform ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
      }`}
    >
        <div className=" w-[80%] flex flex-col md:flex-row gap-3 md:gap-0 md:justify-between items-center mx-auto">
<p className="text-textGray font-bold text-lg lg:text-[20px] ">{title}</p>

      <Link
        href={link}
        target="_blank"
        aria-label="Placement Portal"
      >
        <Button
          variant="primary1"
          aria-label="Placement Portal"
          className="text-white font-bold text-[17px] bg-primary
               px-6 py-2 cursor-pointer rounded-3xl inline-flex gap-3 
               items-center min-w-[250px] justify-center"
        >
          {buttonText}
        </Button>
      </Link>
    </div>
    </div>
  );
};

export default StickyBottomBar;
