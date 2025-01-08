"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
const Footer = () => {
  const pathname = usePathname();
  if (pathname.includes("/studio")) {
    return null;
  }
  return (
    <footer className=" bg-black md:bg-gradient-to-r  from-gray-500 via-black/50 to-black border-t text-white py-10 px-2 md:px-0">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* anime world */}
          <div>
            <h3 className="text-2xl font-poppins font-semibold mb-4">
              Anime World
            </h3>
            <p className=" font-poppins text-[16px] lg:text-[18px]">
              Anime World is your go-to spot for reviews, news, and everything
              anime! Join us as we dive into the latest series, characters, and
              fan discussions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-2xl font-poppins font-semibold mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2 font-poppins text-[16px] lg:text-[18px]">
              <li>
                <Link
                  href={"/"}
                  className="hover:text-gray-500 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href={"/"}
                  className="hover:text-gray-500 transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href={"/"}
                  className="hover:text-gray-500 transition-colors"
                >
                  Reviews
                </Link>
              </li>
              <li>
                <Link
                  href={"/"}
                  className="hover:text-gray-500 transition-colors"
                >
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* stay updated */}
          <div>
            <h3 className="text-2xl font-poppins font-semibold mb-4">
              Stay Updated
            </h3>
            <p className=" mb-4 font-poppins text-[16px] lg:text-[18px] ">
              Subscribe to our newsletter for the latest anime reviews, news,
              and more!
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-2 py-2 w-full rounded-l-md text-[16px] font-poppins border-none  "
              />
              <button
                type="submit"
                className="xl:px-6 xl:py-2 px-6 py-2 font-poppins text-[16px]  bg-gray-800 text-white rounded-r-md hover:bg-gray-600 transition-colors md:text-[16px] md:px-2 md:py-1"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* coppyright */}
        <div className="text-center mt-16 border-t h-4">
          <p className="font-poppins text-[16px] lg:text-[18px] opacity-75 pt-4 ">
            &copy; 2025 Anime World. All rights reserved. | Designed by Hunain
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
