"use client";
import { useState, useEffect } from "react";
import { client } from "@/sanity/lib/client";
import BlogContent from "@/components/BlogContent";
import "@/css/loader.css";

async function getData() {
  const data = await client.fetch(`*[_type == "blog"] {
    title,
    longDescription,
    description,
    image,
  }`);
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
        <span className="loader"></span>
      </main>
    );
  }

  return (
    <main className=" flex justify-center items-center min-h-screen flex-col mx-auto">
      <div className="mt-20">
        {data && data.length > 0 ? (
          <BlogContent posts={data} />
        ) : (
          <p className="font-poppins tracking-wide text-[18px]">
            No blog posts found.
          </p>
        )}
      </div>
    </main>
  );
}
