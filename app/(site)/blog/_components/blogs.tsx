import React from "react";
import LatestBlogCard from "@/app/(site)/blog/_components/latest-blog-card";
import BlogSideBar from "@/app/(site)/blog/_components/blog-sidebar";
import BlogCard from "@/app/(site)/blog/_components/blog-card";
import BlogPagination from "@/app/(site)/blog/_components/blog-pagination";
import BlueCircleSVG from "@/components/svg-defs/BlueCircleSVG";

const Blogs = () => {
  const blogs = [
    {
      id: 1,
      title: "The Complete Guide to Link-Building for SEO Success",
      summary:
        "A link-building SEO SaaS is a software tool designed to help businesses improve their search engine rankings by simplifying the process of building high-quality backlinks.",
      duration: "5 mins read",
      image: "/blog/blog02.png",
      author: {
        name: "John Doe",
        avatar: "/customer01.png",
      },
      createdAt: "Jan 25, 2024",
    },
    {
      id: 2,
      title: "The Dos and Don’ts of Link-Building in 2025",
      summary:
        "A link-building SEO SaaS is a software tool designed to help businesses improve their search engine rankings by simplifying the process of building high-quality backlinks.",
      duration: "5 mins read",
      image: "/blog/blog03.png",
      author: {
        name: "John Doe",
        avatar: "/customer01.png",
      },
      createdAt: "Jan 25, 2024",
    },
    {
      id: 3,
      title: "The Ultimate Checklist for Link-Building Success",
      summary:
        "A link-building SEO SaaS is a software tool designed to help businesses improve their search engine rankings by simplifying the process of building high-quality backlinks.",
      duration: "5 mins read",
      image: "/blog/blog04.png",
      author: {
        name: "John Doe",
        avatar: "/customer01.png",
      },
      createdAt: "Jan 25, 2024",
    },
    {
      id: 3,
      title: "How to Build Backlinks Without Breaking Google’s",
      summary:
        "A link-building SEO SaaS is a software tool designed to help businesses improve their search engine rankings by simplifying the process of building high-quality backlinks.",
      duration: "5 mins read",
      image: "/blog/blog05.png",
      author: {
        name: "John Doe",
        avatar: "/customer01.png",
      },
      createdAt: "Jan 25, 2024",
    },
  ];
  return (
    <section className="relative z-10 py-8 overflow-x-hidden md:py-24 sm:py-12">
      <LatestBlogCard />
      <div className="flex flex-col pt-8 pb-5 space-y-4 sm:pb-8 sm:pt-12 md:space-y-0 md:space-x-16 md:flex-row app-container">
        <BlogSideBar />
        <div className="w-full">
          <div className="grid w-full grid-cols-1 gap-7 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2">
            {blogs.map((blog, ind) => {
              return <BlogCard key={ind} blog={blog} />;
            })}
          </div>
          <BlogPagination />
        </div>
      </div>
      <div className="-z-10 absolute top-[550px] md:top-[1400px] right-0 md:left-0 md:scale-x-[1] scale-x-[-1]  pointer-events-none">
        <BlueCircleSVG className="w-full h-full sm:max-w-[577px] sm:h-[741px]" />
      </div>
    </section>
  );
};

export default Blogs;
