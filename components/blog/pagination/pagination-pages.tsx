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
  function getPagination(
    currentPage: number,
    totalPages: number
  ): (number | string)[] {
    const pagination: (number | string)[] = [];

    if (totalPages <= 4) {
      // Show all pages if total is less than or equal to 4
      for (let i = 1; i <= totalPages; i++) pagination.push(i);
      return pagination;
    }

    // Always show first page
    pagination.push(1);

    // If currentPage is 1 or 2
    if (currentPage <= 2) {
      pagination.push(2);
      if (totalPages > 3) pagination.push("...");
    }
    // If currentPage is in the middle
    else if (currentPage < totalPages - 1) {
      if (currentPage > 2) pagination.push("...");
      pagination.push(currentPage);
      pagination.push(currentPage + 1);
      if (currentPage + 1 < totalPages - 1) pagination.push("...");
    }
    // If currentPage is at the end
    else {
      pagination.push("...");
      pagination.push(totalPages - 1);
    }

    // Always show last page
    if (totalPages > 1) pagination.push(totalPages);

    return pagination;
  }
  return (
    <>
      {getPagination(currentPage, paginationLinks.length).map((page, index) => {
        const paginationLink =
          index === 0 ? `${basePath}/` : `${path}/${page}/`;
        const active = page === currentPage;

        return active ? (
          <span
            key={index}
            className="flex items-center px-4 cursor-pointer text-brand-100 font-display"
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
            className="flex items-center px-4 transition-all duration-300 cursor-pointer hover:text-brand-100 font-display"
          >
            {page}
          </Link>
        );
      })}
    </>
  );
};

export default PaginationPages;
