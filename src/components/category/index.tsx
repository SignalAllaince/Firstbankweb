import useGetCategoryProducts from "@/hooks/category/useGetCategoryProducts";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { AnimatePresence } from "framer-motion";
import shirtImg from "../../../public/images/top.svg";
import Button from "../button";
import FadeInOut from "../fade";
import Heading from "../heading";
import Icon from "../icon";
import IfElse from "../if-else";
import BlurImage from "../image";
import ProductCard from "../product-card";
import ProductCardSkeleton from "../product-card/skeleton";
import Section from "../section";

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

  const showMore =
    noMore ||
    (categoryProducts?.value
      ? categoryProducts?.value?.products.length === 0
      : false);
  return (
    <div className="space-y-6 py-10">
      <div
        className={`flex h-14 w-full items-center justify-between px-2 py-2 ${
          indep ? "bg-[#B6D9A6]" : "bg-[#FFE18C]"
        }`}
      >
        <Heading size="h5" className="font-medium">
          {header}
        </Heading>
        {!showMore && (
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
      <AnimatePresence>
        <IfElse
          ifOn={!categoryProducts.isLoading && !!categoryProducts?.value}
          ifOnElse={categoryProducts.isLoading && !categoryProducts?.value}
          onElse={
            <FadeInOut className="product-grid grid gap-x-3 gap-y-10">
              {[1, 2, 3, 4].map((i) => (
                <ProductCardSkeleton key={i} />
              ))}
            </FadeInOut>
          }
        >
          <AnimatePresence>
            <IfElse
              ifOn={categoryProducts?.value?.products.length !== 0}
              ifOnElse={categoryProducts?.value?.products.length === 0}
              onElse={
                <FadeInOut>
                  <Section className="flex w-full flex-col items-center justify-center space-y-2">
                    <div className="max-w-lg">
                      <BlurImage src={shirtImg} alt={"djsdsd"} />
                    </div>
                    <div className="flex flex-col items-center space-y-3 text-center">
                      <Heading size="h3">No products found</Heading>
                      <p className="text-sm">
                        Try searching for more general terms or shop from other
                        categories above.
                      </p>
                    </div>
                  </Section>
                </FadeInOut>
              }
            >
              <FadeInOut className="product-grid grid gap-x-3 gap-y-10">
                {categoryProducts?.value?.products.map((product) => (
                  <ProductCard
                    name={product.name}
                    key={product.id}
                    imageSrc={product.thumbnailUrl}
                    href={`/${product.slug}`}
                    // isFinished={product.stockQuantity === 0}
                    stockQuantity={product.stockQuantity}
                    price={product.calculatedProductPrice.priceString}
                    imageAlt={`${product.name} image`}
                    rating={product.ratingAverage}
                  />
                ))}
              </FadeInOut>
            </IfElse>
          </AnimatePresence>
        </IfElse>
      </AnimatePresence>
    </div>
  );
}

export default Catergory;
