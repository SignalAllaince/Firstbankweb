import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import Button from "../button";
import Icon from "../icon";

interface PaginationProps {
  onNext: () => void;
  onPrev: () => void;
  currentPageNumber: number;
  isPrevDisabled: boolean;
  isNextDisabled: boolean;
  totalPages: number;
}

function Pagination({
  onNext,
  onPrev,
  currentPageNumber,
  isPrevDisabled,
  isNextDisabled,
  totalPages,
}: PaginationProps) {
  return (
    <div
      className={`${
        totalPages <= 1 ? "hidden" : "flex"
      } items-center gap-3 pt-10`}
    >
      <Button
        className="px-[8px] outline-none focus:ring focus:ring-blue-300"
        variant="secondary"
        size="xs"
        onClick={onPrev}
        aria-label="prev page button"
        disabled={isPrevDisabled}
      >
        <Icon boxSize={5} className="" IconComp={ChevronLeftIcon} />
      </Button>
      <div className="flex h-8 items-center justify-center rounded border border-brand-blue px-[14px]">
        {currentPageNumber}
      </div>
      <p className="text-md font-light">of {totalPages}</p>

      <Button
        className="px-[8px] outline-none focus:ring focus:ring-blue-300"
        variant="secondary"
        size="xs"
        onClick={onNext}
        aria-label="next page button"
        disabled={isNextDisabled}
      >
        <Icon boxSize={5} IconComp={ChevronRightIcon} />
      </Button>
    </div>
  );
}

export default Pagination;
