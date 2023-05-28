import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Button from "../button";
import Heading from "../heading";
import Icon from "../icon";
import ProductCard from "../product-card";

function Catergory({ header }: { header: string; products?: any[] }) {
  return (
    <div className="space-y-6 py-10">
      <div className="flex w-full items-center justify-between">
        <Heading size="h4">{header}</Heading>
        <Button
          variant="cart"
          size="xs"
          className="border-brand-light font-light text-brand-blue"
          rightIcon={<Icon IconComp={ArrowRightIcon} boxSize={4} />}
        >
          View category page
        </Button>
      </div>
      <div className="grid grid-cols-1 gap-3 gap-y-10 sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4">
        <ProductCard />
        <ProductCard />
        <ProductCard isFinished />
        <ProductCard />
      </div>
    </div>
  );
}

export default Catergory;
