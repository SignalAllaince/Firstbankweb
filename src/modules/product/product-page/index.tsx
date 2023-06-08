import Button from "@/components/button";
import Heading from "@/components/heading";
import Icon from "@/components/icon";
import AppLayout from "@/components/layout/app-layout";
import ProductReview from "@/components/product-review";
import ProductWithImageGallery from "@/components/product-section";
import Section from "@/components/section";
import { NextPageWithLayout } from "@/types/component.types";
import { ProtectedComponentType } from "@/types/service.types";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { StarIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { ReactElement } from "react";

const ProductPage: NextPageWithLayout & ProtectedComponentType = (
  props: any
) => {
  return (
    <div className="bg-white pb-10">
      <div className="w-full border-b border-gray-200 ">
        <Section className="py-8">
          <div className="flex items-center">
            <div className="flex items-center gap-1 text-sm capitalize">
              <Link href="/">Home</Link>
              <Icon IconComp={ChevronRightIcon} boxSize={4} />
              <Link href={`/category/${props?.category?.toLowerCase()}`}>
                {props?.category}
              </Link>
              <Icon IconComp={ChevronRightIcon} boxSize={4} />
              <p>{props?.productId}</p>
            </div>
          </div>
        </Section>
      </div>

      {/* second section */}
      <section className="space-y-5 pb-10 pt-6">
        <Section className="">
          <ProductWithImageGallery />
        </Section>
        <div className="border-t-2 border-brand-lightest" />
        <Section className="grid grid-cols-2 gap-4">
          <div className="space-y-4">
            <Heading size="h4">Ratings & Reviews</Heading>
            <div className="flex w-fit items-center gap-4 bg-brand-lightest px-6 py-9">
              <h1 className="text-2xl font-medium md:text-[64px]">4.0</h1>
              <div className="space-y-2">
                <div className="flex items-center">
                  {[0, 1, 2, 3, 4].map((rating) => (
                    <StarIcon
                      key={rating}
                      className={"h-4 w-4 flex-shrink-0 text-brand-accent"}
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <p className="text-sm font-light">8 Reviews</p>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center md:mt-10">
            <div className="w-full max-w-md space-y-8">
              <ProductReview />
              <ProductReview />
              <ProductReview />
              <ProductReview />

              {/* Pagination */}
              <div className="flex items-center justify-between">
                <p className="font-light text-brand-medium">1-4 of 8 reviews</p>
                <div className="flex items-center gap-2">
                  <Button variant="secondary" size="xs">
                    Previous
                  </Button>
                  <Button variant="secondary" size="xs">
                    Next
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Section>
      </section>
    </div>
  );
};

ProductPage.getLayout = function getLayout(page: ReactElement) {
  return <AppLayout hasBanner={false}>{page}</AppLayout>;
};

ProductPage.auth = false;

export default ProductPage;
