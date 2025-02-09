"use client";
import { useState, useEffect } from "react";
import { client } from "@/sanity/lib/client";
import BlogContent from "@/components/BlogContent";
import "@/css/loader.css";
import { motion } from "framer-motion";

async function getData() {
  const data = await client.fetch(`*[_type == "blog"] {
    title,
    longDescription,
    description,
    image,
  } | order(_createdAt asc)`);
  return data;
}

export default function Home() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const blogs = await getData();
        setData(blogs);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (loading) {
    return (
      <main className="container flex h-screen flex-col items-center justify-center">
        <span className="loader text-black dark:text-white "></span>
      </main>
    );
  }

  return (
    <main className=" flex justify-center items-center min-h-screen flex-col mx-auto">
      {" "}
      <div className="mt-20">
        {" "}
        {data && data.length > 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="w-full max-w-full "
          >
            {" "}
            <BlogContent posts={data} />{" "}
          </motion.div>
        ) : (
          <p className="font-poppins tracking-wide text-[18px]">
            No blog posts found.
          </p>
        )}
      </div>
    </main>
  );
}
