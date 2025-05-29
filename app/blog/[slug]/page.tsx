// @ts-nocheck

import BlogSingle from "@/components/blog/blog-single";
import { getPostAndMorePosts } from "@/lib/wpQueries/posts";
import { Suspense } from "react";
import Error from "../error";
import Loading from "../loading";
import { Metadata } from "next";

// Define types for your data structures
interface PostSEO {
  title: string;
  metaDesc: string;
}

interface Post {
  seo: PostSEO;
  // Add other post properties as needed
}

interface PostData {
  post: Post;
  posts: Post[];
  // Add other data properties if they exist
}

interface PageParams {
  slug: string;
}

interface PageProps {
  params: PageParams;
  preview?: boolean;
  previewData?: any; // Replace with specific type if you know the preview data structure
}

export async function generateMetadata({
  params,
  preview = false,
  previewData,
}: PageProps): Promise<Metadata> {
  const data = await getPostAndMorePosts(params.slug, preview, previewData);

  return {
    title: data.post.seo.title,
    description: data.post.seo.metaDesc,
  };
}

export default async function Page({
  params,
  preview = false,
  previewData,
}: PageProps): Promise<JSX.Element> {
  const data = await getPostAndMorePosts(params.slug, preview, previewData);

  return (
    <div>
      <Suspense fallback={<Loading />}>
        <BlogSingle post={data} posts={data.posts} fallback={<Error />} />
      </Suspense>
    </div>
  );
}
