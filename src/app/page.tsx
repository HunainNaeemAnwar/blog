import NavHero from "@/components/NavHero";
import BlogContent from "@/components/BlogContent";
import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";

export const revalidate = 30;

async function getData() {
  const data = await client.fetch(groq`
    {
      "featured": *[_type == "blog" && isFeatured == true] | order(_createdAt desc) [0], 
      "morePosts": *[_type == "blog" && isFeatured != true] | order(_createdAt desc) [0..3]
    }
  `);
  return data;
}
export default async function Home() {
  const { featured, morePosts } = await getData();
  console.log(morePosts);
  // Determine the featured post

  return (
    <main className="items-center justify-center flex min-h-screen flex-col mx-auto">
      <NavHero featuredPost={featured} />
      <BlogContent posts={morePosts} />
    </main>
  );
}
