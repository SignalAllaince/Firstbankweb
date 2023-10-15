import ErrorMessage from "@/components/error-message";
import FadeInOut from "@/components/fade";
import Heading from "@/components/heading";
import Icon from "@/components/icon";
import IfElse from "@/components/if-else";
import PageHead from "@/components/page-head";
import ReviewPagination from "@/components/paginate/review";
import ProductReview from "@/components/product-review";
import ProductWithImageGallery from "@/components/product-section";
import Section from "@/components/section";
import useGetProductReview from "@/hooks/review/useGetProductReview";
import PaginationContextProvider from "@/hooks/use-pagination";
import { ProductDetailsRes } from "@/types/api.types";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { StarIcon } from "@heroicons/react/24/solid";
import { AnimatePresence } from "framer-motion";
import Link from "next/link";
import React from "react";
import ReviewLoading from "./review-loading";

function ProductMainSection({
  productDetails,
}: {
  productDetails: ProductDetailsRes;
}) {
  const [currentPageNumber, setPage] = React.useState(1);
  const pageSize = 6;
  const productReview = useGetProductReview(productDetails.id, 1, 10);
  const ratingAverage = productReview?.value?.ratingAverage ?? 0;

  console.log(productReview?.value, "productReview?.value");
  console.log(productDetails, "productDetails");
  return (
    <div className="bg-white pb-10">
      <PageHead title={productDetails.name} />
      <div className="w-full border-b border-gray-200 ">
        <Section className="py-8">
          <div className="flex items-center">
            <div className="flex items-center gap-1 text-sm capitalize">
              <Link href="/">Home</Link>
              <Icon IconComp={ChevronRightIcon} boxSize={4} />
              <Link href={`/${productDetails.categories[0].slug}`}>
                {productDetails.categories[0].name}
              </Link>

              <Icon IconComp={ChevronRightIcon} boxSize={4} />
              <p>{productDetails.name}</p>
            </div>
          </div>
        </Section>
      </div>
      {/* second section */}
      <section className="space-y-5 pb-10 pt-6">
        <Section className="">
          <ProductWithImageGallery productDetails={productDetails} />
        </Section>
        <div className="border-t-2 border-brand-lightest" />
        <AnimatePresence>
          <IfElse
            ifOn={!productReview.isLoading && !!productReview?.value}
            ifOnElse={productReview.isLoading && !productReview?.value}
            elseThen={<ErrorMessage />}
            onElse={<ReviewLoading />}
          >
            <IfElse
              ifOn={!!productReview?.value?.items}
              ifOnElse={!productReview?.value?.items}
              onElse={
                <>
                  <Section className="grid grid-cols-2 gap-4">
                    <div className="space-y-4">
                      <Heading size="h4">Ratings & Reviews</Heading>
                      <div className="flex w-fit items-center gap-4 bg-brand-lightest px-6 py-9">
                        <Heading size="h4">{ratingAverage.toFixed(1)}</Heading>
                        <div className="space-y-2">
                          <div className="flex items-center">
                            {[0, 1, 2, 3, 4].map((rating) => (
                              <StarIcon
                                key={rating}
                                className={`h-4 w-4 flex-shrink-0 text-gray-300 `}
                                aria-hidden="true"
                              />
                            ))}
                          </div>
                          <p className="text-sm font-light">
                            {productDetails.reviewsCount} Reviews
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex  justify-center">
                      <div className="ml-auto w-full max-w-sm">
                        <p className="text-sm font-light">
                          Be the first to order and this product; and don’t
                          forget to leave a rating/review!
                        </p>
                      </div>
                    </div>
                  </Section>
                </>
              }
            >
              <FadeInOut>
                <PaginationContextProvider
                  currentPageNumber={currentPageNumber}
                  setPage={setPage}
                  total={productReview?.value?.items?.length!}
                  pageSize={pageSize}
                >
                  <Section className="grid grid-cols-2 gap-4">
                    <div className="space-y-4">
                      <Heading size="h4">Ratings & Reviews</Heading>
                      <div className="flex w-fit items-center gap-4 bg-brand-lightest px-6 py-9">
                        <Heading size="h4">{ratingAverage.toFixed(1)}</Heading>
                        <div className="space-y-2">
                          <div className="flex items-center">
                            {[0, 1, 2, 3, 4].map((rating) => (
                              <StarIcon
                                key={rating}
                                className={`h-4 ${
                                  rating + 1 > ratingAverage
                                    ? "text-gray-300"
                                    : "text-brand-accent"
                                } w-4 flex-shrink-0 `}
                                aria-hidden="true"
                              />
                            ))}
                          </div>
                          <p className="text-sm font-light">
                            {productDetails.reviewsCount} Reviews
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex  justify-center">
                      <div className="w-full max-w-md space-y-8">
                        <ProductReview />
                        <ReviewPagination />
                      </div>
                    </div>
                  </Section>
                </PaginationContextProvider>
              </FadeInOut>
            </IfElse>
          </IfElse>
        </AnimatePresence>
      </section>
    </div>
  );
}
export default ProductMainSection;
