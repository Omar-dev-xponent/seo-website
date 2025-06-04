import Image from "next/image";
import { LuClock } from "react-icons/lu";

interface IBlog {
  id: number;
  title: string;
  summary: string;
  duration: string;
  image: string;
  author: {
    name: string;
    avatar: string;
  };
  createdAt: string;
}
const BlogCard = ({ blog }: { blog: IBlog }) => {
  return (
    <div className="border-[1px] w-full border-typography-10 rounded-xl p-4">
      <div className="w-full h-54">
        <Image
          src={blog.image}
          alt={blog.title}
          width={0}
          height={0}
          sizes="100vw"
          className="block object-cover w-full h-full rounded-xl"
        />
      </div>
      <p className="flex items-center my-4 space-x-1 text-sm text-typography-50 font-display sm">
        <LuClock className="text-base" /> <span>5 mins read</span>
      </p>
      <p className="text-xl font-medium sm:text-2xl line-clamp-2">
        {blog.title}
      </p>
      <p className="my-4 text-sm sm:my-6 sm:text-base text-typography-50 line-clamp-4 font-display">
        {blog.summary}
      </p>
      <div className="flex items-center space-x-2">
        <Image
          src={blog.author.avatar}
          alt={blog.author.name}
          width={40}
          height={40}
          className="object-cover rounded-full"
        />
        <div>
          <p className="text-base font-medium font-display text-typography-100">
            {blog.author.name}
          </p>
          <p className="text-xs font-display text-typography-50">
            {blog.createdAt}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
