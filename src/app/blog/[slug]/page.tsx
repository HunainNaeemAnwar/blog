import React from "react";
import { client } from "@/sanity/lib/client";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { Post } from "@/sanity/types";
export const revalidate = 30;

export const generateStaticParams = async () => {
  const query = `*[_type == 'blog']{
        slug
    }`;
  const slugs: Post[] = await client.fetch(query);
  const slugRoutes = slugs.map((slug) => slug?.slug?.current);
  return slugRoutes?.map((slug) => ({
    slug,
  }));
};

const SlugPage = async ({ params }: any) => {
  try {
    // If `params` is async, you can handle it like this
    const { slug } = await params;

    // Sanity query
    const query = `*[_type == 'blog' && slug.current == $slug][0]{
      title,
      image,
      summary,
      longDescription,
    }`;

    // Fetch the post from Sanity
    const post: Post = await client.fetch(query, { slug });

    if (!post) {
      return <div>Post not found</div>;
    }

    return (
      <div className="post flex flex-col items-center justify-center gap-10 mt-48 pb-20 relative ">
        <div className=" mb-20 border-2 border-black px-6 py-2 dark:border-2 dark:border-white ">
          <h1 className="tracking-tight font-sans font-semibold uppercase text-[35px] md:text-[64px]">
            {post.title}
          </h1>
        </div>

        {post.image ? (
          <Image
            src={urlFor(post.image).url()}
            alt={post.title}
            width={800}
            height={500}
            className="border-2 border-black dark:border dark:border-white"
          />
        ) : (
          <div className="w-full h-[500px] bg-gray-200 flex items-center justify-center">
            <span>No Image Available</span>
          </div>
        )}
        <div className="relative bg-slate-500 w-full px-28 md:px-12 lg:px-20 mb-10">
          <div className="absolute flex justify-start item-start">
            <div className="flex flex-row gap-6 items-center">
              <div className="w-5 h-10 bg-white rounded-sm"></div>
              <div>
                <h2 className="font-poppins text-[30px] md:text-[40px]">
                  Blog
                </h2>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-10">
          <div className="px-6 lg:px-20  text-[20px] font-poppins leading-[40px]">
            {post.longDescription}
          </div>
          <div className="flex flex-row gap-6 items-center">
            <div className="w-5 h-10 relative left-12 md:left-12 lg:left-20 bg-white rounded-sm"></div>
            <div>
              <h2 className="font-poppins text-[30px] md:text-[40px] relative left-12 md:left-12 lg:left-20">
                Summary
              </h2>
            </div>
          </div>
          <div className="px-6 lg:px-20  text-[20px] font-poppins leading-[40px]">
            {post.summary}
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error("Error fetching post:", error);
    return <div>Something went wrong while loading the post.</div>;
  }
};

export default SlugPage;
