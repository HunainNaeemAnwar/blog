import NavHero from "@/components/NavHero";
import BlogContent from "@/components/BlogContent";
import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";

const featured = groq`*[_type == "blog" && isFeatured == true] {...,} | order(_createdAt asc) [0]`;

const post = groq`*[_type == 'blog']{
    ...,
    }[0..3]`;

export default async function Home() {
  const isFeatured = await client.fetch(featured);
  const morePost = await client.fetch(post);
  // Determine the featured post
  return (
    <main className="items-center justify-center flex min-h-screen flex-col mx-auto">
      <NavHero featuredPost={isFeatured} />

      <BlogContent posts={morePost} />
    </main>
  );
}
