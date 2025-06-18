"use client";
import { authorPathByName } from "@/lib/wpQueries/users";
import Image from "next/image";
import Link from "next/link";
import parse from "html-react-parser";
import Date from "@/components/blog/date";
import { Skeleton } from "@/components/ui/skeleton";
import { useState } from "react";

interface IPost {
  [key: string]: any;
}
interface ICategory {
  name: string;
  slug: string;
}
const BlogCard = ({ post }: { post: IPost }) => {
  const [imageLoading, setImageLoading] = useState<boolean>(false);
  const [imgSrc, setImgSrc] = useState<string>(
    post?.featuredImage?.sourceUrl || "/default-image.png"
  );

  const imageErrorHandler = () => setImgSrc("/default-image.png");

  return (
    <div className="border-[1px] w-full border-typography-10 rounded-xl p-4 flex flex-col">
      <Link
        href={`/blog/${post?.slug} `}
        className="relative block w-full h-56"
      >
        <Image
          src={imgSrc}
          alt={"blog-image"}
          width={0}
          height={0}
          sizes="100vw"
          className={`block object-cover transition-all duration-300 w-full h-full rounded-xl ${imageLoading ? "opacity-100" : "opacity-0"}`}
          onLoad={() => setImageLoading(true)}
          onError={imageErrorHandler}
        />
        {!imageLoading && (
          <Skeleton className="absolute inset-0 w-full h-full rounded-xl" />
        )}
      </Link>
      <div className="flex flex-wrap items-center gap-2">
        {post?.categories.map((category: ICategory, ind: number) => {
          return (
            <p
              key={ind}
              className="px-2 mt-4 py-1 text-xs font-display rounded-2xl bg-brand-10 text-brand-100 border-[1px] border-brand-100"
            >
              {category?.name}
            </p>
          );
        })}
      </div>
      <Link
        href={`/blog/${post?.slug}`}
        className="block mt-3 text-xl font-medium sm:text-2xl line-clamp-2"
      >
        {post.title}
      </Link>
      {post?.excerpt && (
        <span className="my-4 text-sm sm:my-6 sm:text-base text-typography-50 line-clamp-3 font-display">
          {parse(post.excerpt)}
        </span>
      )}

      <div className="flex items-center mt-auto space-x-2">
        <Image
          src={post?.author?.avatar?.url}
          alt={post?.author?.name}
          width={40}
          height={40}
          className="object-cover rounded-full"
        />
        <div className="flex flex-col">
          <p className="block text-base font-medium font-display text-typography-100">
            {post?.author?.name}
          </p>
          <Date dateString={post?.date} />
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
