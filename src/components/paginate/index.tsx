import {
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";
import Button from "../button";
import Icon from "../icon";

function Pagination() {
  return (
    <div className="flex items-center gap-3 pt-10">
      <Button className="px-[8px]" variant="secondary" size="xs">
        <Icon
          boxSize={4}
          className="text-brand-medium"
          IconComp={ChevronDoubleLeftIcon}
        />
      </Button>
      <Button className="px-[8px]" variant="secondary" size="xs">
        <Icon
          boxSize={4}
          className="text-brand-medium"
          IconComp={ChevronLeftIcon}
        />
      </Button>
      <Button variant="secondary" size="xs" style={{ fontSize: "14px" }}>
        1
      </Button>
      <p className="text-sm font-light">of 1</p>

      <Button className="px-[8px]" variant="secondary" size="xs">
        <Icon
          boxSize={4}
          className="text-brand-medium"
          IconComp={ChevronDoubleRightIcon}
        />
      </Button>
      <Button className="px-[8px]" variant="secondary" size="xs">
        <Icon
          boxSize={4}
          className="text-brand-medium"
          IconComp={ChevronRightIcon}
        />
      </Button>
    </div>
  );
}

export default Pagination;

// import React from 'react';
// import { HStack, IconButton, Text } from '@chakra-ui/react';
// import Icon from '../Icon/Icon';
// import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';

// interface TablePaginationProps {
//   onNext: () => void;
//   onPrev: () => void;
//   currentPageNumber: number;
//   isPrevDisabled: boolean;
//   isNextDisabled: boolean;
// }

// function TablePagination({
//   onNext,
//   onPrev,
//   currentPageNumber,
//   isPrevDisabled,
//   isNextDisabled,
// }: TablePaginationProps) {
//   return (
//     <HStack w="full" maxW="100px">
//       <IconButton
//         onClick={onPrev}
//         aria-label="prev page button"
//         size="sm"
//         colorScheme="gray"
//         isDisabled={isPrevDisabled}
//         rounded="full"
//       >
//         <Icon iconComp={BsChevronLeft} boxSize={4} />
//       </IconButton>
//       <Text fontSize="nm" fontFamily="Satoshi-Bold">
//         {currentPageNumber}
//       </Text>
//       <IconButton
//         onClick={onNext}
//         aria-label="next page button"
//         colorScheme="gray"
//         size="sm"
//         isDisabled={isNextDisabled}
//         rounded="full"
//       >
//         <Icon iconComp={BsChevronRight} boxSize={4} />
//       </IconButton>
//     </HStack>
//   );
// }

// export default TablePagination;

/* <TablePagination
onNext={onNext}
onPrev={onPrev}
currentPageNumber={currentPageNumber}
isPrevDisabled={currentPageNumber === 1}
isNextDisabled={currentPageNumber === totalPages}
/> */
