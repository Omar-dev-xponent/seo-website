// @ts-nocheck

import { isEmpty } from "lodash";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";

interface PreviousProps {
  currentPageNo: number;
  path: string;
  pagesCount?: number; // Optional since it is unused in the component
}

const Previous: React.FC<PreviousProps> = ({
  currentPageNo,
  path,
  pagesCount,
}) => {
  if (!currentPageNo || isEmpty(path)) {
    return null;
  }

  // Determine the pagination link
  let paginationLink: string;

  if (currentPageNo < 2) {
    paginationLink = ``;
  } else {
    paginationLink = `${path}/${currentPageNo - 1}/`;
  }

  return (
    <div className="-mt-px flex">
      {currentPageNo - 1 === 0 ? (
        <span className="py-2 inline-flex flex-row-reverse items-center text-sm font-medium text-gray-300 pe-4">
          Previous
          <ChevronLeft className="mr-2 h-4 w-4" aria-hidden="true" />
        </span>
      ) : (
        <Link
          href={paginationLink}
          className="py-2 inline-flex flex-row-reverse items-center text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300 pe-4"
        >
          Previous
          <ChevronLeft
            className="mr-2 h-4 w-4 text-gray-400"
            aria-hidden="true"
          />
        </Link>
      )}
    </div>
  );
};

export default Previous;
