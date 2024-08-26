"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Navlink from "./Navlink";
import { motion, stagger } from "framer-motion";

const Navbar = () => {
  const navLinks = [
    { title: "Home", href: "/" },
    { title: "About", href: "/about" },
    { title: "Projects", href: "/projects" },
    { title: "Contact", href: "/contact" },
  ];

  const topBarVariant = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: 45,
      backgroundColor: "rgb(255, 255, 255)",
    },
  };

  const centerBarVariant = {
    closed: {
      opacity: 1,
    },
    opened: {
      opacity: 0,
    },
  };

  const bottomBarVariant = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: -45,
      backgroundColor: "rgb(255, 255, 255)",
    },
  };

  const listVariant = {
    closed: {
      x: "100vw",
    },
    opened: {
      x: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  const listItemVariant = {
    closed: {
      x: "-10px",
      opacity: 0,
    },
    opened: {
      x: 0,
      opacity: 1,
    },
  };

  const [open, setOpen] = useState(false);

  return (
    <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
      {/* NAVLINKS */}
      <div className="hidden md:flex gap-4 w-1/3">
        {navLinks.map((link) => (
          <Navlink title={link.title} href={link.href} key={link.title} />
        ))}
      </div>

      {/* LOGO */}
      <div className="md:hidden lg:flex xl:w-1/3 xl:justify-center">
        <Link
          href="/"
          className="bg-black rounded-md p-1 text-sm font-bold flex justify-center items-center"
        >
          <span className="text-white mr-1">Rubin</span>
          <span className="bg-white rounded w-16 h-8 flex justify-center items-center">
            {" "}
            Baidhya
          </span>
        </Link>
      </div>

      {/* SOCIAL ICONS */}
      <div className="hidden md:flex justify-end gap-4 w-1/3">
        <Link href="#">
          <Image src="/github.png" alt="Github" width={24} height={24} />
        </Link>
        <Link href="#">
          <Image src="/linkedin.png" alt="Github" width={24} height={24} />
        </Link>
        <Link href="#">
          <Image src="/facebook.png" alt="Github" width={24} height={24} />
        </Link>
      </div>

      {/* MENU BUTTONS */}
      <div className="md:hidden">
        {/* HAMBURGER MENU */}
        <button
          className="flex flex-col justify-between z-30 relative w-10 h-8"
          onClick={() => setOpen((prev) => !prev)}
        >
          <motion.div
            variants={topBarVariant}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded origin-left"
          ></motion.div>
          <motion.div
            variants={centerBarVariant}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded"
          ></motion.div>
          <motion.div
            variants={bottomBarVariant}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded origin-left"
          ></motion.div>
        </button>

        {/* MENU LIST */}
        {open && (
          <motion.div
            variants={listVariant}
            initial="closed"
            animate="opened"
            className="absolute w-screen h-screen top-0 left-0 bg-black text-white flex flex-col justify-center items-center gap-8 text-4xl z-20"
          >
            {navLinks.map((link) => (
              <motion.div variants={listItemVariant} key={link.title}>
                <Link href={link.href}>{link.title}</Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
