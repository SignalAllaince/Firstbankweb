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
