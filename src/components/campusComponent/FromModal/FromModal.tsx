"use client";
import React, { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { IconX } from "@tabler/icons-react";
import { useOutsideClick } from "@/hooks/use-outside-click";

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

interface FormModalProps {
  isOpen: boolean;
  onClose: (isModalOpen: boolean) => void;
  className?: string;
  maxWidth?: string;
}

const FormModal: React.FC<FormModalProps> = ({ isOpen, onClose, className = "", maxWidth = "max-w-7xl" }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    dateOfBirth: "",
    usn: "",
    address: "",
    comments: "",
  });
  const [errors, setErrors] = useState({
    fullName: "",
    email: "",
    phone: "",
    dateOfBirth: "",
    usn: "",
    address: "",
    comments: "",
  });
  const [touched, setTouched] = useState({
    fullName: false,
    email: false,
    phone: false,
    dateOfBirth: false,
    usn: false,
    address: false,
    comments: false,
  });

  // Validation logic
  const validateField = (name: string, value: string): string => {
    switch (name) {
      case "fullName":
        if (!value.trim()) return "Full name is required";
        if (value.length < 2) return "Full name must be at least 2 characters";
        if (!/^[a-zA-Z\s]+$/.test(value)) return "Full name can only contain letters and spaces";
        return "";
      case "email":
        if (!value.trim()) return "Email is required";
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return "Invalid email format";
        return "";
      case "phone":
        if (!value.trim()) return "Phone number is required";
        if (!/^\+?\d{10,15}$/.test(value.replace(/\s/g, ""))) return "Invalid phone number (10-15 digits)";
        return "";
      case "dateOfBirth":
        if (!value.trim()) return "Date of birth is required";
        if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) return "Invalid date format (YYYY-MM-DD)";
        return "";
      case "usn":
        if (!value.trim()) return "USN is required";
        if (!/^[A-Za-z0-9]{10}$/.test(value)) return "USN must be 10 alphanumeric characters";
        return "";
      case "address":
        if (!value.trim()) return "Address is required";
        if (value.length < 5) return "Address must be at least 5 characters";
        return "";
      case "comments":
        if (!value.trim()) return "Comments are required";
        if (value.length > 200) return "Comments cannot exceed 200 characters";
        return "";
      default:
        return "";
    }
  };

  // Handle form input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setTouched((prev) => ({ ...prev, [name]: true }));
    setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
  };

  // Handle blur to validate fields when the user leaves them
  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
  };

  // Validate entire form on submit
  const validateForm = (): boolean => {
    const newErrors = {
      fullName: validateField("fullName", formData.fullName),
      email: validateField("email", formData.email),
      phone: validateField("phone", formData.phone),
      dateOfBirth: validateField("dateOfBirth", formData.dateOfBirth),
      usn: validateField("usn", formData.usn),
      address: validateField("address", formData.address),
      comments: validateField("comments", formData.comments),
    };
    setErrors(newErrors);
    setTouched({
      fullName: true,
      email: true,
      phone: true,
      dateOfBirth: true,
      usn: true,
      address: true,
      comments: true,
    });
    return !Object.values(newErrors).some((error) => error !== "");
  };

  // Handle form submission
  const handleSubmit = () => {
    if (validateForm()) {
      // Add your submission logic here (e.g., API call)
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        dateOfBirth: "",
        usn: "",
        address: "",
        comments: "",
      });
      setTouched({
        fullName: false,
        email: false,
        phone: false,
        dateOfBirth: false,
        usn: false,
        address: false,
        comments: false,
      });
      setErrors({
        fullName: "",
        email: "",
        phone: "",
        dateOfBirth: "",
        usn: "",
        address: "",
        comments: "",
      });
      onClose(false);
    } else {
      console.log("Form has errors:", errors);
    }
  };

  // Close modal on outside click
  useOutsideClick(containerRef, () => {
    if (isOpen) onClose(false);
  });

  // Prevent body scroll when modal is open and handle Escape key
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isOpen) {
        onClose(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div className="fixed inset-0 h-screen z-50 overflow-auto" initial="hidden" animate="visible" exit="exit">
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
            className={`${maxWidth} mx-auto bg-white h-fit z-[60] my-10 pb-10 rounded-3xl font-sans relative shadow-2xl ${className}`}
          >
            {/* Close Button */}
            <motion.button
              variants={contentVariants}
              className="absolute top-6 right-0 me-4 lg:me-8 h-8 w-8 cursor-pointer ml-auto bg-[#808080] rounded-full flex items-center justify-center"
              onClick={() => onClose(false)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <IconX className="h-6 w-6 text-white" />
            </motion.button>
            {/* Form Content */}
            <motion.div variants={contentVariants} className="p-4 px-32 py-16">
              <h2 className="text-[46px] font-bold text-[#2884CA] text-center">Reconnect. Relive. Give Back.</h2>
              <h2 className="text-[46px] font-bold text-black mb-4 text-center">Join Our Alumni Network Today!</h2>
              <p className="text-textGray text-[20px] text-center px-52">
                Submit the form to stay connected & receive exclusive alumni updates, events, & opportunities!
              </p>

              <div className="space-y-6 mt-5 mx-auto">
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
                      touched.fullName && errors.fullName ? "border-red-500" : "border-border"
                    } text-black`}
                    placeholder="Your Full Name"
                  />
                  {touched.fullName && errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>}
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
                    className={`w-full p-3 outline-none border-b-2 ${touched.email && errors.email ? "border-red-500" : "border-border"} text-black`}
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
                    } text-black appearance-none numberInput`}
                    placeholder="Your Phone Number"
                  />
                  {touched.phone && errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                </div>
                {/* Date of Birth and USN */}
                <div className="flex justify-between gap-4">
                  <div className="w-full">
                    <input
                      type="date"
                      id="dateOfBirth"
                      name="dateOfBirth"
                      value={formData.dateOfBirth}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={`w-full p-3 outline-none border-b-2 ${
                        touched.dateOfBirth && errors.dateOfBirth ? "border-red-500" : "border-border"
                      } text-textGray`}
                      placeholder="Your Date of Birth"
                    />
                    {touched.dateOfBirth && errors.dateOfBirth && <p className="text-red-500 text-sm mt-1">{errors.dateOfBirth}</p>}
                  </div>
                  <div className="w-full">
                    <input
                      type="text"
                      id="usn"
                      name="usn"
                      value={formData.usn}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={`w-full p-3 outline-none border-b-2 ${touched.usn && errors.usn ? "border-red-500" : "border-border"} text-black`}
                      placeholder="Your USN"
                    />
                    {touched.usn && errors.usn && <p className="text-red-500 text-sm mt-1">{errors.usn}</p>}
                  </div>
                </div>
                {/* Address */}
                <div>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`w-full p-3 outline-none border-b-2 ${
                      touched.address && errors.address ? "border-red-500" : "border-border"
                    } text-black`}
                    placeholder="Your Current Address"
                  />
                  {touched.address && errors.address && <p className="text-red-500 text-sm mt-1">{errors.address}</p>}
                </div>
                {/* Comments */}
                <div>
                  <textarea
                    id="comments"
                    name="comments"
                    value={formData.comments}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    rows={3}
                    maxLength={200}
                    className={`w-full p-3 outline-none border-b-2 ${
                      touched.comments && errors.comments ? "border-red-500" : "border-border"
                    } text-black`}
                    placeholder="Enter Your Comments"
                  />
                  <div className="text-right text-sm text-gray-500">{formData.comments.length}/200</div>
                  {touched.comments && errors.comments && <p className="text-red-500 text-sm mt-1">{errors.comments}</p>}
                </div>
                {/* Submit Button */}
                <div className="text-center">
                  <button aria-label="Submit" type="button" className="px-10 cursor-pointer py-2 bg-[#2884CA] rounded-3xl text-white" onClick={handleSubmit}>
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

export default FormModal;
