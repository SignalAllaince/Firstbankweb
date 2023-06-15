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
import { displayValue } from "@/lib/utils/common.utils";
import { SearchResponse } from "@/types/api.types";
import {
  ChevronDownIcon,
  ChevronRightIcon,
  MinusIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { useState } from "react";
import { ClipLoader } from "react-spinners";

const SearchMainSection = ({
  search,
  searchResult,
  sort,
  onChangeSort,
  isRefetching,
}: {
  search: string;
  searchResult: SearchResponse;
  // eslint-disable-next-line no-unused-vars
  onChangeSort: (value: string) => void;
  isRefetching: boolean;
  sort?: string;
}) => {
  const [rating, setRating] = useState(null);

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
                1-{Math.min(searchResult.totalProduct, 10)} of{" "}
                {searchResult.totalProduct} results
              </p>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <Heading size="h4">
              Search Results - <span className="capitalize">{search}</span>
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
              <div className="absolute -right-6 top-1">
                <ClipLoader
                  color="#003B65"
                  loading={isRefetching}
                  size={20}
                  aria-label="Loading Spinner"
                  data-testid="loader"
                />
              </div>
            </div>
          </div>
        </Section>
      </div>

      {/* second section */}
      <section className="pb-20 pt-6">
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
                  />
                  <Icon IconComp={MinusIcon} />
                  <CustomInput
                    borderColor="border-brand-light"
                    bg="bg-white"
                    name="max"
                    placeholder="max"
                  />
                </div>
              </div>
            </Accordion>
            <Accordion title="Rating">
              <Ratings rating={rating} setRating={setRating} />
            </Accordion>
          </div>
          <div className="col-span-8 md:col-span-9">
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
              <Pagination />
            </div>
          </div>
        </Section>
      </section>
    </div>
  );
};

export default SearchMainSection;
