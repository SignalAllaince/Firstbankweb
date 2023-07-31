import useDisclosure from "@/hooks/use-disclosure";
import { ProductDetailsRes } from "@/types/api.types";
import { RadioGroup } from "@headlessui/react";
import {
  HeartIcon as HeartSolidIcon,
  StarIcon,
} from "@heroicons/react/20/solid";
import { HeartIcon } from "@heroicons/react/24/outline";
import { PlusIcon } from "@heroicons/react/24/solid";

import useAddItemToCart from "@/hooks/cart/useAddItemToCart";
import useCounter from "@/hooks/use-couter";
import useNotification from "@/hooks/use-notification";
import useAddItemToWishlist from "@/hooks/wishlist/useAddItemToWishlist";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { MouseEvent, useState } from "react";
import Button from "../button";
import Heading from "../heading";
import Icon from "../icon";
import Modal from "../modal";
import CartProductBtn from "../product-btn";

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

function ProductWithImageGallery({
  productDetails,
}: {
  productDetails: ProductDetailsRes;
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedImg, setSelectedImg] = useState(product.images[0]);
  const [like, setLike] = useState(false);
  const { toast } = useNotification();
  const addToCart = useAddItemToCart();
  const { quantity, increaseQuantity, decreaseQuantity } = useCounter(5);
  const addToWishlist = useAddItemToWishlist(productDetails.id);

  const handleLike = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    addToWishlist.refetch().then(() => {
      setLike(true);
      toast({
        appearance: "info",
        description: `${productDetails.name} successfully added to wishlist`,
      });
    });
  };

  const addToCartHandler = () => {
    addToCart
      .mutateAsync({
        ProductId: productDetails.id,
        Quantity: quantity,
      })
      .then(() => {
        // toast({
        //   appearance: "success",
        //   description: `${productDetails.name} was added to wishlist`,
        // });
        onOpen();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <div className="rounded-lg bg-white">
        <div className="py-4">
          <div className="mx-auto mt-6 max-w-2xl  space-y-8 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-16 lg:space-y-0 lg:px-8">
            <div className="space-y-7">
              <div className="rounded-[4px] bg-gray-100 ">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={selectedImg.src}
                    initial={{ opacity: 0.3 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0.3 }}
                    className="aspect-h-1 aspect-w-1 max-h-[100px] overflow-hidden rounded-[4px] "
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
                          "cursor-pointer overflow-hidden rounded-[4px]"
                        )
                      }
                    >
                      <RadioGroup.Label as="span" className="sr-only">
                        {img.alt}
                      </RadioGroup.Label>
                      <div className="h-[80px] w-[100px]  overflow-hidden rounded-[4px]">
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
                  <Heading size="h2">{productDetails.name}</Heading>
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
                    <p className="text-xs ">
                      ({productDetails.reviewsCount} verified ratings)
                    </p>

                    <p className="sr-only">
                      {productDetails.reviewsCount} out of 5 stars
                    </p>
                  </div>
                  <h2 className="text-[18px]">
                    {productDetails.calculatedProductPrice.priceString}
                  </h2>
                </div>

                <div className="space-y-2 pt-4 font-light text-brand-darkest">
                  <Heading size="h5">Description</Heading>
                  <p className="text-sm">{productDetails.description}</p>
                </div>
              </div>
              <div className="flex items-center gap-8">
                <p className="text-sm text-brand-medium">Net weight: 2kg</p>
                <div className="bg-[#F5F8FA] p-1 px-2">
                  <p className="text-xs font-light">
                    {productDetails.stockQuantity} Remaining
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-8">
                <p className="font-light">Quantity:</p>
                <CartProductBtn
                  quantity={quantity}
                  onIncrease={increaseQuantity}
                  onDecrease={decreaseQuantity}
                />
              </div>
              {/* color radio */}
              <div className="mt-10">
                <div className="mt-10 flex items-center space-x-5">
                  <Button
                    variant="primary"
                    onClick={addToCartHandler}
                    isLoading={addToCart.isLoading}
                    className="w-full py-6 text-sm uppercase"
                    leftIcon={
                      <Icon IconComp={PlusIcon} className="text-white" />
                    }
                  >
                    Add to Cart
                  </Button>
                  <Button
                    onClick={handleLike}
                    variant="secondary"
                    className="relative  rounded-full px-[12px] ring-blue-200 focus:ring-1"
                    isLoading={addToWishlist.isFetching}
                    spinnerColor="#003B65"
                  >
                    <Icon IconComp={like ? HeartSolidIcon : HeartIcon} />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal isOpen={isOpen} closeModal={onClose} closeOnOverlayClick>
        <div className="space-y-8 py-6 md:px-5">
          <div className="text-md mx-auto max-w-md text-center font-light ">
            <p>Product has been successfully added to cart.</p>
            <p> What would you like to do?</p>
          </div>
          <div className="flex flex-col items-center gap-3 sm:flex-row">
            <Button
              className="w-full px-2 text-sm uppercase"
              variant="secondary"
              onClick={onClose}
            >
              Continue shopping
            </Button>
            <Button className="w-full px-2 text-sm uppercase" href="/cart">
              Proceed to cart
            </Button>
          </div>
        </div>
      </Modal>
    </>
  );
}

export default ProductWithImageGallery;
