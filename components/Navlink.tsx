"use client";

import { useTheme } from "next-themes";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navlink = ({ title, href }: LinkProps) => {
  const pathName = usePathname();
  const { theme } = useTheme();

  return (
    <Link
      href={href}
      className={`p-1 rounded ${
        pathName === href
          ? `${
              theme === "light" ? " bg-black text-white" : "bg-white text-black"
            }`
          : ""
      }`}
    >
      {title}
    </Link>
  );
};

export default Navlink;
