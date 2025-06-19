import { LiaArrowLeftSolid } from "react-icons/lia";
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
    <div className="flex -mt-px">
      {currentPageNo - 1 === 0 ? (
        <span className="border-[1px] font-display border-typography-10 rounded-lg px-4 py-3 inline-flex flex-row-reverse items-center text-sm font-medium text-gray-300">
          Previous
          <LiaArrowLeftSolid className="w-5 h-5 mr-2" aria-hidden="true" />
        </span>
      ) : (
        <Link
          href={paginationLink}
          className="inline-flex border-[1px] font-display border-typography-10 rounded-lg px-4 py-3 flex-row-reverse items-center  text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300 pe-4"
        >
          Previous
          <LiaArrowLeftSolid className="w-5 h-5 mr-2" aria-hidden="true" />
        </Link>
      )}
    </div>
  );
};

export default Previous;
