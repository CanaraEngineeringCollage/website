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

// Updated Data Structure
const busRoutes = [
  {
    routeNo: "1",
    departureTime: "7.50 a.m.",
    stops: "Talapady - Beeri – Kotekar - Kolya – College",
    coordinator: "Mr. Navaneet Bhaktha",
    contactNo: "8111939377",
    busNo: "1",
  },
  {
    routeNo: "2",
    departureTime: "7.30 a.m.",
    stops: "Puttur (Darbe Circle) – Bus Stand – Bolwar – Nagara – Kabaka – Mani – Kalladka – College",
    coordinator: "Mr. Subramanya",
    contactNo: "8861494057",
    busNo: "2",
  },
  {
    routeNo: "3",
    departureTime: "7.45 a.m.",
    stops: "Kavoor – Bondel – Padavinangadi – Mary Hill – Yeyyadi – KPT – Nanthoor Junction - Bikkarnakatte – College",
    coordinator: "Mr. Suresh S",
    contactNo: "9845512424",
    busNo: "3",
  },
  {
    routeNo: "4",
    departureTime: "7.45 a.m.",
    stops: "NITK – Thadambail – Marigudi(Surathkal) – Suraj Hotel – Govindadas College – Hosabettu – Honnakatte – Kulai – Panambur – Kuloor – Kodical Cross – Chowki Canara Bank - College",
    coordinator: "Mr. Rajesh Rao",
    contactNo: "9483924838",
    busNo: "4",
  },
  {
    routeNo: "5",
    departureTime: "7.50 a.m.",
    stops: "RTO – Pandeshwar – Mangala Devi – Marnamikatte – Nandigudde- Velencia – Kankanady– Red building – Naguri- Padil- College",
    coordinator: "Mrs. Bhavani",
    contactNo: "9916071734",
    busNo: "5",
  },
  {
    routeNo: "6",
    departureTime: "7.50 a.m.",
    stops: "Ashok Nagar – Daivajna Hall – Marigudi – Urwa Market – Mannagudda – Durga Mahal –Adyarkatte - College",
    coordinator: "Mr. Ajay Shet",
    contactNo: "9480174650",
    busNo: "6",
  },
  {
    routeNo: "7",
    departureTime: "7.45 a.m.",
    stops: "Kolya- Kumpala – Ullala – Thokkottu – Kallapu – Jeppinamogaru – Yekkuru – Gorigudda – Ujjodi – Pumpwell – College",
    coordinator: "Ms. Pavithra Nayak",
    contactNo: "6363728492",
    busNo: "7",
  },
  {
    routeNo: "8",
    departureTime: "7.35 a.m.",
    stops: "Pandit House - Kuttar - Yenepoya - Deralakatte - Kanachur - Assaigoli - Konaje - Mudipu - Sajipa - Melkar - Panemangalur - BC Road – Kaikamba (BC Road) –Modankap – Pachinadka - College",
    coordinator: "Mr. Shubhashree",
    contactNo: "9008379109",
    busNo: "8",
  },
  {
    routeNo: "9",
    departureTime: "7.45 a.m.",
    stops: "Malemar – Derebail Konchady – Konchadi katte(Land links) – Derebail church – Kuntikan – Kottara Cross – Bejai Kapikad – Baliga Store – KSRTC Bus stand - Bejai Circle – Museum – Padavu School – Alape - Padil Junction – Adyar – Adyar P O - Nethrakere – College",
    coordinator: "Mrs.Ashwini J",
    contactNo: "9480532203",
    busNo: "09",
  },
  {
    routeNo: "10",
    departureTime: "7.50 a.m.",
    stops: "Kottara Chowki – Kottara(Infosys) – Urwa Store – Chilimbi – Lady Hill – Lalbagh – Ballalbagh - Empiremall - Besant School – PVS - Bunts Hostel – CV Nayak hall – City Hospital – Kadri Mallikatte – Shivabagh – Nanthoor –Kodakkal - Farangipet - College",
    coordinator: "Mrs. Pallavi M",
    contactNo: "9845555573",
    busNo: "10",
  },
  {
    routeNo: "11",
    departureTime: "7.45 a.m.",
    stops: "Moodabidri – Yedapadavu – Ganjimata – Kaikamba – Polali Dwara – Polali -Kalpane – college",
    coordinator: "Mr. Gajanan Prabhu",
    contactNo: "9886286993",
    busNo: "11",
  },
  {
    routeNo: "12",
    departureTime: "7.50 a.m.",
    stops: "Mannagudda Durgamahal - Kudroli dwara - New Chithra – Carstreet -Venkataramana Temple - Temple Square – Hampanakatta - Jyothi – Pumpwell – Padil – College",
    coordinator: "Mrs. Vinoda Baliga",
    contactNo: "9980248567",
    busNo: "12",
  },
  {
    routeNo: "14",
    departureTime: "7.30 a.m.",
    stops: "Uppinangady-Perne-Madala-Mani-Kalladka-B.C.Road-Modankap-Pachhinadka-",
    coordinator: "Mrs. Bhavya",
    contactNo: "94818 45863",
    busNo: "14",
  },
];

