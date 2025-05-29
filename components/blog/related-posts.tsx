import Link from "next/link";
import Image from "next/image";

interface FeaturedImage {
  node: {
    sourceUrl: string;
    altText?: string;
  };
}

interface Post {
  slug: string;
  title: string;
  excerpt: string;
  featuredImage?: FeaturedImage;
  // Add other post properties as needed
}

interface RelatedPostsProps {
  posts: Post[];
}

export default function RelatedPosts({
  posts,
}: RelatedPostsProps): JSX.Element {
  return (
    <div className="relative">
      <div className="mb-10 pb-2 pt-12 border-b border-slate-200">
        <h2 className="text-lg font-normal text-paragraph">Related Posts</h2>
      </div>
      <div>
        {posts.map((post) => (
          <div
            key={post.slug} // Better to use slug than index as key
            className="flex flex-wrap flex-col sm:flex-row lg:flex-row items-start content-start pb-4 mb-6 border-b border-slate-200 last:border-b-0"
          >
            {post.featuredImage?.node?.sourceUrl && (
              <div className="w-full md:w-1/3 flex items-start content-start pb-4">
                <div className="not-prose relative w-full aspect-[4/3]">
                  <Image
                    src={post.featuredImage.node.sourceUrl}
                    alt={post.featuredImage.node.altText || post.title}
                    fill
                    className="object-cover rounded-2xl"
                    priority
                  />
                </div>
              </div>
            )}
            <div className="w-full md:w-2/3 sm:pl-4 lg:pl-6">
              <div className="pb-0">
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-slate-900 capitalize font-semibold hover:text-primary transition-colors duration-200"
                >
                  {post.title}
                </Link>
              </div>
              {post.excerpt && (
                <div
                  className="mt-3 text-base font-normal text-paragraph"
                  dangerouslySetInnerHTML={{
                    __html: post.excerpt,
                  }}
                />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
