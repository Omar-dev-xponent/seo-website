// @ts-nocheck
import { isEmpty } from "lodash";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

interface NextProps {
  currentPageNo: number;
  pagesCount: number;
  path: string;
}

const Next: React.FC<NextProps> = ({ currentPageNo, pagesCount, path }) => {
  if (!currentPageNo || !pagesCount || isEmpty(path)) {
    return null;
  }

  // Determine the pagination link
  const paginationLink = `${path}/${currentPageNo + 1}/`;

  return (
    <div className="-mt-px flex">
      {pagesCount < currentPageNo + 1 ? (
        <span className="py-2 inline-flex items-center text-sm font-medium text-gray-300 ps-4">
          Next
          <ChevronRight className="ml-2 h-4 w-4" aria-hidden="true" />
        </span>
      ) : (
        <Link
          href={paginationLink}
          className="py-2 inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300 ps-4"
        >
          Next
          <ChevronRight
            className="ml-2 h-4 w-4 text-gray-400"
            aria-hidden="true"
          />
        </Link>
      )}
    </div>
  );
};

export default Next;
