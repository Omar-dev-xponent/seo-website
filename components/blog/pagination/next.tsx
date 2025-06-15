import { isEmpty } from "lodash";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { LiaArrowRightSolid } from "react-icons/lia";
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
    <div className="flex -mt-px">
      {pagesCount < currentPageNo + 1 ? (
        <span className=" inline-flex border-[1px] font-display border-typography-10 rounded-lg px-4 py-3 items-center text-sm font-medium text-gray-300 ps-4">
          Next
          <LiaArrowRightSolid className="w-5 h-5 ml-2" aria-hidden="true" />
        </span>
      ) : (
        <Link
          href={paginationLink}
          className="inline-flex items-center border-[1px] font-display border-typography-10 rounded-lg px-4 py-3 text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300 ps-4"
        >
          Next
          <LiaArrowRightSolid className="w-5 h-5 ml-2" aria-hidden="true" />
        </Link>
      )}
    </div>
  );
};

export default Next;
