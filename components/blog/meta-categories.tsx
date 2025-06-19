import React from "react";
import Link from "next/link";

interface Category {
  slug: string;
  name: string;
}

interface MetaCategoriesProps {
  categories: Category[];
}

export default function MetaCategories({ categories }: MetaCategoriesProps) {
  return (
    <>
      {Array.isArray(categories) && categories[0] && (
        <div className="text-sm">
          {categories.map((category) => {
            return (
              <div
                className="inline-flex items-center p-1 pl-0 text-xs"
                key={category.slug}
              >
                <Link
                  href={`/blog/categories/${category.slug}`}
                  className="px-2 py-1 text-xs font-normal text-teal-700 border border-teal-100 rounded bg-teal-50"
                >
                  {category.name}
                </Link>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
}
