// @ts-nocheck
import React from "react";
import Avatar from "@/components/blog/avatar";
import Date from "@/components/blog/date";
import MetaCategories from "@/components/blog/meta-categories";
import { sanitizeExcerpt } from "@/lib/wpQueries/posts";
import { authorPathByName } from "@/lib/wpQueries/users";
import Image from "next/image";
import Link from "next/link";

interface Author {
  node?: {
    name: string;
    avatar?: {
      url: string;
    };
  };
  name?: string;
  avatar?: {
    url: string;
  };
}

interface Category {
  name: string;
  slug: string;
}

interface FeaturedImage {
  sourceUrl: string;
  altText?: string;
}

interface Post {
  title: string;
  excerpt: string;
  slug: string;
  date: string;
  featuredImage?: FeaturedImage;
  categories?: {
    nodes?: Category[];
    edges?: Array<{ node: Category }>;
  };
  author: Author;
}

interface PostCardProps {
  post: Post;
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  const { title, excerpt, slug, date, featuredImage, categories, author } =
    post;

  const authorName = author?.node?.name ?? author?.name ?? "Unknown Author";
  const authorAvatar = author?.node?.avatar ?? author?.avatar;

  return (
    <div className="flex flex-col overflow-hidden rounded-lg shadow-lg">
      {featuredImage?.sourceUrl && (
        <div className="flex-shrink-0">
          <Image
            src={featuredImage.sourceUrl}
            alt={title}
            className="w-full h-[auto] object-cover rounded-2xl"
            width={400}
            height={300}
            sizes="100vw"
            priority
          />
        </div>
      )}
      <div className="flex flex-col justify-between flex-1 p-6 bg-white">
        <div className="flex-1">
          {categories && (
            <div className="flex gap-4 text-base">
              <MetaCategories categories={categories} />
            </div>
          )}
          <Link href={`/blog/${slug}`} className="block mt-2">
            <p className="text-xl font-bold capitalize text-slate-900">
              {title}
            </p>
            {excerpt && (
              <span
                className="mt-3 text-base font-normal text-paragraph"
                dangerouslySetInnerHTML={{
                  __html: sanitizeExcerpt(excerpt),
                }}
              />
            )}
          </Link>
        </div>
        <div className="flex items-center mt-6">
          <div className="flex-shrink-0">
            <Link href={authorPathByName(authorName)}>
              <span className="sr-only">{authorName}</span>
              {authorAvatar && <Avatar author={author} />}
            </Link>
          </div>
          <div className="flex flex-col ml-3">
            <p className="text-sm font-normal text-slate-900">
              By&nbsp;
              <span className="font-semibold">{authorName}</span>
            </p>
            <div className="text-sm font-normal">
              <Date dateString={date} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