const BusRouteModal: React.FC<BusRouteModalProps> = ({ isOpen, onClose, className = "", maxWidth = "max-w-5xl" }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useOutsideClick(containerRef, () => {
    if (isOpen && !selectedImage) onClose(false);
  });

  React.useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        if (selectedImage) {
          setSelectedImage(null);
        } else if (isOpen) {
          onClose(false);
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose, selectedImage]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div className="fixed inset-0 h-screen z-[9999999999999999] overflow-auto" initial="hidden" animate="visible" exit="exit">
          {/* Backdrop */}
          <motion.div
            variants={backdropVariants}
            className="bg-black/80 backdrop-blur-lg h-full w-full fixed inset-0"
            onClick={() => {
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
              <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-bold text-[#1D1D1F] mb-8 text-center">College Bus Route Information</h2>

              {/* Table Section */}
              <div className="overflow-x-auto">
                <div className="rounded overflow-hidden border border-gray-200 w-full">
                  <table className="w-full text-left border border-gray-200 text-[13px] md:text-[15px]">
                    <thead className="bg-[#F3F8FC] text-[#2884CA]">
                      <tr>
                        <th className="py-3 md:px-4 px-1 border-b whitespace-nowrap">Route No</th>
                        <th className="py-3 md:px-4 px-1 border-b whitespace-nowrap">Departure Time</th>
                        <th className="py-3 md:px-4 px-1 border-b min-w-[200px]">Stops</th>
                        <th className="py-3 md:px-4 px-1 border-b whitespace-nowrap">Coordinator</th>
                        <th className="py-3 md:px-4 px-1 border-b whitespace-nowrap">Contact No</th>
                        <th className="py-3 md:px-4 px-1 border-b whitespace-nowrap">Bus No</th>
                      </tr>
                    </thead>

                    <tbody className="transition-all duration-700 ease-in-out">
                      {busRoutes.map((route, index) => (
                        <tr key={index} className="text-textGray">
                          <td className="py-3 md:px-4 px-1 border-b align-top font-medium">{route.routeNo}</td>
                          <td className="py-3 md:px-4 px-1 border-b align-top">{route.departureTime}</td>
                          <td className="py-3 md:px-4 px-1 border-b align-top">{route.stops}</td>
                          <td className="py-3 md:px-4 px-1 border-b align-top">{route.coordinator}</td>
                          <td className="py-3 md:px-4 px-1 border-b align-top">{route.contactNo}</td>
                          <td className="py-3 md:px-4 px-1 border-b align-top">{route.busNo}</td>
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
                className="rounded-lg shadow-none object-contain  h-screen w-auto"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default BusRouteModal;