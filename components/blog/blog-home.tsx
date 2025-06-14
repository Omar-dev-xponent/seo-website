// @ts-nocheck
"use client";
import React, { useState, useEffect } from "react";
import BlogCategories from "./blog-categories";
import PostGrid from "./post-grid";
import Hero from "@/components/blog/blog-hero";
import LatestBlogCard from "@/components/blog/latest-blog-card";
import BlueCircleSVG from "@/components/svg-defs/BlueCircleSVG";
import BlogSideBar from "@/components/blog/blog-sidebar";
import BlogCard from "@/components/blog/blog-card";
import { useInView } from "react-intersection-observer";

interface Post {
  // Add specific post properties as needed
  [key: string]: any;
}

interface Category {
  // Add specific category properties as needed
  [key: string]: any;
}

interface BlogHomeProps {
  posts: Post[];
  categories: Category[];
}

const BlogHome: React.FC<BlogHomeProps> = ({ posts, categories }) => {
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
      <Hero />
      <section className="relative z-10 py-8 overflow-x-hidden overflow-y-hidden md:py-24 sm:py-12">
        <LatestBlogCard post={posts[0]} />
        <div
          ref={topRef}
          className="flex flex-col w-full pt-8 pb-5 space-y-4 sm:pb-8 sm:pt-12 md:space-y-0 md:space-x-16 md:flex-row h-max app-container"
        >
          <BlogSideBar
            categories={categories}
            isSidebarFixed={isSidebarFixed}
          />
          <div className={`flex-1 ${isSidebarFixed ? "md:pl-64" : "md:pl-0"}`}>
            <div className="grid w-full grid-cols-1 gap-7 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2">
              {posts.map((post, ind) => {
                return <BlogCard key={ind} post={post} />;
              })}
            </div>
          </div>
        </div>
        <div ref={bottomRef}></div>
        <div className="-z-10 absolute top-[550px] md:top-[1400px] right-0 md:left-0 md:scale-x-[1] scale-x-[-1] pointer-events-none">
          <BlueCircleSVG className="w-full h-full sm:max-w-[577px] sm:h-[741px]" />
        </div>
      </section>
      {/* <BlogPagination /> */}
      {/* <div className="relative pt-16 pb-20 bg-theme-gray lg:pt-16">
        <div className="relative px-4 mx-auto max-w-7xl lg:px-12">
          <div className="mb-8 text-center">
            <h2 className="text-2xl font-medium tracking-tight text-slate-900 sm:text-3xl">
              Recent Posts
            </h2>
          </div>

          <PostGrid posts={posts} />
        </div>
      </div>
      <div className="">
        <div className="px-4 pb-20 mx-auto max-w-7xl lg:px-12">
          <div className="mb-8 text-center">
            <h2 className="text-2xl font-medium tracking-tight text-slate-900 sm:text-3xl">
              Browse Categories
            </h2>
          </div>

          <BlogCategories categories={categories} />
        </div>
      </div> */}
    </div>
  );
};

export default BlogHome;
