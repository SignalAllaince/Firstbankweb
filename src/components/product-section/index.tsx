import { RadioGroup } from "@headlessui/react";
import { StarIcon } from "@heroicons/react/20/solid";
import { PlusIcon } from "@heroicons/react/24/solid";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import Button from "../button";
import Icon from "../icon";

const product = {
  name: "FirstBank Brandshop",
  price: "₦ 25,000",
  href: "#",
  breadcrumbs: [
    { id: 1, name: "Women", href: "#" },
    { id: 2, name: "Clothing", href: "#" },
  ],
  images: [
    {
      src: "https://images.unsplash.com/photo-1481834209647-66e1705e7402?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2549&q=80",
      alt: "Two each of gray, white, and black shirts laying flat.",
    },
    {
      src: "https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg",
      alt: "Model wearing plain black basic tee.",
    },
    {
      src: "https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg",
      alt: "Model wearing plain white basic tee.",
    },
  ],
  colors: [
    { name: "Black", class: "bg-gray-900", selectedClass: "ring-gray-900" },
    { name: "White", class: "bg-white", selectedClass: "ring-gray-400" },
    { name: "Gray", class: "bg-gray-200", selectedClass: "ring-gray-400" },
  ],
  sizes: [
    { name: "XXS", inStock: true },
    { name: "XS", inStock: true },
    { name: "S", inStock: true },
    { name: "M", inStock: true },
    { name: "L", inStock: true },
    { name: "XL", inStock: false },
  ],
  description:
    'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
  highlights: [
    "Hand cut and sewn locally",
    "Dyed with our proprietary colors",
    "Pre-washed & pre-shrunk",
    "Ultra-soft 100% cotton",
    "Hand cut and sewn locally",
    "Dyed with our proprietary colors",
    "Pre-washed & pre-shrunk",
  ],
  details:
    'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
  section: [
    {
      header: "Care",
      content:
        "Foreon Network is a decentralized prediction market built on the Cardano blockchain. It allows anyone to create a market for anything and participate in the market using Djed stablecoin.",
    },
    {
      header: "Shipping",
      content:
        "Foreon Network uses a pari-mutuel model for prediction markets, which means that participants are betting against each other instead of against a centralized bookmaker. Additionally, automatic settlement ensures that participants receive their payouts immediately after the outcome is determined.",
    },
  ],
};

const reviews = { href: "#", average: 4, totalCount: 117 };

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

function ProductWithImageGallery() {
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedImg, setSelectedImg] = useState(product.images[0]);

  return (
    <div className="rounded-lg bg-white">
      <div className="py-4">
        <div className="mx-auto mt-6 max-w-2xl  space-y-8 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-16 lg:space-y-0 lg:px-8">
          <div className="space-y-7">
            <div className="rounded-none bg-gray-100 ">
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedImg.src}
                  initial={{ opacity: 0.3 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0.3 }}
                  className="aspect-h-1 aspect-w-1 max-h-[100px] overflow-hidden rounded-none "
                >
                  <Image
                    src={selectedImg.src}
                    alt={selectedImg.alt}
                    width={300}
                    height={300}
                    className="h-full w-full cursor-zoom-in object-cover object-center transition-all duration-200"
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            <RadioGroup
              value={selectedImg}
              onChange={setSelectedImg}
              className="mt-2"
            >
              <RadioGroup.Label className="sr-only">
                Choose an image preview{" "}
              </RadioGroup.Label>
              <div className="flex items-center justify-center gap-3 px-3 sm:px-0">
                {product.images.map((img) => (
                  <RadioGroup.Option
                    key={img.alt}
                    value={img}
                    className={({ active, checked }) =>
                      classNames(
                        active || checked ? "ring-2 ring-blue-500" : "",
                        "cursor-pointer overflow-hidden rounded-none"
                      )
                    }
                  >
                    <RadioGroup.Label as="span" className="sr-only">
                      {img.alt}
                    </RadioGroup.Label>
                    <div className="h-[80px] w-[100px]  overflow-hidden rounded-none">
                      <Image
                        src={img.src}
                        alt={img.alt}
                        width={300}
                        height={300}
                        className="h-full w-full object-cover object-center"
                      />
                    </div>
                  </RadioGroup.Option>
                ))}
              </div>
            </RadioGroup>
          </div>
          <div className="space-y-8 px-4 pb-10 sm:px-0">
            <div className="space-y-2">
              <div className="flex flex-col gap-4 text-2xl text-slate-800">
                <h2 className="text-3xl font-bold">{product.name}</h2>
                <div className="flex items-end space-x-3">
                  <div className="flex items-center">
                    {[0, 1, 2, 3, 4].map((rating) => (
                      <StarIcon
                        key={rating}
                        className={classNames(
                          reviews.average > rating
                            ? "text-brand-accent"
                            : "text-gray-200",
                          "h-4 w-4 flex-shrink-0"
                        )}
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                  <p className="text-xs ">(8 verified ratings)</p>

                  <p className="sr-only">{reviews.average} out of 5 stars</p>
                </div>
                <h2 className="text-[18px]">{product.price}</h2>
              </div>

              <div className="space-y-3 pt-4 font-light text-brand-darkest">
                <p className="text-md font-bold">Description</p>
                <p className="text-sm">{product.description}</p>
              </div>
            </div>
            {/* color radio */}
            <form className="mt-10">
              {/* Colors */}
              <div>
                <h3 className="text-sm font-medium text-gray-900">Color</h3>

                <RadioGroup
                  value={selectedColor}
                  onChange={setSelectedColor}
                  className="mt-2"
                >
                  <RadioGroup.Label className="sr-only">
                    Choose a color
                  </RadioGroup.Label>
                  <div className="flex items-center space-x-3">
                    {product.colors.map((color) => (
                      <RadioGroup.Option
                        key={color.name}
                        value={color}
                        className={({ active, checked }) =>
                          classNames(
                            color.selectedClass,
                            active && checked ? "ring-2" : "",
                            !active && checked ? "ring-2" : "",
                            "relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none"
                          )
                        }
                      >
                        <RadioGroup.Label as="span" className="sr-only">
                          {color.name}{" "}
                        </RadioGroup.Label>
                        <span
                          aria-hidden="true"
                          className={classNames(
                            color.class,
                            "block h-8 w-8 rounded-full border border-black border-opacity-10"
                          )}
                        />
                      </RadioGroup.Option>
                    ))}
                  </div>
                </RadioGroup>
              </div>

              {/* Sizes */}
              <div className="mt-10 flex items-center space-x-5">
                <Button
                  variant="primary"
                  className="w-full py-6 uppercase"
                  leftIcon={<Icon IconComp={PlusIcon} className="text-white" />}
                >
                  Add to Cart
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductWithImageGallery;
