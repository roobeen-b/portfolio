"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const Homepage = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="flex flex-col lg:flex-row h-full px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* IMAGE CONTAINER */}
        <div className="relative h-1/2 lg:h-full lg:w-1/2">
          <Image
            src="/hero.png"
            alt="Hero Image"
            className="object-contain"
            fill
          />
        </div>
        {/* TEXT CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col items-start justify-center">
          {/* TITLE */}
          <div>
            <h1 className="font-bold text-4xl sm:text-6xl my-4">
              Hello! I'm Rubin Baidhya.
            </h1>
          </div>
          {/* DESCRIPTION */}
          <p className="text-bold">
            I am a frontend developer with a passion for design and development.
            I specialize in creating beautiful and functional websites and
            applications.
          </p>
          {/* BUTTONS */}
          <div className="flex gap-2 mt-4">
            <button className="bg-black text-white p-2 rounded">
              <Link href="/projects">View My Works</Link>
            </button>
            <button className="bg-white text-black p-2 rounded ring-1 ring-black">
              <Link href="/contact">Contact Me</Link>
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;
