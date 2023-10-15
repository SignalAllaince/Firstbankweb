import { usePagination } from "@/hooks/use-pagination";
import Button from "../button";

function ReviewPagination() {
  const { onNext, onPrev, currentPageNumber, totalPages, total, pageSize } =
    usePagination();
  return (
    <div
      className={`items-center justify-between gap-3 ${
        totalPages <= 0 ? "hidden" : "flex"
      } `}
    >
      <p className="font-light text-brand-medium">
        {currentPageNumber}-
        {totalPages > currentPageNumber
          ? currentPageNumber * pageSize
          : currentPageNumber === totalPages
          ? total
          : 1}{" "}
        of {total} reviews
      </p>
      <div className="flex items-center gap-2">
        <Button
          variant="secondary"
          size="xs"
          onClick={onPrev}
          aria-label="prev page button"
          disabled={currentPageNumber === 1}
        >
          Previous
        </Button>
        <Button
          variant="secondary"
          size="xs"
          onClick={onNext}
          aria-label="next page button"
          disabled={currentPageNumber === totalPages}
        >
          Next
        </Button>
      </div>
    </div>
  );
}

export default ReviewPagination;
