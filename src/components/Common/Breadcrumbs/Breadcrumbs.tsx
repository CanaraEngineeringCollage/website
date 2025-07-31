"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { FC, useEffect, useState } from "react";
import { BiSolidHomeAlt2 } from "react-icons/bi";
import { HiChevronRight } from "react-icons/hi";

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

const Breadcrumbs: FC<BreadcrumbsProps> = ({ items }) => {
  const [activeItem, setActiveItem] = useState<BreadcrumbItem | null>(null);
  const currentPath = usePathname();
  const searchParams = useSearchParams();
  const tab = searchParams.get("tab");

  useEffect(() => {
    setActiveItem(items.find((item) => (tab ? item.href === tab : item.href === currentPath)) || null);
  }, [items, currentPath, tab]);

  return (
    <nav className="text-black text-sm py-4 flex items-center gap-1" aria-label="Breadcrumb">
      <Link href="/" className="flex items-center gap-1 hover:underline">
        <BiSolidHomeAlt2 className="w-4 h-4" />
        <HiChevronRight className="w-4 h-4 text-[#0000008F]" />
        <span className="text-[#0000008F]">Home</span>
      </Link>

      {activeItem && (
        <Link href={activeItem.href} className="flex items-center gap-1 hover:underline">
          <HiChevronRight className="w-4 h-4 text-[#0000008F]" />
          <span className="text-[#0000008F] font-medium">{activeItem.label}</span>
        </Link>
      )}
    </nav>
  );
};

export default Breadcrumbs;
