"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import SearchBar from "./SearchBar";
import { HiDocumentText, HiHome } from "react-icons/hi";
import { BsPersonFill } from "react-icons/bs";
const navLinks = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Blogs",
    href: "/blogs",
  },
  {
    name: "About",
    href: "/about",
  },
];
const NavBar = () => {
  const pathname = usePathname();
  if (pathname === "/" || pathname.includes("/studio")) {
    return null;
  }
  return (
    <nav className="navbar absolute left-0 top-0 w-full flex items-center border-b justify-between px-5 md:px-10 py-6 md:py-8 font-poppins text-[16px] lg:text-[18px]">
      <div className="md:flex items-center justify-center gap-10 hidden">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className="relative group overflow-hidden"
          >
            {link.name}
            <span className="bg-white w-full absolute bottom-0 left-0 inline-block h-[2px] -translate-x-[105%] group-hover:translate-x-0 transition-transform duration-500"></span>
          </Link>
        ))}
      </div>
      {/* mobile navbar */}
      <div className="flex items-center justify-center gap-10 md:hidden">
        <Link href={"/"} className="relative group overflow-hidden py-3">
          <HiHome className="w-5 h-5" />
          <span className="bg-white w-full absolute bottom-0 left-0 inline-block h-[2px] -translate-x-[105%] group-hover:translate-x-0 transition-transform duration-500"></span>
        </Link>
        <Link href={"/blogs"} className="relative group overflow-hidden py-3">
          <HiDocumentText className="w-5 h-5" />
          <span className="bg-white w-full absolute bottom-0 left-0 inline-block h-[2px] -translate-x-[105%] group-hover:translate-x-0 transition-transform duration-500"></span>
        </Link>
        <Link href={"/about"} className="relative group overflow-hidden py-3">
          <BsPersonFill className="w-5 h-5" />
          <span className="bg-white w-full  absolute bottom-0 left-0 inline-block h-[2px] -translate-x-[105%] group-hover:translate-x-0 transition-transform duration-500"></span>
        </Link>
      </div>
      <div className="flex items-center gap-4">
        {pathname === "/blogs" && <SearchBar />}
        <button className="hover:border border-white py-1 px-2 rounded-md">
          Log in
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
