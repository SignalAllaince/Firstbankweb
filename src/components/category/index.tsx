import useGetCategoryProducts from "@/hooks/category/useGetCategoryProducts";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Button from "../button";
import Heading from "../heading";
import Icon from "../icon";
import IfElse from "../if-else";
import ProductCard from "../product-card";
import ProductCardSkeleton from "../product-card/skeleton";

function Catergory({
  header,
  categoryId,
  noMore = false,
  indep = false,
  slug,
}: {
  header: string;
  products?: any[];
  indep?: boolean;
  noMore?: boolean;
  categoryId: number;
  slug: string;
}) {
  const categoryProducts = useGetCategoryProducts({
    categoryId,
  });

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
            href={`/${slug}`}
            variant="cart"
            size="xs"
            className="border-brand-blue font-light text-brand-blue"
            rightIcon={<Icon IconComp={ArrowRightIcon} boxSize={4} />}
          >
            See all
          </Button>
        )}
      </div>
      <IfElse
        ifOn={!categoryProducts.isLoading && !!categoryProducts?.value}
        ifOnElse={categoryProducts.isLoading && !categoryProducts?.value}
        onElse={
          <div className="product-grid grid gap-x-3 gap-y-10">
            {[1, 2, 3, 4].map((i) => (
              <ProductCardSkeleton key={i} />
            ))}
          </div>
        }
      >
        <div className="product-grid grid gap-x-3 gap-y-10">
          {categoryProducts?.value?.products.map((product) => (
            <ProductCard
              name={product.name}
              key={product.id}
              href={`/${product.slug}`}
              // isFinished={product.stockQuantity === 0}
              stockQuantity={product.stockQuantity}
              price={product.calculatedProductPrice.priceString}
              imageAlt={`${product.name} image`}
            />
          ))}
        </div>
      </IfElse>
    </div>
  );
}

export default Catergory;
