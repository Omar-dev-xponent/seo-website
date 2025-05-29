import React from "react";
import Link from "next/link";
import Date from "./date";
import { ArrowLeft } from "lucide-react";

interface AuthorNode {
  name?: string;
  firstName?: string;
  lastName?: string;
}

interface Author {
  node: AuthorNode;
}

interface PostMetaBeforeProps {
  author: Author;
  date: string;
  categories?: string[]; // Optional if not always provided
}

export default function PostMetaBefore({
  author,
  date,
  categories,
}: PostMetaBeforeProps) {
  const name = author.node.name
    ? author.node.firstName && author.node.lastName
      ? `${author.node.firstName} ${author.node.lastName}`
      : author.node.name
    : null;

  return (
    <div className="flex flex-wrap items-center flex-row justify-between mb-6 pt-1">
      <div className="">
        <Link
          href="/blog"
          className="text-sm font-normal text-slate-600 hover:text-teal-500"
        >
          <div className="flex items-center gap-2">
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Blog</span>
          </div>
        </Link>
      </div>
      <div className="text-sm text-slate-600">
        <span className="p-0">Last updated </span>
        <Date dateString={date} />
      </div>
    </div>
  );
}
