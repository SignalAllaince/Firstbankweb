/* eslint-disable no-unused-vars */
import Accordion from "@/components/accordion";
import Button from "@/components/button";
import Heading from "@/components/heading";
import Icon from "@/components/icon";
import CustomInput from "@/components/input";
import { Menu, MenuButton, MenuItem, MenuItems } from "@/components/menu";
import Pagination from "@/components/paginate";
import ProductCard from "@/components/product-card";
import Ratings from "@/components/rating";
import Section from "@/components/section";
import { usePagination } from "@/hooks/use-pagination";
import { displayValue, stringifyCategory } from "@/lib/utils/common.utils";
import { CategoryItems } from "@/types/api.types";
import {
  ChevronDownIcon,
  ChevronRightIcon,
  MinusIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import React, { useState } from "react";
import { BarLoader } from "react-spinners";

function CategoryMain({
  categoryName,
  categoryProducts,
  sort,
  onChangeSort,
  isRefetching,
  max,
  onMaxChange,
  min,
  onMinChange,
}: {
  sort?: string;
  categoryName: string;
  categoryProducts: CategoryItems;
  onChangeSort: (value: string) => void;
  isRefetching: boolean;
  max: string;
  onMaxChange: (value: string) => void;
  min: string;
  onMinChange: (value: string) => void;
}) {
  const [rating, setRating] = useState(null);
  const { onNext, onPrev, currentPageNumber, totalPages } = usePagination();
  const sectionRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    sectionRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  }, [currentPageNumber]);

  return (
    <div>
      <div className="w-full bg-white">
        <Section className="space-y-7 py-7">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1 text-sm">
              <Link href="/">Home</Link>
              <Icon IconComp={ChevronRightIcon} boxSize={4} />
              <p className="capitalize">{stringifyCategory(categoryName)}</p>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <Heading size="h3" className="capitalize">
              {stringifyCategory(categoryName)}
            </Heading>
            <div className="relative flex items-center gap-2">
              <p className="text-sm">Filter:</p>
              <Menu>
                <MenuButton
                  as={Button}
                  variant="secondary"
                  size="small"
                  className="h-8 min-w-[130px] border-brand-light px-[6px] text-xs text-brand-darkest"
                  rightIcon={<Icon IconComp={ChevronDownIcon} boxSize={4} />}
                >
                  {sort
                    ? displayValue(categoryProducts.availableSortOptions, sort)
                    : "Apply Filter"}
                </MenuButton>
                <MenuItems menuClasses="right-0 bg-white divide-y divide-gray-100 mt-[18px]">
                  {categoryProducts.availableSortOptions.map((item) => (
                    <MenuItem
                      key={item.value}
                      value={item.value}
                      onClick={() => {
                        onChangeSort(item.value!);
                      }}
                      className="w-full border-0 text-center text-[13px]"
                    >
                      {item.display}
                    </MenuItem>
                  ))}
                </MenuItems>
              </Menu>
            </div>
          </div>
        </Section>
      </div>

      {/* second section */}

      <section className="relative pb-24 pt-6">
        <div ref={sectionRef} />
        <div className="absolute right-0 top-0 z-30 w-full">
          <BarLoader
            color="#003B65"
            loading={isRefetching}
            height={2}
            speedMultiplier={0.8}
            width="100%"
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>

        <Section className="grid grid-cols-12 gap-x-5">
          <div className="sticky top-24 col-span-3 h-fit space-y-3 border-t border-brand-darkest font-light">
            <Accordion title="Price">
              <div className="space-y-3 pt-1">
                <p className="text-sm">Custom Price Range</p>
                <div className="flex max-w-[230px] items-center gap-2">
                  <CustomInput
                    borderColor="border-brand-light"
                    bg="bg-white"
                    name="min"
                    type="number"
                    placeholder="min"
                    min={0}
                    max={max}
                    value={min}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                      onMinChange(e.target.value);
                    }}
                  />
                  <Icon IconComp={MinusIcon} />
                  <CustomInput
                    borderColor="border-brand-light"
                    bg="bg-white"
                    type="number"
                    name="max"
                    placeholder="max"
                    min={!!min && +min > -1 ? min : 0}
                    isDisabled={!min}
                    value={max}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                      onMaxChange(e.target.value);
                    }}
                  />
                </div>
              </div>
            </Accordion>
            <Accordion title="Rating">
              <Ratings rating={rating} setRating={setRating} />
            </Accordion>
          </div>
          <div className="col-span-9">
            <div className="product-grid grid grid-cols-3 gap-x-4 gap-y-12">
              {categoryProducts?.products.map((product) => (
                <ProductCard
                  name={product.name}
                  key={product.id}
                  id={product.id}
                  href={`/${product.slug}`}
                  // isFinished={product.stockQuantity === 0}
                  stockQuantity={product.stockQuantity}
                  price={product.calculatedProductPrice.priceString}
                  imageAlt={`${product.name} image`}
                  isCategoryPage
                />
              ))}
            </div>

            <div className="flex items-center justify-center">
              <Pagination
                onNext={onNext}
                onPrev={onPrev}
                currentPageNumber={currentPageNumber}
                isPrevDisabled={currentPageNumber === 1}
                isNextDisabled={currentPageNumber === totalPages}
                totalPages={totalPages}
              />
            </div>
          </div>
        </Section>
      </section>
    </div>
  );
}

export default CategoryMain;
