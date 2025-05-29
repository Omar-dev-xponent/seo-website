import Link from "next/link";

interface PaginationPagesProps {
  paginationLinks: number[]; // Assuming the pages are represented as numbers
  currentPage: number;
  path: string;
  basePath: string;
}

const PaginationPages: React.FC<PaginationPagesProps> = ({
  paginationLinks,
  currentPage,
  path,
  basePath,
}) => {
  return (
    <>
      {paginationLinks.map((page, index) => {
        const paginationLink =
          index === 0 ? `${basePath}/` : `${path}/${page}/`;
        const active = page === currentPage;

        return active ? (
          <span
            key={index}
            className="bg-gray-900 text-white px-4 flex items-center"
            aria-label={`Current Page, Page ${page}`}
            aria-current="true"
          >
            {page}
          </span>
        ) : (
          <Link
            key={index}
            href={paginationLink}
            aria-label={`Goto Page ${page}`}
            className="flex items-center px-4 border border-gray-800 border-r-0 last:border-r hover:bg-primary"
          >
            {page}
          </Link>
        );
      })}
    </>
  );
};

export default PaginationPages;
