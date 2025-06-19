"use client";
import Image from "next/image";
import { sanitizeExcerpt } from "@/lib/wpQueries/posts";
import Link from "next/link";
import { useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";

interface Post {
  [key: string]: any;
}
interface ICategory {
  name: string;
  slug: string;
}
const LatestBlogCard = ({ post }: { post: Post }) => {
  const [imageLoading, setImageLoading] = useState<boolean>(false);
  const [imgSrc, setImgSrc] = useState<string>(
    post?.featuredImage?.sourceUrl || "/default-image.png"
  );

  const imageErrorHandler = () => setImgSrc("/default-image.png");

  return (
    <div className="app-container">
      <h3 className="mb-4 text-2xl font-semibold text-center sm:mb-6 sm:text-4xl font-display text-typography-100">
        Our Super Blog
      </h3>
      <p className="text-base text-center font-display text-typography-50">
        Quickly discover the best domains tailored to your keywords.
      </p>
      <Link
        href={`/blog/${post?.slug}`}
        className="relative block w-full h-full overflow-hidden mt-7 sm:mt-12 rounded-2xl"
      >
        <Image
          src={imgSrc}
          alt="blog-image"
          width={0}
          height={0}
          sizes="100vw"
          className={`object-cover w-full h-full rounded-2xl ${imageLoading ? "opacity-100" : "opacity-0"}`}
          onLoad={() => setImageLoading(true)}
          onError={imageErrorHandler}
        />
        {!imageLoading && (
          <Skeleton className="absolute inset-0 w-full h-full rounded-xl" />
        )}
      </Link>
      <Link
        href={`/blog/${post?.slug}`}
        className="block mt-5 text-xl font-medium sm:text-2xl text-typography-100 font-display"
      >
        {post?.title}
      </Link>
      {post?.excerpt && (
        <span
          className="block my-4 text-sm sm:text-base sm:my-6 font-display text-typography-50"
          dangerouslySetInnerHTML={{
            __html: sanitizeExcerpt(post.excerpt),
          }}
        />
      )}

      <div className="flex flex-wrap items-center gap-2">
        {post?.categories.map((category: ICategory, ind: number) => {
          return (
            <p
              key={ind}
              className="px-3 py-1 text-sm font-display rounded-2xl bg-brand-10 text-brand-100 border-[1px] border-brand-100"
            >
              {category?.name}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default LatestBlogCard;
