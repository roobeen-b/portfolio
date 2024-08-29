"use client";

import { AnimatePresence, motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import { ReactNode } from "react";
import { usePathname } from "next/navigation";

const TransitionProvider = ({ children }: { children: ReactNode }) => {
  const pathName = usePathname();

  return (
    <AnimatePresence mode="wait">
      <div className="w-screen h-screen " key={pathName}>
        <motion.div
          className="h-screen w-screen bg-black rounded-b-[100px] fixed z-40"
          animate={{ height: 0 }}
          exit={{ height: "140vh" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
        <motion.div
          className="h-fit w-fit cursor-default bg-black rounded-b-[100px] fixed z-50 text-white text-8xl m-auto top-0 left-0 right-0 bottom-0"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {pathName.substring(1)}
        </motion.div>
        <motion.div
          className="h-screen w-screen bg-black rounded-t-[100px] bottom-0 fixed z-30"
          initial={{ height: "140vh" }}
          animate={{ height: "0vh", transition: { delay: 0.5 } }}
        />
        <div className="h-24">
          <Navbar />
        </div>
        <div className="h-[calc(100vh-6rem)]">{children}</div>
      </div>
    </AnimatePresence>
  );
};

export default TransitionProvider;
