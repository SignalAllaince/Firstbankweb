/* eslint-disable no-unused-vars */
import Accordion from "@/components/accordion";
import Button from "@/components/button";
import FadeInOut from "@/components/fade";
import Heading from "@/components/heading";
import Icon from "@/components/icon";
import IfElse from "@/components/if-else";
import CustomInput from "@/components/input";
import { Menu, MenuButton, MenuItem, MenuItems } from "@/components/menu";
import Pagination from "@/components/paginate";
import ProductCard from "@/components/product-card";
import Ratings from "@/components/rating";
import Section from "@/components/section";
import { usePagination } from "@/hooks/use-pagination";
import { displayValue, truncateWord } from "@/lib/utils/common.utils";
import { SearchResponse } from "@/types/api.types";
import {
  ChevronDownIcon,
  ChevronRightIcon,
  MinusIcon,
} from "@heroicons/react/24/outline";
import { AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BarLoader } from "react-spinners";
import searchImg from "../../../../public/images/search.svg";

const SearchMainSection = ({
  search,
  searchResult,
  sort,
  onChangeSort,
  isRefetching,
  max,
  onMaxChange,
  min,
  onMinChange,
}: {
  search: string;
  searchResult: SearchResponse;
  onChangeSort: (value: string) => void;
  isRefetching: boolean;
  sort?: string;
  max: string;
  onMaxChange: (value: string) => void;
  min: string;
  onMinChange: (value: string) => void;
}) => {
  const [rating, setRating] = React.useState(null);
  const { onNext, onPrev, currentPageNumber, totalPages } = usePagination();
  const sectionRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    sectionRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  }, [currentPageNumber]);

  return (
    <div className="">
      <div className="w-full bg-white">
        <Section className="space-y-7 py-7">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1 text-sm">
              <Link href="/">Home</Link>
              <Icon IconComp={ChevronRightIcon} boxSize={4} />
              <p>Search result</p>
            </div>
            <div>
              <p className="text-sm text-brand-medium">
                {searchResult.totalProduct !== 0 && (
                  <>1-{Math.min(searchResult.totalProduct, 10)} of </>
                )}
                {searchResult.totalProduct} results
              </p>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <Heading size="h4">
              Search Results -{" "}
              <span className="capitalize">{truncateWord(search, 40)}</span>
            </Heading>
            <div className="relative flex items-center gap-2">
              <p className="text-sm">Filter:</p>
              <Menu>
                <MenuButton
                  as={Button}
                  variant="secondary"
                  size="small"
                  className="h-8 min-w-[130px] border-brand-light px-[6px] text-brand-darkest"
                  rightIcon={<Icon IconComp={ChevronDownIcon} boxSize={4} />}
                >
                  {sort
                    ? displayValue(searchResult.availableSortOptions, sort)
                    : "Apply Filter"}
                </MenuButton>
                <MenuItems menuClasses="right-0 bg-white divide-y divide-gray-100 mt-[18px]">
                  {searchResult.availableSortOptions.map((item) => (
                    <MenuItem
                      key={item.value}
                      value={item.value}
                      onClick={() => {
                        onChangeSort(item.value!);
                      }}
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
      <section className="relative pb-20 pt-6">
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
        <Section className="grid grid-cols-12 gap-x-8">
          <div className="sticky top-0 col-span-4 h-fit space-y-3 font-light md:col-span-3">
            <Accordion title="Price">
              <div className="space-y-3 pt-1">
                <p>Custom Price Range</p>
                <div className="flex max-w-[230px] items-center gap-2">
                  <CustomInput
                    borderColor="border-brand-light"
                    bg="bg-white"
                    name="min"
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
          <div className="col-span-8 md:col-span-9">
            <AnimatePresence>
              <IfElse
                ifOn={searchResult.products.length !== 0}
                ifOnElse={searchResult.products.length === 0}
                onElse={
                  <FadeInOut>
                    <Section className="my-4 flex w-full flex-col items-center justify-center space-y-12  py-10">
                      <div className="max-w-xl">
                        <Image src={searchImg} alt={"djsdsd"} />
                      </div>
                      <div className="flex flex-col items-center space-y-3 text-center">
                        <Heading size="h3">
                          There are no results for “{search}”
                        </Heading>
                        <p>
                          try searching for more general terms or shop from the
                          categories above.
                        </p>
                      </div>
                    </Section>
                  </FadeInOut>
                }
              >
                <FadeInOut>
                  <div className="product-grid grid gap-x-4 gap-y-12">
                    {searchResult.products.map((product) => (
                      <ProductCard
                        isCategoryPage
                        href={`/${product.slug}`}
                        id={product.id}
                        imageAlt={product.name}
                        key={product.id}
                        name={product.name}
                        stockQuantity={product.stockQuantity}
                        price={product.calculatedProductPrice.priceString}
                      />
                    ))}
                  </div>
                  {/* Pagination */}
                  <div className="flex items-center justify-center">
                    <Pagination
                      onNext={onNext}
                      onPrev={onPrev}
                      currentPageNumber={Math.min(
                        currentPageNumber,
                        totalPages
                      )}
                      isPrevDisabled={currentPageNumber === 1}
                      isNextDisabled={
                        currentPageNumber === totalPages || totalPages === 0
                      }
                      totalPages={totalPages}
                    />
                  </div>
                </FadeInOut>
              </IfElse>
            </AnimatePresence>
          </div>
        </Section>
      </section>
    </div>
  );
};

export default SearchMainSection;
