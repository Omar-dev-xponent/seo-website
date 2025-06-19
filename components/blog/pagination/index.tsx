"use client";
import { createPaginationLinks } from "@/lib/wpQueries/pagination";
import { useParams } from "next/navigation";
import Next from "./next";
import PaginationPages from "./pagination-pages";
import Previous from "./previous";

interface PaginationProps {
  pagesCount: number;
  basePath: string;
}

const Pagination: React.FC<PaginationProps> = ({ pagesCount, basePath }) => {
  const params = useParams();

  if (!pagesCount || !basePath) {
    return null;
  }

  const currentPage = parseInt(params?.page as string, 10) || 1;
  const path = `${basePath}/page`;

  const paginationLinks = createPaginationLinks(currentPage, pagesCount);

  return (
    <nav className="flex justify-center w-full py-8 md:justify-center ">
      <div className="flex justify-between w-full">
        <Previous currentPageNo={currentPage} path={path} />

        <div className="hidden md:flex">
          <PaginationPages
            paginationLinks={paginationLinks}
            currentPage={currentPage}
            path={path}
            basePath={basePath}
          />
        </div>

        <Next currentPageNo={currentPage} pagesCount={pagesCount} path={path} />
      </div>
    </nav>
  );
};

export default Pagination;
