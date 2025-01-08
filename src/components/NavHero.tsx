import React from "react";
import Image from "next/image";
import Link from "next/link";
import "../css/vignette.css";
import { BsArrowRight } from "react-icons/bs";
import { HiDocumentText, HiHome } from "react-icons/hi";
import { BsPersonFill } from "react-icons/bs";
import SearchBar from "./SearchBar";
import { client } from "@/sanity/lib/client";
export const revalidate = 30;

interface props {
  featuredPost: {
    _id: string;
    title: string;
    description: string;
    slug: { current: string };
    image: {
      asset: {
        url: string;
      };
    };
    isFeatured: boolean;
  };
}
const navLinks = [
  { name: "Home", href: "/" },
  { name: "Blogs", href: "/blogs" },
  { name: "About", href: "/about" },
];
async function getData() {
  const data = await client.fetch(`*[_type == "featuredHeroImage"] {
   heading,
  "imageUrl":image.asset->url 
}`);
  return data;
}

const Navbar = async ({ featuredPost }: props) => {
  const data = await getData();
  return (
    <div className="relative h-[900px]">
      {/* Hero Image */}
      <div className="absolute vignette block w-full h-full">
        <Image
          src={data[0].imageUrl || "normal"}
          alt="heroPic"
          width={1000}
          height={1000}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Navigation Bar */}
      <nav className="navbar absolute left-0 top-0 w-full flex items-center justify-between px-7 md:px-10 py-3 lg:py-6 xl:py-8 font-poppins text-[16px] lg:text-[18px]">
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
          <SearchBar />
          <button className="hover:border border-white py-1 px-2 rounded-md">
            Log in
          </button>
        </div>
      </nav>

      {/* Hero Text */}
      <div className="absolute left-10 top-[350px]  flex flex-col gap-4 w-[280px] md:w-[500px] lg:w-[600px] text-shadow-sm">
        <p className="font-poppins font-medium text-[22px] lg:text-[24px] text-shadow-md">
          Most Popular
        </p>
        <h2 className="font-oswald font-bold text-shadow-md lg:text-shadow-lg lg:text-[64px] text-[50px] uppercase tracking-tight">
          {featuredPost.title}
        </h2>
        <p className="text-[16px] lg:text-[18px] font-poppins font-normal text-shadow-md">
          {featuredPost?.description || "Description is not available"}
        </p>
        {featuredPost?.slug?.current ? (
          <Link
            href={`/blog/${featuredPost.slug.current}`}
            className="mt-4 w-max"
          >
            <div className="flex items-center justify-start gap-2 hover:border border-[#a6a3a3] rounded-md px-3 py-1">
              Read More
              <BsArrowRight className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
            </div>
          </Link>
        ) : (
          <div className="text-gray-400">No featured blog available</div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
