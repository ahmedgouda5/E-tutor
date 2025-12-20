import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

interface IPagination {
  currentPage: number;
  totalPages: number;
  setPage: (page: number) => void;
}

export function PaginationDemo({ currentPage, totalPages, setPage }: IPagination) {
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious 
            onClick={() => currentPage > 1 && setPage(currentPage - 1)} 
            className={currentPage === 1 ? 'pointer-events-none opacity-50' : 'cursor-pointer'}
          />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink isActive={currentPage === 1}>1</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink isActive={currentPage === 2}>2</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink isActive={currentPage === 3}>3</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationNext 
            onClick={() => currentPage < totalPages && setPage(currentPage + 1)} 
            className={currentPage === totalPages ? 'pointer-events-none opacity-50' : 'cursor-pointer'}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
