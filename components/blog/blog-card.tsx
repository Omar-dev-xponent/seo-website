import { authorPathByName } from "@/lib/wpQueries/users";
import Image from "next/image";
import Link from "next/link";
import parse from "html-react-parser";
import Date from "@/components/blog/date";

interface IPost {
  [key: string]: any;
}

const BlogCard = ({ post }: { post: IPost }) => {
  return (
    <div className="border-[1px] w-full border-typography-10 rounded-xl p-4 flex flex-col">
      <Link href={`/blog/${post?.slug} `} className="block w-full h-54">
        <Image
          src={post?.featuredImage?.sourceUrl}
          alt={"blog-image"}
          width={0}
          height={0}
          sizes="100vw"
          className="block object-cover w-full h-full rounded-xl"
        />
      </Link>
      <Link
        href={`/blog/${post?.slug}`}
        className="block mt-5 text-xl font-medium sm:text-2xl line-clamp-2"
      >
        {post.title}
      </Link>
      {post?.excerpt && (
        <span className="my-4 text-sm sm:my-6 sm:text-base text-typography-50 line-clamp-3 font-display">
          {parse(post.excerpt)}
        </span>
      )}

      <div className="flex items-center mt-auto space-x-2">
        <Image
          src={post?.author?.avatar?.url}
          alt={post?.author?.name}
          width={40}
          height={40}
          className="object-cover rounded-full"
        />
        <div className="flex flex-col">
          <p className="block text-base font-medium font-display text-typography-100">
            {post?.author?.name}
          </p>
          <Date dateString={post?.date} />
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
