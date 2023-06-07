import useGetCategoryProducts from "@/hooks/category/useGetCategoryProducts";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import React from "react";
import Button from "../button";
import Heading from "../heading";
import Icon from "../icon";
import ProductCard from "../product-card";

function Catergory({
  header,
  id,
  noMore = false,
  indep = false,
}: {
  header: string;
  products?: any[];
  indep?: boolean;
  noMore?: boolean;
  id: number;
}) {
  const categoryProducts = useGetCategoryProducts(id);

  React.useEffect(() => {
    if (!categoryProducts.error || categoryProducts.data) {
      categoryProducts.mutateAsync({}).catch(console.log);
    }
  }, []);

  return (
    <div className="space-y-6 py-10">
      <div
        className={`flex w-full items-center justify-between px-2 py-2 ${
          indep ? "bg-[#B6D9A6]" : "bg-[#FFE18C]"
        }`}
      >
        <Heading size="h5" className="font-medium">
          {header}
        </Heading>
        {!noMore && (
          <Button
            variant="cart"
            size="xs"
            className="border-brand-blue font-light text-brand-blue"
            rightIcon={<Icon IconComp={ArrowRightIcon} boxSize={4} />}
          >
            See all
          </Button>
        )}
      </div>
      <div className="product-grid grid gap-x-3 gap-y-10">
        <ProductCard />
        <ProductCard />
        <ProductCard isFinished />
        <ProductCard />
      </div>
    </div>
  );
}

export default Catergory;
