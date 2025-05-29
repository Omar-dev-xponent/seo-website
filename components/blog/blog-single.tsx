// @ts-nocheck
import React from "react";
import AuthorBox from "./author-box";
import Content from "./content";
import PostTitle from "./post-title";
import PostMetaAfter from "./postmeta-after";
import PostMetaBefore from "./postmeta-before";
import RelatedPosts from "./related-posts";
import Sidebar from "./sidebar";
import SocialIcons from "./social-icons";

interface Author {
  node: {
    // Add specific author properties as needed
    [key: string]: any;
  };
}

interface Category {
  // Add specific category properties as needed
  [key: string]: any;
}

interface PostData {
  title: string;
  slug: string;
  content: string;
  date: string;
  categories: Category[];
  author: Author;
}

interface Post {
  post: PostData;
}

interface PostNode {
  // Add specific post node properties as needed
  [key: string]: any;
}

interface PostEdge {
  node: PostNode;
}

interface Posts {
  edges: PostEdge[];
}

interface BlogSingleProps {
  post: Post;
  posts?: Posts;
}

const BlogSingle: React.FC<BlogSingleProps> = ({ post, posts }) => {
  const { title, slug, content, date, categories, author } = post.post;

  const relatedPosts = posts?.edges.map(({ node }) => node);

  return (
    <div>
      <div className="bg-white pt-8 pb-8">
        <div className="relative mx-auto divide-y-2 divide-gray-200 max-w-7xl px-4 sm:px-6 lg:px-12">
          <div className="flex flex-col md:flex-row">
            {/* Main Content */}
            <div className="w-full md:w-3/4 lg:w-3/4">
              <div className="flex">
                <div className="hidden md:block md:w-1/12">
                  <div className="flex flex-col items-center p-1 mt-16 sticky top-16">
                    <SocialIcons slug={slug} title={title} />
                  </div>
                </div>
                <div className="w-full md:w-11/12">
                  <div className="mt-3">
                    <div className="prose prose-base mx-auto lg:prose-md px-4 lg:px-4 prose-a:no-underline">
                      <PostMetaBefore
                        author={author}
                        date={date}
                        categories={categories}
                      />
                    </div>

                    <article className="prose px-4 lg:px-4 lg:prose-md prose-h1:mb-6 prose-h1:leading-snug prose-h1:lg:mb-6 prose-base mx-auto prose-h2:text-[1.625em] prose-h3:text-[1.375em] prose-h4:text-[1.125em] prose-h5:text-[1.125em] prose-h6:text-[1.125em] prose-p:text-[1.0625em] prose-li:text-[1.0625em] prose-a:text-slate-600 prose-a:font-semibold hover:prose-a:text-primary prose-a:no-underline prose-a:hover:no-underline prose-hr:my-8 prose-hr:lg:my-10 prose-slate  lg:prose-md">
                      <PostTitle title={title} />
                      <Content content={content} />
                    </article>

                    <div className="prose prose-base mx-auto lg:prose-md px-4 lg:px-4 prose-a:no-underline">
                      <PostMetaAfter date={date} categories={categories} />
                    </div>

                    {/* Post After */}
                    <div className="px-4 lg:px-16">
                      <div className="flex flex-col items-center border-t border-slate-200 mt-12 py-6">
                        <p className="mt-4 text-base text-paragraph leading-6 ">
                          Like this article? Share it with your friends!
                        </p>
                        <div className="flex flex-row">
                          <SocialIcons slug={slug} title={title} />
                        </div>
                      </div>
                      <div className="border-t border-slate-200">
                        <AuthorBox author={author.node} />
                      </div>
                      <div className="flex">
                        <RelatedPosts posts={relatedPosts} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Sidebar */}
            <div className="hidden w-full md:block md:w-1/4">
              <div className="sticky top-16">
                <Sidebar posts={relatedPosts} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogSingle;
