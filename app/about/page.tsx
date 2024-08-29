"use client";

import { motion, useInView, useScroll } from "framer-motion";
import { fetchSvg } from "../utils/fetchSvg";
import BrainSvg from "@/components/BrainSvg";
import { useRef } from "react";

const AboutPage = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ container: containerRef });

  const skillRef = useRef<HTMLDivElement>(null);
  const skillRefInView = useInView(skillRef, { margin: "-100px" });

  const experienceRef = useRef<HTMLDivElement>(null);
  const experienceRefInView = useInView(experienceRef, { margin: "-100px" });

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: 0 }}
      transition={{ duration: 1 }}
    >
      {/* CONTAINER */}
      <div className="h-full overflow-scroll lg:flex" ref={containerRef}>
        {/* TEXT CONTAINER */}
        <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 lg:w-2/3 lg:pr-0">
          {/* BIOGRAPHY CONTAINER */}
          <div className="flex flex-col gap-12 justify-center">
            {/* BIOGRAPHY TITLE */}
            <h1 className="text-2xl font-bold">BIOGRAPHY</h1>

            {/* BIOGRAPHY DESC */}
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
              iure possimus voluptatibus nostrum magni similique ipsa
              exercitationem optio inventore ullam ipsum, veniam, suscipit
              laudantium maxime earum excepturi fugiat porro temporibus.
            </p>

            {/* SIGNATURE SVG */}
            <div className="self-end">{fetchSvg("signature-svg")}</div>

            {/* BIOGRAPHY SCROLL SVG */}
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
          </div>

          {/* SKILLS CONTAINER */}
          <div className="flex flex-col gap-12 justify-center" ref={skillRef}>
            {/* SKILL TITLE */}
            <motion.h1
              initial={{ x: "-400px" }}
              animate={skillRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.1 }}
              className="text-2xl font-bold"
            >
              SKILLS
            </motion.h1>

            {/* SKILL LIST */}
            <motion.div
              initial={{ x: "-400px" }}
              animate={skillRefInView ? { x: 0 } : {}}
              className="flex flex-wrap gap-3"
            >
              <div className="p-2 rounded-md bg-black text-white text-sm hover:bg-white hover:text-black hover:font-bold hover:ring-1 hover:ring-black w-fit">
                JavaScript
              </div>
              <div className="p-2 rounded-md bg-black text-white text-sm w-fit hover:bg-white hover:text-black hover:font-bold hover:ring-1 hover:ring-black">
                TypeScript
              </div>
              <div className="p-2 rounded-md bg-black text-white text-sm w-fit hover:bg-white hover:text-black hover:font-bold hover:ring-1 hover:ring-black">
                ReactJs
              </div>
              <div className="p-2 rounded-md bg-black text-white text-sm w-fit hover:bg-white hover:text-black hover:font-bold hover:ring-1 hover:ring-black">
                NextJs
              </div>
              <div className="p-2 rounded-md bg-black text-white text-sm w-fit hover:bg-white hover:text-black hover:font-bold hover:ring-1 hover:ring-black">
                Flutter
              </div>
              <div className="p-2 rounded-md bg-black text-white text-sm w-fit hover:bg-white hover:text-black hover:font-bold hover:ring-1 hover:ring-black">
                Dart
              </div>
              <div className="p-2 rounded-md bg-black text-white text-sm w-fit hover:bg-white hover:text-black hover:font-bold hover:ring-1 hover:ring-black">
                Tailwind CSS
              </div>
              <div className="p-2 rounded-md bg-black text-white text-sm w-fit hover:bg-white hover:text-black hover:font-bold hover:ring-1 hover:ring-black">
                NodeJs
              </div>
              <div className="p-2 rounded-md bg-black text-white text-sm w-fit hover:bg-white hover:text-black hover:font-bold hover:ring-1 hover:ring-black">
                Git
              </div>
              <div className="p-2 rounded-md bg-black text-white text-sm w-fit hover:bg-white hover:text-black hover:font-bold hover:ring-1 hover:ring-black">
                SQL Server
              </div>
            </motion.div>

            {/* SKILL SCROLL SVG */}
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
          </div>

          {/* EXPERIENCE CONTAINER */}
          <div
            className="flex flex-col gap-12 justify-center pb-48"
            ref={experienceRef}
          >
            {/* EXPERIENCE TITLE */}
            <motion.h1
              initial={{ x: "-400px" }}
              animate={experienceRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.1 }}
              className="text-2xl font-bold"
            >
              EXPERIENCES
            </motion.h1>

            {/* EXPERIENCE LIST */}
            <motion.div
              initial={{ x: "-400px" }}
              animate={experienceRefInView ? { x: 0 } : {}}
              className=""
            >
              {/* EXPERIENCE ITEM */}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="flex flex-col gap-4 w-1/3">
                  {/* JOB TITLE */}
                  <h1 className="text-lg font-bold">Frontend Developer</h1>

                  {/* JOB Date */}
                  <p className="text-red-400 text-sm">2020 - Present</p>

                  {/* JOB COMPANY */}
                  <p className="text-sm">Company Name</p>
                </div>

                {/* CENTER */}
                <div className="w-1/6">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>

                {/* RIGHT */}
                <div className="w-1/3"></div>
              </div>

              {/* EXPERIENCE ITEM */}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3"></div>

                {/* CENTER */}
                <div className="w-1/6">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>

                {/* RIGHT */}
                <div className="flex flex-col gap-4 w-1/3">
                  {/* JOB TITLE */}
                  <h1 className="text-lg font-bold">Frontend Developer</h1>

                  {/* JOB Date */}
                  <p className="text-red-400 text-sm">2020 - Present</p>

                  {/* JOB COMPANY */}
                  <p className="text-sm">Company Name</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* SVG CONTAINER */}
        <div className="hidden lg:block w-1/3 xl:w-1/2 sticky top-0 z-30">
          <BrainSvg scrollYProgress={scrollYProgress} />
        </div>
      </div>
    </motion.div>
  );
};

export default AboutPage;
