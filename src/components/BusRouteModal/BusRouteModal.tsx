"use client";
import Image from "next/image";
import React, { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { IconX } from "@tabler/icons-react";
import { useOutsideClick } from "@/hooks/use-outside-click";

// Animation variants
const backdropVariants = {
  hidden: { opacity: 0, backdropFilter: "blur(0px)" },
  visible: { opacity: 1, backdropFilter: "blur(8px)", transition: { duration: 0.3, ease: "easeOut" } },
  exit: { opacity: 0, backdropFilter: "blur(0px)", transition: { duration: 0.2, ease: "easeIn" } },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 100, transition: { duration: 0.3, ease: "easeIn" } },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.4, ease: "easeOut", type: "spring", damping: 20, stiffness: 100 } },
  exit: { opacity: 0, scale: 0.9, y: 50, transition: { duration: 0.25, ease: "easeIn" } },
};

const contentVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3, delay: 0.1, ease: "easeOut" } },
};

interface BusRouteModalProps {
  isOpen: boolean;
  onClose: (isModalOpen: boolean) => void;
  className?: string;
  maxWidth?: string;
}

const busRoutes = [
  {
    routeNo: "ROUTE NO.1\n(BUS NO. 4)",
    route:
      "NITK- THADAMBAIL- MARIGUDI(SURATHKAL)- SURAJ HOTEL- GOVINDADAS COLLEGE- HOSABETTU- HONNAKATTE- KULAI- PANAMBUR- KULOOR- KODICAL CROSS- CHOWKI CANARA BANK- MAROLI- PADIL",
  },
  {
    routeNo: "ROUTE NO.2\n(BUS NO.10)",
    route:
      "KOTTARA CHOWKI- KOTTARA (INFOSYS)- URWA STORE- CHILIMBI- LADY HILL- LALBAGH- BALLALBAGH- EMPIRE MALL- BESANT SCHOOL- PVS- BUNTS HOSTEL- CV NAYAK HALL- CITY HOSPITAL- KADRI MALLIKATTE- SHIVABAGH- NANTHOOR- KODAKKAL",
  },
  {
    routeNo: "ROUTE NO.3\n(BUS NO.5)",
    route: "ALAKE- KUDROLI- NEW CHITRA- CAR STREET- RTO- PANDESHWAR- MANGALA DEVI- MARNAMIKATTE- NANDIGUDDA- VELENCIA- KANKANADY",
  },
  {
    routeNo: "ROUTE NO.4\n(BUS NO.1)",
    route: "TALAPADY- BEERI- KOTEKAR- KOLYA",
  },
  {
    routeNo: "ROUTE NO.5\n(BUS NO.2)",
    route: "DARBE CIRCLE- BUS STAND- BOLWAR- NAGARA- KABAKA- MANI- KALLADKA- PANEMANGALUR",
  },
  {
    routeNo: "ROUTE NO.6\n(BUS NO.8)",
    route:
      "PANDITH HOUSE- KUTTAR- YENEPOYA- DERALAKATTE- KANACHUR- ASSAIGOLI- KONAJE- MUDIPU- SAJIPA- MELKAR- PANEMANGALORE- BC ROAD- KAIKAMBA BC ROAD- MODANKAP",
  },
  {
    routeNo: "ROUTE NO.7\n(BUS NO.9)",
    route:
      "MALEMAR- DEREBAIL KONCHADY- KONCHADY KATTE- DEREBAIL CHURCH- KUNTIKAN- KOTTARA CROSS- BEJAI KAPIKAD- BALIGA STORE- KSRTC BUS STAND- BEJAI CIRCLE- MUSEUM- PADAVU SCHOOL-ALAPE- PADIL JUNCTION",
  },
  {
    routeNo: "ROUTE NO.8\n(BUS NO.6)",
    route: "ASHOK NAGAR- DAIVAJNA HALL- MARIGUDI URWA- URWA MARKET- MANNAGUDDA- DURGA MAHAL- ADYAR KATTE- ADYAR- ADYAR POST OFFICE- NETRAKERE",
  },
  {
    routeNo: "ROUTE NO.9\n(BUS NO.3)",
    route: "KAVOOR- BODEL- PADAVINANGADI- MARY HILL- YEYYADI – KPT- NANTHOOR JUNCTION- BIKKARNAKATTE",
  },
  {
    routeNo: "ROUTE NO.10\n(BUS NO.7)",
    route: "KUMPALA- ULLALA- THOKKOTTU- KALLAPU- JEPPINAMOGARU – YEKKURU- GORIGUDDA- JUJJODI- PUMPWELL- RED BUILDING- NAGURI",
  },
  {
    routeNo: "ROUTE NO.11\n(BUS NO.11)",
    route: "MOODABIDRI- YEDAPADAVU- GANJIMATA- KAIKAMBA- POLALI DWARA- POLALI- KALPANE",
  },
];

