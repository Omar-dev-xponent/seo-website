// @ts-nocheck

import Loading from "@/app/blog/loading";
import React, { Suspense } from "react";
import BlogCategories from "./blog-categories";
import CategoryHero from "./catgory-hero";
import Pagination from "./pagination";
import PostGrid from "./post-grid";

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
  return (
    <div>
      <div>
        <CategoryHero title={category} />
        <div className="relative bg-theme-gray pt-16 pb-20 lg:pt-16 lg:pb-16">
          <div className="relative max-w-7xl mx-auto px-4 lg:px-12">
            <Suspense fallback={<Loading />}>
              <PostGrid posts={posts} />
            </Suspense>
          </div>
        </div>
        {pagesCount > 1 && (
          <Pagination basePath={basePath} pagesCount={pagesCount} />
        )}
      </div>
      <div>
        <div className="max-w-7xl mx-auto px-4 lg:px-12 py-20">
          <div className="text-center mb-8">
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

export default BlogArchive;
