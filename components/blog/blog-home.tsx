// @ts-nocheck

import React, { Suspense } from "react";
import Loading from "@/app/blog-prev/loading";
import BlogCategories from "./blog-categories";
import Hero from "./hero";
import PostGrid from "./post-grid";

interface BlogHero {
  title: string;
  description: string;
}

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

const blogHero: BlogHero = {
  title: "Blog",
  description: `Read the industry's latest thoughts on starting and growing a successful online business, content strategy, link building, SEO, PPC, social media and more.`,
};

const BlogHome: React.FC<BlogHomeProps> = ({ posts, categories }) => {
  const { title, description } = blogHero;

  return (
    <div>
      <Hero title={title} description={description} />
      <div className="relative pt-16 pb-20 bg-theme-gray lg:pt-16">
        <div className="relative px-4 mx-auto max-w-7xl lg:px-12">
          <div className="mb-8 text-center">
            <h2 className="text-2xl font-medium tracking-tight text-slate-900 sm:text-3xl">
              Recent Posts
            </h2>
          </div>
          <Suspense fallback={<Loading />}>
            <PostGrid posts={posts} />
          </Suspense>
        </div>
      </div>
      <div className="">
        <div className="px-4 pb-20 mx-auto max-w-7xl lg:px-12">
          <div className="mb-8 text-center">
            <h2 className="text-2xl font-medium tracking-tight text-slate-900 sm:text-3xl">
              Browse Categories
            </h2>
          </div>
          <Suspense fallback={<Loading />}>
            <BlogCategories categories={categories} />
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default BlogHome;
