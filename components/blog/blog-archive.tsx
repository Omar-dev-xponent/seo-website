// @ts-nocheck
"use client";
import Loading from "@/app/blog/loading";
import React, { Suspense, useState, useEffect } from "react";
import BlogCategories from "./blog-categories";
import CategoryHero from "./catgory-hero";
import Pagination from "./pagination";
import PostGrid from "./post-grid";
import BlogSideBar from "./blog-sidebar";
import BlogCard from "./blog-card";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

interface Post {
  // Add specific post properties as needed
  [key: string]: any;
}

interface Category {
  // Add specific category properties as needed
  [key: string]: any;
}

interface Categories {
  categories: Category[];
}

interface BlogArchiveProps {
  posts: Post[];
  category: string;
  categories: Categories;
  basePath: string;
  pagesCount: number;
}

const BlogArchive: React.FC<BlogArchiveProps> = ({
  posts,
  category,
  categories,
  basePath,
  pagesCount,
}) => {
  const { ref: topRef, inView: topInView } = useInView({
    threshold: 0,
    rootMargin: "0px 0px -93% 0px",
  });

  const { ref: bottomRef, inView: bottomInView } = useInView({
    threshold: 0,
    rootMargin: "0px",
  });

  const [isSidebarFixed, setIsSidebarFixed] = useState(false);

  useEffect(() => {
    setIsSidebarFixed(topInView && !bottomInView);
  }, [topInView, bottomInView]);
  return (
    <div>
      <CategoryHero title={category} />
      <div
        ref={topRef}
        className="flex flex-col w-full pt-8 pb-5 space-y-4 sm:pb-8 sm:pt-12 md:space-y-0 md:space-x-16 md:flex-row h-max app-container"
      >
        <BlogSideBar categories={categories} isSidebarFixed={isSidebarFixed} />
        <div className={`flex-1 ${isSidebarFixed ? "md:pl-64" : "md:pl-0"}`}>
          {posts.length > 0 ? (
            <div className="grid w-full grid-cols-1 gap-7 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2">
              {posts.map((post, ind) => {
                return <BlogCard key={ind} post={post} />;
              })}
            </div>
          ) : (
            <div className="p-10 border-[2px] border-dashed border-typography-10 rounded-xl">
              <div className="flex flex-col items-center justify-center gap-y-2">
                <Image
                  src={"/not-found.png"}
                  alt="not-found"
                  width={400}
                  height={400}
                />
                <p className="text-lg font-display text-typography-50">
                  Blog not found
                </p>
              </div>
            </div>
          )}
          {pagesCount > 1 && (
            <Pagination basePath={basePath} pagesCount={pagesCount} />
          )}
        </div>
      </div>
      <div ref={bottomRef}></div>
    </div>
  );
};

export default BlogArchive;