const BusRouteModal: React.FC<BusRouteModalProps> = ({ isOpen, onClose, className = "", maxWidth = "max-w-5xl" }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // FIX 1: Only trigger close if isOpen is true AND we are not currently viewing an image.
  useOutsideClick(containerRef, () => {
    if (isOpen && !selectedImage) onClose(false);
  });

  React.useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        // FIX 2: Prioritize closing the image preview. If no image, then close main modal.
        if (selectedImage) {
          setSelectedImage(null);
        } else if (isOpen) {
          onClose(false);
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose, selectedImage]); // Added selectedImage to dependency array

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div className="fixed inset-0 h-screen z-[9999999999999999] overflow-auto" initial="hidden" animate="visible" exit="exit">
          {/* Backdrop */}
          <motion.div
            variants={backdropVariants}
            className="bg-black/80 backdrop-blur-lg h-full w-full fixed inset-0"
            onClick={() => {
                // Optional safety: Only close main modal if image isn't open
                if (!selectedImage) onClose(false);
            }}
          />

          {/* Modal Content */}
          <motion.div
            variants={cardVariants}
            ref={containerRef}
            className={`${maxWidth} mx-auto bg-white h-fit z-[60] my-6 sm:my-10 pb-8 sm:pb-10 rounded-3xl font-sans relative shadow-2xl ${className}`}
          >
            {/* Close Button */}
            <motion.button
              variants={contentVariants}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 h-8 w-8 cursor-pointer bg-[#808080] rounded-full flex items-center justify-center"
              onClick={() => onClose(false)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <IconX className="h-6 w-6 text-white" />
            </motion.button>

            {/* Content */}
            <motion.div variants={contentVariants} className="p-4 sm:px-8 md:px-10 lg:px-12 py-12 sm:py-12 lg:pt-16 lg:pb-12">
              <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-bold text-[#1D1D1F] mb-8 text-center">Bus Route Information</h2>

              {/* Table Section */}
              <div className="overflow-x-auto">
                <div className="rounded overflow-hidden border border-gray-200 w-full">
                  <table className="w-full text-left border border-gray-200 text-[13px] md:text-[15px]">
                    <thead className="bg-[#F3F8FC] text-[#2884CA]">
                      <tr>
                        <th className="py-3 md:px-4 px-1 border-b whitespace-pre-line">ROUTE NO.(BUS NO.)</th>
                        <th className="py-3 md:px-4 px-1 border-b">Travel Route</th>
                      </tr>
                    </thead>

                    <tbody className="transition-all duration-700 ease-in-out">
                      {busRoutes.map((route, index) => (
                        <tr key={index} className="text-textGray">
                          <td className="py-3 md:px-4 px-1 border-b whitespace-pre-line font-medium align-top">{route.routeNo}</td>
                          <td className="py-3 md:px-4 px-1 border-b align-top">{route.route}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Additional Text Section */}
              <div className="mt-8 space-y-4 text-gray-700 text-sm md:text-base">
                <p>
                  <span className="font-semibold">1.</span> Alake & Kudroli pickup points students can board the bus No.15 @ Durga mahal @7.55 a.m.
                </p>
                <p>
                  <span className="font-semibold">2.</span> Bantwal, Bantwal pete, Bantwal bypass, Bhandaribettu, Jakribettu students can board the
                  bus no.7 @ BC Road @ 8.15 a.m.
                </p>
              </div>
              <div className="mt-14">
                <h3 className="text-2xl sm:text-3xl lg:text-[40px] font-bold text-[#1D1D1F] mb-4 text-center">Private Bus Timings</h3>
                <div className="flex flex-wrap justify-center gap-4">
                  {[1, 2, 3, 4, 5].map((num) => (
                    <div
                      key={num}
                      className="cursor-pointer transition-transform duration-300"
                      onClick={() => setSelectedImage(`/busImages/privateBusTimes/l${num}.png`)}
                    >
                      <Image
                        src={`/busImages/privateBusTimes/l${num}.png`}
                        alt={`Private Bus Timing ${num}`}
                        width={200}
                        height={150}
                        className=" object-cover w-[200px] h-auto md:h-[300px]"
                      />
                    </div>
                  ))}
                </div>
              </div>
              {/* How to Reach Section */}
              <div className="mt-14">
                <h3 className="text-2xl sm:text-3xl lg:text-[40px] font-bold text-[#1D1D1F] mb-4 text-center">How to Reach</h3>
                <div className="flex justify-center">
                  <Image
                    src="/busImages/roadmap.gif"
                    alt="How to Reach Roadmap"
                    width={800}
                    height={600}
                    className="max-w-full h-auto "
                  />
                </div>
              </div>

              {/* Private Bus Timings Section */}

            </motion.div>
          </motion.div>
        </motion.div>
      )}

      {/* Image Preview Modal */}
      {selectedImage && (
        <motion.div className="fixed inset-0 h-screen z-[99999999999999999] overflow-auto" initial="hidden" animate="visible" exit="exit">
          {/* Backdrop */}
          <motion.div
            variants={backdropVariants}
            className="bg-black/80 backdrop-blur-lg h-full w-full fixed inset-0"
            onClick={() => setSelectedImage(null)}
          />

          {/* Modal Content */}
          <motion.div
            className="relative max-w-5xl mx-auto bg-[#D9D9D9] h-fit z-[100] my-6 sm:my-10 p-4 rounded-3xl font-sans shadow-2xl flex justify-center items-center"
            variants={cardVariants}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <motion.button
              variants={contentVariants}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 h-8 w-8 cursor-pointer bg-[#808080] rounded-full flex items-center justify-center z-10"
              onClick={() => setSelectedImage(null)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <IconX className="h-6 w-6 text-white" />
            </motion.button>

            {/* Preview Image */}
            <div className="pt-5 sm:p-10 w-full flex justify-center">
              <Image
                src={selectedImage}
                alt="Bus Timing Preview"
                width={1200}
                height={800}
                className="rounded-lg shadow-none object-contain md:object-cover h-screen w-auto"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default BusRouteModal;