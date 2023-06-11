import useAddItemToCart from "@/hooks/cart/useAddItemToCart";
import useGetCartList from "@/hooks/cart/useGetCartList";
import useNotification from "@/hooks/use-notification";
import useAddItemToWishlist from "@/hooks/wishlist/useAddItemToWishlist";
import { cn } from "@/lib/utils/component.utils";
import {
  HeartIcon as HeartSolidIcon,
  StarIcon,
} from "@heroicons/react/20/solid";
import { HeartIcon, PlusIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { MouseEvent, useState } from "react";
import productImg from "../../../public/images/shirt.jpg";
import Button from "../button";
import Icon from "../icon";

function ProductCard({
  //   imageSrc,
  imageAlt = "",
  href = "#",
  isFinished = false,
  isCategoryPage = false,
  name = "office shirt",
  stockQuantity = 27,
  price,
  id,
}: {
  imageSrc?: string;
  imageAlt?: string;
  href?: string;
  price?: number;
  isCategoryPage?: boolean;
  isFinished?: boolean;
  name?: string;
  stockQuantity?: number;
  id?: string | number;
}) {
  const addToCart = useAddItemToCart();
  const [like, setLike] = useState(false);
  const { toast } = useNotification();
  const addToWishlist = useAddItemToWishlist(id as number)
  const getCartList = useGetCartList(addToCart.value);

  const addToCartHandler = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    addToCart
      .mutateAsync({
        ProductId: id,
        Quantity: 1,
      })
      .then(() => {
        getCartList.refetch();
        toast({
          appearance: "success",
          description: `${name} was added to wishlist`,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleLike = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    addToWishlist.refetch().then(() => {
      setLike((prev) => !prev);
      toast({
        appearance: "info",
        description: "Item Successfully added to wishlist",
      });
    })
  };

  return (
    <Link
      href={href}
      // href="/category/others/umbrella"
      onClick={(e) => {
        isFinished && e.preventDefault();
      }}
      className={`${
        isFinished ? "cursor-not-allowed opacity-50" : "group shadow"
      }  relative flex w-full flex-col overflow-hidden rounded-[4px] bg-white`}
    >
      <div className="h-[220px] w-full overflow-hidden rounded-t-[4px] bg-gray-200 transition-all duration-200 group-hover:opacity-75">
        <Image
          src={productImg}
          //   src={imageSrc}
          alt={imageAlt}
          width={400}
          height={400}
          className=" h-[220px] w-full object-cover object-center"
        />
      </div>
      <div className="mt-5 flex-1 space-y-6 px-3 pb-2">
        <div className="flex items-center justify-between">
          <p className="text-sm capitalize">{name}</p>
          {isCategoryPage && (
            <Button
              variant="secondary"
              size="small"
              onClick={handleLike}
              className="relative h-auto border-0 px-[4px] py-1 ring-red-600"
            >
              <Icon IconComp={like ? HeartSolidIcon : HeartIcon} />
            </Button>
          )}
        </div>
        <div className="space-y-1 pb-3">
          <p className="font-medium text-gray-900">NGN {price ?? "25,000"}</p>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              {[0, 1, 2, 3, 4].map((rating) => (
                <StarIcon
                  key={rating}
                  className={cn(
                    4 > rating ? "text-yellow-400" : "text-blue-100",
                    "h-4 w-4 flex-shrink-0"
                  )}
                  aria-hidden="true"
                />
              ))}
            </div>
            <div className="bg-[#F5F8FA] p-1 px-2">
              <p className="text-xs font-light">{stockQuantity} Remaining</p>
            </div>
          </div>
        </div>
      </div>
      <div className="sticky bottom-0 left-0">
        {isCategoryPage && (
          <Button
            leftIcon={<Icon IconComp={PlusIcon} className="text-white" />}
            className="w-full text-sm"
            onClick={addToCartHandler}
            isLoading={addToCart.isLoading}
          >
            ADD
          </Button>
        )}
      </div>
    </Link>
  );
}

export default ProductCard;
