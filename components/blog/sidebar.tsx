import Link from "next/link";

interface Post {
  slug: string;
  title: string;
  // Add other post properties if needed
}

interface SidebarProps {
  posts: Post[];
}

export default function Sidebar({ posts }: SidebarProps): JSX.Element {
  return (
    <div className="relative p-4">
      <div className="mb-4">
        <h2 className="uppercase text-sm text-slate-800 font-medium">
          Related Posts
        </h2>
      </div>
      <div className="border border-gray-300 px-6">
        {posts.map((post, index) => (
          <div
            key={post.slug} // Better to use slug than index as key
            className="px-0 py-6 border-b border-gray-300 last:border-b-0"
          >
            <div className="">
              <div className="pb-0">
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-paragraph capitalize"
                >
                  {post.title}
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
