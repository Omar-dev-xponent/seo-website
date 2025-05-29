import React from "react";
import { sanitizeExcerpt } from "@/lib/wpQueries/posts";

interface ContentProps {
  content: string;
}

export default function Content({ content }: ContentProps) {
  return (
    <div
      aria-hidden="true"
      dangerouslySetInnerHTML={{ __html: sanitizeExcerpt(content) }}
    />
  );
}
