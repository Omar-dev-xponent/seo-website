import { Input } from "@/components/ui/input";
import { RiSearchLine } from "react-icons/ri";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
const BlogSideBar = () => {
  const categories = [
    "View all",
    "Link Building",
    "Product",
    "Backlinks",
    "Customer Success",
    "Leadership",
    "Management",
  ];
  return (
    <div className="w-full md:max-w-64">
      <form className="flex items-center mb-6 sm:mb-8 rounded-xl border-[1px] border-typography-10 px-3 py-2">
        <RiSearchLine className="text-xl text-typography-75" />
        <Input
          placeholder="Search"
          className="flex-1 h-full text-sm bg-transparent border-none sm:text-base text-typography-50 font-display placeholder:text-typography-50 placeholder:font-display placeholder:text-base focus-visible:ring-offset-0 focus-visible:ring-0"
        />
      </form>
      <div>
        <p className="mb-4 text-base font-semibold sm:text-lg sm:mb-5 font-display text-brand-100">
          Blog categories
        </p>
        <Tabs
          defaultValue={categories[0]}
          orientation="vertical"
          className="w-full "
        >
          <TabsList className="flex flex-col w-full h-auto space-y-1 bg-transparent ">
            {categories.map((category) => (
              <TabsTrigger
                key={category}
                value={category}
                className="w-full text-sm sm:text-base self-start font-semibold data-[state=active]:text-brand-100 data-[state=active]:bg-transparent data-[state=active]:shadow-none px-3 py-2 rounded-none data-[state=active]:border-l-[2px] data-[state=active]:border-brand-100  text-typography-50 border-l-[2px] border-transparent font-display inline-flex items-start justify-start transition-all duration-300"
              >
                {category}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      </div>
    </div>
  );
};

export default BlogSideBar;
