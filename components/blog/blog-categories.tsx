// @ts-nocheck

import Link from "next/link";
import React from "react";

interface Category {
  slug: string;
  name: string;
}

interface Categories {
  categories: Category[];
}

interface BlogCategoriesProps {
  categories?: Categories;
}

export default function BlogCategories({ categories }: BlogCategoriesProps) {
  return (
    <div className="flex gap-2 justify-center flex-wrap">
      {categories?.categories.map((category, i) => (
        <Link
          key={i}
          href={`/blog/categories/${category.slug}`}
          className="text-sm font-medium text-slate-900 bg-teal-50 border border-transparent hover:bg-teal-100 hover:border hover:border- hover:border-teal-100 px-2 py-1 rounded-lg transition"
        >
          {category.name}
        </Link>
      ))}
    </div>
  );
}
