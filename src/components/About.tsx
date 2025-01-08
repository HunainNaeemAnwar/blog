"use client";
import Image from "next/image";
import "../css/vignette.css";
export const revalidate = 30;
interface AboutProps {
  data: {
    heading: string;
    aboutme: string;
    imageUrl: string;
  };
}

const About = ({ data }: AboutProps) => {
  return (
    <div className="relative h-[900px] mt-[116px] lg:mt-[118px]">
      {/* Hero Image */}
      <div className="absolute block w-full h-full vignette bg-black/30 z-40">
        <Image
          src={data.imageUrl}
          alt="About Me"
          width={1000}
          height={1000}
          className="w-full h-full object-cover z-10"
        />
      </div>
      <div className="absolute left-10 top-[190px] flex flex-col gap-4 w-[280px] md:w-[500px] lg:w-[800px] text-shadow-sm z-50">
        <h2 className="font-oswald font-bold text-shadow-md lg:text-shadow-lg lg:text-[64px] text-[50px] uppercase tracking-tight">
          {data.heading}
        </h2>
        <p className="text-[16px]  lg:text-[18px] font-poppins font-normal text-shadow-md">
          {data.aboutme}
        </p>
      </div>
    </div>
  );
};

export default About;
