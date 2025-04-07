"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import DropDown from "./DropDown/DropDown";
import NavbarItems from "./NavbarItems/NavbarItems";
function Navbar({ openSidebar, sidebar }: { openSidebar: () => void; sidebar: boolean }) {
  const router = useRouter();
  // const [isScrolled, setIsScrolled] = useState(false);

  // function handleScroll() {
  //   if (window.scrollY > 100) {
  //     setIsScrolled(true);
  //   } else {
  //     setIsScrolled(false);
  //   }
  // }
  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);
  return (
    <>
      {/* First Header */}
      <section className={`bg-white relative transition-all duration-500 ease-in-out `}>
        <nav className="  py-0 max-w-[90%] mx-auto">
          {/* For large and Medium-sized Screen */}
          <div className="flex items-center justify-between relative py-4 container-padding">
            <div className="flex flex-row items-center w-36 md:w-40 2xl:w-60 h-10 relative">
              <Link href={"/"}>
                <Image
                  src={"/svgs/logos/logo.svg"}
                  fill
                  alt="logo"
                  onClick={() => {
                    router.push("/");
                  }}
                  className="object-contain cursor-pointer"
                />
              </Link>
            </div>
            {/* Navbar Items */}
            <NavbarItems />
            {/* Navbar Items */}
          </div>
          <div className="block lg:hidden absolute top-1/2 -translate-y-1/2 right-4 z-[1000]">
            {/* Dropdown */}
            <DropDown openSidebar={openSidebar} sidebar={sidebar} />
            {/* Dropdown */}
          </div>
        </nav>
      </section>
      {/* First Header */}
    </>
  );
}

export default Navbar;
