import NavHero from "@/components/NavHero";
import BlogContent from "@/components/BlogContent";
import { client } from "@/sanity/lib/client";

async function getData() {
  const data = await client.fetch(`*[_type == "blog"] {
    _id,
    title,
    description,
    slug,
    image,
    isFeatured
  }`);
  return data;
}
type Post = {
  _id: string;
  title: string;
  description: string;
  slug: string;
  image: string;
  isFeatured: boolean;
};
export default async function Home() {
  const data = await getData();

  // Determine the featured post
  const featuredPost = data.find((post: Post) => post.isFeatured) || data[0];
  return (
    <main className="items-center justify-center flex min-h-screen flex-col mx-auto">
      <NavHero featuredPost={featuredPost} />
      <BlogContent posts={data} />
    </main>
  );
}
