import { FiArrowRight } from "react-icons/fi";
import { FaChevronDown } from "react-icons/fa6";
import { BsArrowLeft } from "react-icons/bs";
import React from "react";
export default function Button({
  variant,
  children,
  darkVariant = variant,
  childClassName,
  disabled,
  className,
  onClick,
  text = "xl",
  type = "button",
  hoverIcon = true,
  noPadding = false,
  ...other
}: {
  variant: "primary1" | "primary2" | "primary3" | "secondary1" | "secondary2" | "secondary3" | "tertiary1" | "chevron" | "back";
  children?: React.ReactNode;
  darkVariant?: "primary1" | "primary2" | "primary3" | "secondary1" | "secondary2" | "secondary3" | "tertiary1" | "chevron" | "back";
  onClick?: () => void;
  childClassName?: string;
  disabled?: boolean;
  className?: string;
  text?: string;
  type?: "submit" | "button";
  hoverIcon?: boolean;
  noPadding?: boolean;
}) {
  const [darkMode, setDarkMode] = React.useState(false);

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      {...other}
      className={` ${darkMode ? darkVariant : variant} ${
        variant !== "tertiary1" && !noPadding && "px-10 py-3"
      } ${text} font-openSans !outline-none  rounded-full relative font-bold cursor-pointer group/item ${className}`}
    >
      {children}
      {variant === "secondary2" && hoverIcon && (
        <FiArrowRight
          className={`${childClassName} secondary1-arrow group-hover/item:text-primary hover:border-primary  transition-all ease-in-out duration-300 text-secondary group-disabled/item:text-[#D9D9D9] `}
        />
      )}

      {darkVariant === "secondary1" && hoverIcon && (
        <FiArrowRight
          className={`${childClassName} secondary2-arrow group-hover/item:text-primary text-[#1D1D1F] group-disabled/item:text-[#D9D9D9] `}
        />
      )}

      {variant === "chevron" && (
        <FaChevronDown
          className={`${childClassName} text-primary focus:text-[#A61140] hover:text-[#A61140] active:text-[#A61140] disabled:text-[#D9D9D9] transition-colors ease-in-out duration-300 `}
          size={30}
        />
      )}
      {variant === "back" && (
        <div
          className={`${childClassName} p-2 rounded-full border border-black  transition-colors ease-in-out duration-300  group/child hover:border-[#A61140] active:border-[#A61140] focus:border-primary ${
            disabled && "border-[#D9D9D9]"
          } `}
        >
          <BsArrowLeft
            size={50}
            className={`${childClassName}  text-[#1D1D1F]   transition-colors ease-in-out duration-300 group-hover/child:text-[#A61140] group-active/child:text-[#A61140] group-focus/child:text-primary   ${
              disabled && "text-[#D9D9D9]"
            } `}
          />
        </div>
      )}
    </button>
  );
}
