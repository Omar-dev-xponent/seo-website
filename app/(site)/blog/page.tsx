// @ts-nocheck
import BlogHome from "@/components/blog/blog-home";
import { getCategories } from "@/lib/wpQueries/categories";
import { getAllPostsForHome } from "@/lib/wpQueries/posts";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog - Outreachful",
  description:
    "Read the industry's latest thoughts on starting and growing a successful online business, content strategy, link building, SEO, PPC, social media and more.",
};

async function getAllPosts(): Promise<any> {
  const posts = await getAllPostsForHome(false);
  return posts;
}

export default async function Page(): Promise<JSX.Element> {
  const posts = await getAllPosts();
  const categories = await getCategories();

  const allPosts = posts.posts;

  return (
    <main>
      <BlogHome posts={allPosts} categories={categories} />
    </main>
  );
}
