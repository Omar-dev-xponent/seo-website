// @ts-nocheck
import BlogArchive from "@/components/blog/blog-archive";
import {
  getAllCategories,
  getCategories,
  getCategoryBySlug,
} from "@/lib/wpQueries/categories";
import {
  PER_PAGE_FIRST,
  PER_PAGE_REST,
  getPageOffset,
} from "@/lib/wpQueries/pagination";
import { getPostsByCategoryId } from "@/lib/wpQueries/posts";

// Define types for your data structures
interface Category {
  slug: string;
  name: string;
  databaseId: number;
  count: number;
}

interface CategoriesResponse {
  categories: Category[];
}

interface CategoryResponse {
  category: Category;
}

interface PostsResponse {
  posts: any[]; // Replace 'any' with your Post type if available
}

interface PageParams {
  slug: string;
  page?: string;
}

interface StaticParams {
  params: {
    page: string;
    slug: string;
  };
}

export async function generateStaticParams(): Promise<StaticParams[]> {
  const { categories } = await getAllCategories();

  return categories.flatMap((category) => {
    const totalPostsCount = category.count;
    const pagesCount = Math.ceil(
      (totalPostsCount - PER_PAGE_FIRST) / PER_PAGE_REST + 1
    );

    return Array.from({ length: pagesCount }, (_, index) => ({
      params: {
        page: (index + 1).toString(),
        slug: category.slug,
      },
    }));
  });
}

export default async function Page({
  params,
}: {
  params: PageParams;
}): Promise<JSX.Element> {
  const { page } = params || {};
  let offset = getPageOffset(page);

  const perPage = page === "1" ? PER_PAGE_FIRST : PER_PAGE_REST;
  if (isNaN(offset)) {
    offset = 1;
  }

  const { category } = await getCategoryBySlug(params?.slug);
  const { posts } = await getPostsByCategoryId(
    category.databaseId,
    perPage,
    offset
  );

  const totalPostsCount = category.count;
  const pagesCount = Math.ceil(
    (totalPostsCount - PER_PAGE_FIRST) / PER_PAGE_REST + 1
  );

  const AllCategories = await getCategories();
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
}
