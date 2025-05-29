// @ts-nocheck
import React from "react";
import PostCard from "./post-card";

interface Post {
  // Define the shape of your post object based on your data structure
  id: string;
  title: string;
  excerpt?: string;
  date?: string;
  slug: string;
  featuredImage?: {
    node: {
      sourceUrl: string;
      altText?: string;
    };
  };
  // Add other post properties as needed
}

interface PostGridProps {
  posts: Post[];
  // Include any additional props that might be passed through ...rest
  className?: string;
  [key: string]: any; // For other unspecified props
}

const PostGrid: React.FC<PostGridProps> = (props) => {
  const { posts, ...rest } = props;

  return (
    <div
      className="grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
      {...rest}
    >
      {posts.map((post) => (
        <PostCard post={post} key={post.slug} />
      ))}
    </div>
  );
};

export default PostGrid;
