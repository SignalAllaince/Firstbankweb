import { usePagination } from "@/hooks/use-pagination";
import {
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";
import Button from "../button";
import Icon from "../icon";

function Pagination() {
  const {
    onNext,
    onPrev,
    onDoublePrev,
    onDoubleNext,
    currentPageNumber,
    totalPages,
  } = usePagination();
  return (
    <div
      className={`flex items-center gap-3 ${
        totalPages <= 1 ? "hidden" : "flex"
      } `}
    >
      <Button
        className="px-[8px]"
        variant="secondary"
        disabled={currentPageNumber - 2 <= 0}
        size="xs"
        onClick={onDoublePrev}
      >
        <Icon
          boxSize={4}
          className="text-brand-medium"
          IconComp={ChevronDoubleLeftIcon}
        />
      </Button>
      <Button
        className="px-[8px] outline-none focus:ring focus:ring-blue-300"
        variant="secondary"
        size="xs"
        onClick={onPrev}
        aria-label="prev page button"
        disabled={currentPageNumber === 1}
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
        disabled={currentPageNumber === totalPages}
      >
        <Icon boxSize={5} IconComp={ChevronRightIcon} />
      </Button>
      <Button
        className="px-[8px]"
        variant="secondary"
        size="xs"
        disabled={currentPageNumber + 2 > totalPages}
        onClick={onDoubleNext}
      >
        <Icon
          boxSize={4}
          className="text-brand-medium"
          IconComp={ChevronDoubleRightIcon}
        />
      </Button>
    </div>
  );
}

export default Pagination;
