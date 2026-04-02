"use client";
import React, { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { IconX } from "@tabler/icons-react";
import { useOutsideClick } from "@/hooks/use-outside-click";
import { toast } from "react-hot-toast";

// Animation variants (unchanged)
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

interface ContactFormModalProps {
  isOpen: boolean;
  onClose: (isModalOpen: boolean) => void;
  className?: string;
  maxWidth?: string;
  onSuccess?: () => void;
}

const TrainingPlacementModal: React.FC<ContactFormModalProps> = ({ isOpen, onClose, className = "", maxWidth = "max-w-5xl", onSuccess }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({ fullName: "", designation: "", organization: "", email: "", phone: "" });
  const [errors, setErrors] = useState({ fullName: "", designation: "", organization: "", email: "", phone: "" });
  const [touched, setTouched] = useState({ fullName: false, designation: false, organization: false, email: false, phone: false });

  // ✅ Validation logic (unchanged except comments message fixed)
  const validateField = (name: string, value: string): string => {
    switch (name) {
      case "fullName":
        if (!value.trim()) return "Full name is required";
        if (value.length < 2) return "Full name must be at least 2 characters";
        if (!/^[a-zA-Z\s]+$/.test(value)) return "Full name can only contain letters and spaces";
        return "";
      case "designation":
        if (!value.trim()) return "Designation is required";
        return "";
      case "organization":
        if (!value.trim()) return "Organization is required";
        return "";
      case "email":
        if (!value.trim()) return "Email is required";
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return "Invalid email format";
        return "";
      case "phone":
        if (!value.trim()) return "Phone number is required";
        if (!/^\+?\d{10,15}$/.test(value.replace(/\s/g, ""))) return "Invalid phone number (10-15 digits)";
        return "";
      case "comments":
        if (!value.trim()) return "Comments are required";
        if (value.length > 200) return "Comments cannot exceed 200 characters";
        return "";
      default:
        return "";
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setTouched((prev) => ({ ...prev, [name]: true }));
    setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
  };

  const validateForm = (): boolean => {
    const newErrors = {
      fullName: validateField("fullName", formData.fullName),
      designation: validateField("designation", formData.designation),
      organization: validateField("organization", formData.organization),
      email: validateField("email", formData.email),
      phone: validateField("phone", formData.phone),
    };
    setErrors(newErrors);
    setTouched({ fullName: true, designation: true, organization: true, email: true, phone: true });
    return !Object.values(newErrors).some((error) => error !== "");
  };

  const handleSubmit = async () => {
    if (validateForm()) {
      onClose(false);
      try {
        const toastId = toast.loading("Submitting your form...");
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/placement`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        if (!res.ok) {
          toast.dismiss(toastId);
          throw new Error("Failed to submit form");
        }

        // Reset form only if API call succeeds
        toast.dismiss(toastId);
        toast.success("Submitted successfully! We’ll contact you soon.");
        
        setFormData({ fullName: "", designation: "", organization: "", email: "", phone: "" });
        setTouched({ fullName: false, designation: false, organization: false, email: false, phone: false });
        setErrors({ fullName: "", designation: "", organization: "", email: "", phone: "" });
        if (onSuccess) {
          onSuccess();
        }
        
      } catch (error) {
        console.error("Error submitting placement form:", error);
        toast.error("Something went wrong. Please try again later.");
      }
    }
  };

  useOutsideClick(containerRef, () => {
    if (isOpen) onClose(false);
  });

  React.useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isOpen) onClose(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div className="fixed inset-0 h-screen z-[9999999999999999] overflow-auto" initial="hidden" animate="visible" exit="exit">
          {/* Backdrop */}
          <motion.div
            variants={backdropVariants}
            className="bg-black/80 backdrop-blur-lg h-full w-full fixed inset-0"
            onClick={() => onClose(false)}
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

            {/* Form Content */}
            <motion.div
              variants={contentVariants}
              className="p-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 py-12 sm:py-12 lg:pt-24 lg:pb-20 xl:pt-32 xl:pb-28"
            >
              <h2 className="text-2xl sm:text-3xl lg:text-[46px] font-bold text-[#2884CA] text-center">Let’s Build Careers Together</h2>

              <h2 className="text-2xl sm:text-3xl lg:px-32 lg:text-[46px] font-bold text-[#1D1D1F] mb-4 text-center">
                Training & Placement Collaboration
              </h2>

              <p className="text-gray-600 text-base sm:text-lg md:text-xl text-center max-w-3xl mx-auto">
                Share your details and our Training & Placement team will connect with you to explore recruitment drives, internships, and industry
                partnerships.
              </p>

              <div className="space-y-6 mt-6 w-full max-w-6xl mx-auto">
                {/* Full Name */}
                <div>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`w-full p-3 outline-none border-b-2 ${
                      touched.fullName && errors.fullName ? "border-red-500" : "border-gray-300"
                    } text-[#1D1D1F]`}
                    placeholder="Your Full Name"
                  />
                  {touched.fullName && errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>}
                </div>

                {/* Designation */}
                <div>
                  <input
                    type="text"
                    id="designation"
                    name="designation"
                    value={formData.designation}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`w-full p-3 outline-none border-b-2 ${
                      touched.designation && errors.designation ? "border-red-500" : "border-gray-300"
                    } text-[#1D1D1F]`}
                    placeholder="Designation"
                  />
                  {touched.designation && errors.designation && <p className="text-red-500 text-sm mt-1">{errors.designation}</p>}
                </div>

                {/* Organization */}
                <div>
                  <input
                    type="text"
                    id="organization"
                    name="organization"
                    value={formData.organization}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`w-full p-3 outline-none border-b-2 ${
                      touched.organization && errors.organization ? "border-red-500" : "border-gray-300"
                    } text-[#1D1D1F]`}
                    placeholder="Organization"
                  />
                  {touched.organization && errors.organization && <p className="text-red-500 text-sm mt-1">{errors.organization}</p>}
                </div>

                {/* Email */}
                <div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`w-full p-3 outline-none border-b-2 ${
                      touched.email && errors.email ? "border-red-500" : "border-gray-300"
                    } text-[#1D1D1F]`}
                    placeholder="Enter Your Email"
                  />
                  {touched.email && errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>

                {/* Phone */}
                <div>
                  <input
                    type="number"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`w-full p-3 outline-none border-b-2 appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none [&::-moz-appearance:textfield] ${
                      touched.phone && errors.phone ? "border-red-500" : "border-gray-300"
                    } text-[#1D1D1F]`}
                    placeholder="Your Phone Number"
                  />
                  {touched.phone && errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                </div>

                {/* Comments */}

                {/* Submit Button */}
                <div className="text-center">
                  <button
                    aria-label="Submit Form"
                    type="button"
                    className="px-6 sm:px-8 lg:px-10 py-2 bg-[#2884CA] rounded-3xl text-white text-base sm:text-lg cursor-pointer"
                    onClick={handleSubmit}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default TrainingPlacementModal;
