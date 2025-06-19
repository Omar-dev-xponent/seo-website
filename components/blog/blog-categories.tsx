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
    <div className="flex flex-wrap justify-center gap-2">
      {categories?.categories.map((category, i) => (
        <Link
          key={i}
          href={`/blog/categories/${category.slug}`}
          className="px-2 py-1 text-sm font-medium transition border border-transparent rounded-lg text-slate-900 bg-teal-50 hover:bg-teal-100 hover:border hover:border- hover:border-teal-100"
        >
          {category.name}
        </Link>
      ))}
    </div>
  );
}
