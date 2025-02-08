"use client";
import Image from "next/image";
import "../css/vignette.css";
import "../css/loader.css";
import { client } from "@/sanity/lib/client";
import { useState, useEffect } from "react";

export const revalidate = 30;
async function getData() {
  const Data = await client.fetch(`*[_type == "about"] {
    heading,
    aboutme,
    "imageUrl": image.asset->url
  }`);
  return Data;
}

const About = () => {
  const [isLoading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getData();
      if (result.length > 0) {
        setData(result[0]); // Access first item from the array
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  if (isLoading)
    return (
      <main className="container flex h-screen flex-col items-center justify-center">
        <span className="loader text-black dark:text-white"></span>
      </main>
    );

  return (
    <div className="relative h-[900px] mt-[95px] lg:mt-[118px] text-white">
      {/* Hero Image */}
      <div className="absolute block w-full h-full vignette bg-black/30 z-40">
        <Image
          src={data?.imageUrl || "/default-image.jpg"} // Use valid default image
          alt="About Me"
          width={1000}
          height={1000}
          className="w-full h-full object-cover z-10"
        />
      </div>
      <div className="absolute left-10 top-[190px] flex flex-col gap-4 w-[280px] md:w-[500px] lg:w-[800px] text-shadow-sm z-50">
        <h2 className="font-oswald font-bold text-shadow-md lg:text-shadow-lg lg:text-[64px] text-[50px] uppercase tracking-tight">
          {data?.heading || "Default Heading"}
        </h2>
        <p className="text-[16px] lg:text-[18px] font-poppins font-medium text-shadow-md">
          {data?.aboutme || "Default About Me"}
        </p>
      </div>
    </div>
  );
};

export default About;
