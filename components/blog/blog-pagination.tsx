import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const BlogPagination = () => {
  const page = [1, 2, 3];
  return (
    <Pagination className="w-full mt-8">
      <PaginationContent className="flex items-center justify-between w-full">
        <PaginationItem>
          <PaginationPrevious href="#" />
        </PaginationItem>
        <div className="flex">
          {page.map((item) => (
            <PaginationItem key={item}>
              <PaginationLink href="#">{item}</PaginationLink>
            </PaginationItem>
          ))}
          {/* <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem> */}
        </div>
        <PaginationItem>
          <PaginationNext href="#" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default BlogPagination;
