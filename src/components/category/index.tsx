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
          variant="secondary"
          size="small"
          className="h-8 border-brand-light font-light"
          rightIcon={
            <Icon IconComp={ArrowRightIcon} className="text-inherit" />
          }
        >
          View category page
        </Button>
      </div>
      <div className="grid grid-cols-3 gap-3 gap-y-20  lg:grid-cols-5">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
}

export default Catergory;
