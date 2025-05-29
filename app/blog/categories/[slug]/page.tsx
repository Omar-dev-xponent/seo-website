// @ts-nocheck
import {
  getPageOffset,
  PER_PAGE_FIRST,
  PER_PAGE_REST,
} from "@/lib/wpQueries/pagination";

import {
  getAllCategories,
  getCategories,
  getCategoryBySlug,
} from "@/lib/wpQueries/categories";

import { getPostsByCategoryId } from "@/lib/wpQueries/posts";
import BlogArchive from "@/components/blog/blog-archive";
import { Metadata } from "next";

// Define types for your data structures
interface Category {
  slug: string;
  name: string;
  databaseId: number;
  count: number;
}

interface CategoryResponse {
  category: Category;
}

interface CategoriesResponse {
  categories: Category[];
}

interface PostsResponse {
  posts: any[]; // Replace 'any' with your Post type if available
}

interface PageParams {
  slug: string;
  pageNo?: string;
}

export async function generateMetadata({
  params,
}: {
  params: PageParams;
}): Promise<Metadata> {
  const { category } = await getCategoryBySlug(params?.slug);

  return {
    title: `${category.name} - Outreachful Blog`,
    description: "",
  };
}

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  const { categories } = await getAllCategories();
  return categories.map((category) => ({
    slug: category.slug,
  }));
}

const Page = async ({
  params,
}: {
  params: PageParams;
}): Promise<JSX.Element> => {
  const { pageNo } = params || {};
  let offset = getPageOffset(pageNo);
  const perPage = pageNo === "1" ? PER_PAGE_FIRST : PER_PAGE_REST;

  if (isNaN(offset)) {
    offset = 0;
  }

  const { category } = await getCategoryBySlug(params?.slug);
  const { posts } = await getPostsByCategoryId(
    category.databaseId,
    perPage,
    offset
  );

  const AllCategories = await getCategories();
  const totalPostsCount = category.count;

  const pagesCount = Math.ceil(
    (totalPostsCount - PER_PAGE_FIRST) / PER_PAGE_REST + 1
  );

  const basePath = `/blog/categories/${category.slug}`;

  return (
    <div>
      <BlogArchive
        posts={posts}
        categories={AllCategories}
        category={category.name}
        pagesCount={pagesCount}
        basePath={basePath}
      />
    </div>
  );
};

export default Page;
