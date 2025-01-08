"use client";

import { useSearch } from "@/context/SearchContext";
import Link from "next/link";
import Image from "next/image";
import { Post } from "@/sanity/types";
import { urlFor } from "@/sanity/lib/image";
export const revalidate = 30;

interface Props {
  posts: Post[];
}
const BlogContent: React.FC<Props> = () => {
  const { posts } = useSearch();
  return (
    <section className="py-20 flex flex-col gap-20 items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 lg:gap-3 px-10 place-content-start">
        {posts.map((post) => (
          <Link
            href={{
              pathname: `/blog/${post?.slug?.current}`,
              query: { slug: post?.slug.current },
            }}
            key={post._id}
          >
            <div className="relative flex flex-col  bg-gray-800 shadow-md pb-8 md:py-0 md:h-[600px] lg:h-[620px] rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
              {/* Image Section */}
              <div className="group relative overflow-hidden h-52">
                {post.image && (
                  <Image
                    src={urlFor(post.image).url()}
                    width={300}
                    height={200}
                    alt={post.title}
                    className="object-cover w-full h-full transform transition-transform duration-500 ease-in-out group-hover:scale-110"
                  />
                )}
              </div>

              {/* Text Section */}
              <div className="p-4 flex flex-col gap-2">
                <h3 className="text-lg font-semibold text-gray-100 hover:opacity-70 transition-all duration-100 ease-in-out">
                  {post.title}
                </h3>
                <p className="text-sm text-gray-400 hover:text-gray-600 transition-all duration-300 ease-in-out">
                  {post.description}
                </p>
              </div>
              <div className="absolute bottom-4 left-4">
                <p className="text-xs text-gray-600 mt-1">
                  {new Date(post._createdAt).toLocaleDateString("en-US", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default BlogContent;
