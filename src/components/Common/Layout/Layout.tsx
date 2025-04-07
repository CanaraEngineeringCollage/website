"use client";

import { useState } from "react";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../SIdeBar/SIdeBar";
import Footer from "../Footer/Footer";
function Layout({ children }: any) {
  const [sidebar, openSidebar] = useState(false);
  return (
    <>
      <div className="min-h-screen ">
        {/* overflow-x-hidden */}
        <header className="fixed top-0 left-0 right-0 z-[1111] ">
          <Navbar openSidebar={openSidebar} sidebar={sidebar} />
        </header>
        <main className="mt-16 font-poppins">
          <Sidebar openSidebar={openSidebar} sidebar={sidebar} />
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
        <Footer/>
      </div>
    </>
  );
}
export default Layout;
