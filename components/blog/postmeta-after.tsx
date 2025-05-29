import Date from "./date";
import MetaCategories from "./meta-categories";

interface CategoryNode {
  // Define the properties you expect on the category node
  name: string;
  slug: string;
  // Add other category properties as needed
}

interface CategoryEdge {
  node: CategoryNode;
}

interface Categories {
  edges: CategoryEdge[];
}

interface PostMetaAfterProps {
  date: string;
  categories?: Categories; // Optional if not always provided
}

export default function PostMetaAfter({
  date,
  categories,
}: PostMetaAfterProps) {
  const metaCategories = categories?.edges.map((e) => e.node);

  return (
    <>
      <div className="text-base text-paragraph">
        <span className="p-0">Last updated on </span>
        <Date dateString={date} />
      </div>
      {metaCategories && metaCategories.length > 0 && (
        <div className="mt-5">
          <MetaCategories categories={metaCategories} />
        </div>
      )}
    </>
  );
}
