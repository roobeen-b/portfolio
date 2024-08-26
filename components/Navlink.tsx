"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Navlink = ({ title, href }: LinkProps) => {
  const pathName = usePathname();

  return (
    <Link
      href={href}
      className={`p-1 rounded ${
        pathName === href ? "bg-black text-white" : ""
      }`}
    >
      {title}
    </Link>
  );
};

export default Navlink;
