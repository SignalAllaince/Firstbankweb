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
import { popularity, priceList } from "@/lib/constants/rating";
import { stringifyCategory } from "@/lib/utils/common.utils";
import { cn } from "@/lib/utils/component.utils";
import { RadioGroup } from "@headlessui/react";
import {
  ChevronDownIcon,
  ChevronRightIcon,
  MinusIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

function CategoryMain() {
  const [plan, setPlan] = useState(null);
  const [rating, setRating] = useState(null);
  const [categoryOpt, setCategoryOpt] = useState(null);
  const router = useRouter();
  return (
    <div>
      <div className="w-full bg-white">
        <Section className="space-y-7 py-7">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1 text-sm">
              <Link href="/">Home</Link>
              <Icon IconComp={ChevronRightIcon} boxSize={4} />
              <p className="capitalize">
                {stringifyCategory(router?.query?.categoryName as string)}
              </p>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <Heading size="h3" className="capitalize">
              {stringifyCategory(router?.query?.categoryName as string)}
            </Heading>
            <div className="flex items-center gap-2">
              <p className="text-sm">Filter:</p>
              <Menu>
                <MenuButton
                  as={Button}
                  variant="secondary"
                  size="small"
                  className="h-8 border-brand-light px-[6px] text-brand-darkest"
                  rightIcon={<Icon IconComp={ChevronDownIcon} boxSize={4} />}
                >
                  Best Seller
                </MenuButton>
                <MenuItems menuClasses="right-0 bg-white divide-y divide-gray-100 mt-[18px]">
                  <MenuItem>Best Seller</MenuItem>
                  <MenuItem>New Arrivals</MenuItem>
                  <MenuItem>Top Sales</MenuItem>
                </MenuItems>
              </Menu>
            </div>
          </div>
        </Section>
      </div>

      {/* second section */}

      <section className="pb-24 pt-6">
        <Section className="grid grid-cols-12 gap-x-5">
          <div className="sticky top-0 col-span-3 h-fit space-y-3 border-t border-brand-darkest font-light">
            <Accordion
              title={stringifyCategory(router?.query?.categoryName as string)}
            >
              <RadioGroup value={categoryOpt} onChange={setCategoryOpt}>
                <RadioGroup.Label className="sr-only">
                  {router?.query?.categoryName as string}
                </RadioGroup.Label>
                {/* <div className="space-y-4">
                  {getCategoryList(props?.category as CategoryTypes).map(
                    (plan) => (
                      <RadioGroup.Option value={plan} key={plan.name}>
                        {({ checked, active }) => (
                          <div className="flex cursor-pointer items-center gap-4">
                            <span
                              aria-hidden="true"
                              className={cn(
                                "ring-brand-darkest",
                                active && checked ? "ring-2" : "",
                                checked ? "bg-brand-darkest" : "",
                                !active && checked ? "ring-2" : "",
                                "relative block h-4 w-4 rounded-full border-2 border-black border-opacity-80 ring-offset-2 focus:outline-none"
                              )}
                            />
                            <span className="text-sm">{plan.name}</span>
                          </div>
                        )}
                      </RadioGroup.Option>
                    )
                  )}
                </div> */}
              </RadioGroup>
            </Accordion>
            <div className="border-b border-brand-darkest pb-5 pt-2">
              <RadioGroup value={plan} onChange={setPlan}>
                <RadioGroup.Label className="sr-only">Plan</RadioGroup.Label>
                <RadioGroup.Option value={popularity}>
                  {({ checked, active }) => (
                    <div className="flex cursor-pointer items-center gap-4">
                      <span
                        aria-hidden="true"
                        className={cn(
                          "ring-brand-darkest",
                          active && checked ? "ring-2" : "",
                          checked ? "bg-brand-darkest" : "",
                          !active && checked ? "ring-2" : "",
                          "relative block h-4 w-4 rounded-full border-2 border-black border-opacity-80 ring-offset-2 focus:outline-none"
                        )}
                      />
                      <span className="text-sm">{popularity.name}</span>
                    </div>
                  )}
                </RadioGroup.Option>
              </RadioGroup>
            </div>
            <Accordion title="Price">
              <RadioGroup value={plan} onChange={setPlan}>
                <RadioGroup.Label className="sr-only">Plan</RadioGroup.Label>
                <div className="space-y-4">
                  {priceList.map((plan) => (
                    <RadioGroup.Option value={plan} key={plan.name}>
                      {({ checked, active }) => (
                        <div className="flex cursor-pointer items-center gap-4">
                          <span
                            aria-hidden="true"
                            className={cn(
                              "ring-brand-darkest",
                              active && checked ? "ring-2" : "",
                              checked ? "bg-brand-darkest" : "",
                              !active && checked ? "ring-2" : "",
                              "relative block h-4 w-4 rounded-full border-2 border-black border-opacity-80 ring-offset-2 focus:outline-none"
                            )}
                          />
                          <span className="text-sm">{plan.name}</span>
                        </div>
                      )}
                    </RadioGroup.Option>
                  ))}
                </div>
              </RadioGroup>
              <div className="space-y-3 pt-10">
                <p className="text-sm">Custom Price Range</p>
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
          <div className="col-span-9">
            <div className="grid grid-cols-3 gap-x-4 gap-y-12">
              <ProductCard isProductPage />
              <ProductCard isProductPage />
              <ProductCard isProductPage />
              <ProductCard isProductPage />
              <ProductCard isProductPage />
              <ProductCard isProductPage />
              <ProductCard isProductPage />
              <ProductCard isProductPage />
              <ProductCard isProductPage />
            </div>

            <div className="flex items-center justify-center">
              <Pagination />
            </div>
          </div>
        </Section>
      </section>
    </div>
  );
}

export default CategoryMain;
