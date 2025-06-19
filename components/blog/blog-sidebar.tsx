"use client";
import { Input } from "@/components/ui/input";
import { RiSearchLine } from "react-icons/ri";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface ICategory {
  id: string;
  name: string;
  slug: string;
}

interface BlogSideBarProps {
  isSidebarFixed: boolean;
  categories: {
    categories: ICategory[];
  };
}

const BlogSideBar = ({ isSidebarFixed, categories }: BlogSideBarProps) => {
  const path = usePathname();
  const categorySlug = path.split("/")[3];

  return (
    <aside
      className={`w-full h-max md:max-w-64 ${
        isSidebarFixed ? "md:fixed md:shrink-0 md:top-20" : ""
      } transition-all duration-300`}
    >
      {/* 
      <form className="flex items-center mb-6 sm:mb-8 rounded-xl border-[1px] border-typography-10 px-3 py-2">
          <RiSearchLine className="text-xl text-typography-75" />
          <Input
            placeholder="Search"
            className="flex-1 h-full text-sm bg-transparent border-none sm:text-base text-typography-50 font-display placeholder:text-typography-50 placeholder:font-display placeholder:text-base focus-visible:ring-offset-0 focus-visible:ring-0"
          />
        </form>
        */}
      <div>
        <p className="mb-4 text-base font-semibold sm:text-lg sm:mb-5 font-display text-brand-100">
          Blog categories
        </p>
        {categories?.categories.length > 0 ? (
          <Tabs
            defaultValue={categorySlug}
            orientation="vertical"
            className="w-full max-h-[300px] md:max-h-[500px] scrollbar-thin scrollbar-thumb-rounded overflow-y-auto "
          >
            <TabsList className="flex flex-col w-full h-auto space-y-1 bg-transparent ">
              {categories?.categories.map((category: ICategory, ind) => (
                <TabsTrigger
                  key={ind}
                  value={category?.slug}
                  className="w-full text-sm sm:text-base self-start font-semibold data-[state=active]:text-brand-100 data-[state=active]:bg-transparent data-[state=active]:shadow-none px-3 py-2 rounded-none data-[state=active]:border-l-[2px] data-[state=active]:border-brand-100  text-typography-50 border-l-[2px] border-transparent font-display inline-flex items-start justify-start transition-all duration-300"
                >
                  <Link href={`/blog/categories/${category?.slug}`}>
                    {category?.name}
                  </Link>
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        ) : (
          <p className="text-sm font-display text-typography-50">
            No categories found
          </p>
        )}
      </div>
    </aside>
  );
};

export default BlogSideBar;
