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
                className="text-xs inline-flex items-center p-1 pl-0"
                key={category.slug}
              >
                <Link
                  href={`/blog/categories/${category.slug}`}
                  className="text-xs text-teal-700 font-normal border border-teal-100 bg-teal-50 rounded px-2 py-1"
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
