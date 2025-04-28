"use client";

import { useState } from "react";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../SIdeBar/SIdeBar";
import Footer from "../Footer/Footer";
import CampusNavbar from "@/components/campusComponent/CampusNavbar/page";
import { usePathname } from "next/navigation";

function Layout({ children }: { children: React.ReactNode }) {
  const [sidebar, openSidebar] = useState<boolean>(false);

  const pathname = usePathname(); // get current route

  const isCampusRoute = pathname.startsWith("/events") || pathname.startsWith("/alumini");

  return (
    <>
      <div className="min-h-screen ">
        {/* overflow-x-hidden */}
        <header className="top-0 left-0 right-0 bg-white z-[1111] ">
          {isCampusRoute ? (
            <CampusNavbar openSidebar={() => openSidebar((prev) => !prev)} sidebar={sidebar} />
          ) : (
            <Navbar openSidebar={() => openSidebar((prev) => !prev)} sidebar={sidebar} />
          )}
        </header>
        <main className=" font-poppins">
          <Sidebar openSidebar={() => openSidebar((prev) => !prev)} sidebar={sidebar} />
          <div
            onClick={() => {
              if (sidebar) {
                openSidebar(false);
              }
            }}
          >
            {children}
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
export default Layout;
