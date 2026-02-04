"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Button from "@/components/Common/Button/Button";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen  bg-white px-4 text-center">
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="space-y-6 max-w-lg">
        <div className="relative">
          <h1 className="text-9xl font-bold text-neutral-200 select-none">404</h1>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-2xl font-semibold text-[#1D1D1F]">Page Not Found</span>
          </div>
        </div>

        <p className="text-[#2A2A2A] text-lg">Oops! The page you are looking for has vanished or does not exist.</p>

        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }}>
          <Link
            href="/"
            
          >
            <Button  className="bg-primary text-white px-7 py-2.5 cursor-pointer rounded-[30px] " noPadding={true} variant="primary1">
            Go Back Home
            </Button>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}
