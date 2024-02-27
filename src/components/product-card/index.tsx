import useAddItemToCart from "@/hooks/cart/useAddItemToCart";
import useGetCartList from "@/hooks/cart/useGetCartList";
import useNotification from "@/hooks/use-notification";
import useAddItemToWishlist from "@/hooks/wishlist/useAddItemToWishlist";
import {
  HeartIcon as HeartSolidIcon,
  StarIcon,
} from "@heroicons/react/20/solid";
import { HeartIcon, PlusIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { MouseEvent, useState } from "react";
import Button from "../button";
import Icon from "../icon";
import BlurImage from "../image";

function ProductCard({
  imageSrc,
  imageAlt = "",
  href = "#",
  isFinished = false,
  isCategoryPage = false,
  name = "office shirt",
  stockQuantity = 0,
  price,
  rating,
  id,
}: {
  imageSrc: string;
  imageAlt?: string;
  href?: string;
  price?: string;
  isCategoryPage?: boolean;
  isFinished?: boolean;
  name?: string;
  stockQuantity?: number;
  id?: string | number;
  rating: string | null | number;
}) {
  const addToCart = useAddItemToCart();
  const [like, setLike] = useState(false);
  const { toast } = useNotification();
  const addToWishlist = useAddItemToWishlist(id as number);
  const getCartList = useGetCartList(addToCart.value);

  const ratingAverage = rating ? (rating as number) : 0;

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
          title: "Added to cart",
          description: `${name} was added to cart`,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleLike = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    addToWishlist.refetch().then(() => {
      setLike(true);
      toast({
        appearance: "info",
        description: `${name} successfully added to wishlist`,
      });
    });
  };

  return (
    <Link
      href={href}
      // href="/category/others/umbrella"
      onClick={(e) => {
        isFinished && e.preventDefault();
      }}
      className={`${
        isFinished ? "cursor-not-allowed opacity-50" : "shadow"
      }  group relative flex w-full flex-col overflow-hidden rounded-[4px] bg-white`}
    >
      <div className="h-[180px] w-full overflow-hidden rounded-t-[4px] bg-gray-300 transition-all duration-200 group-hover:opacity-80">
        <BlurImage
          src={imageSrc}
          alt={imageAlt}
          width={400}
          height={400}
          className="h-[200px] w-full object-cover object-center transition-all duration-300 group-hover:scale-105"
        />
      </div>
      <div className="mt-5 flex flex-1 flex-col justify-between space-y-5 px-[10px] pb-2">
        <div className="flex items-center justify-between">
          <p className="text-sm capitalize">{name}</p>
          {isCategoryPage && (
            <Button
              variant="secondary"
              size="small"
              isLoading={addToWishlist.isFetching}
              onClick={handleLike}
              spinnerColor="#003B65"
              className="relative h-auto border-0 px-[4px] py-1 ring-red-600"
            >
              <Icon IconComp={like ? HeartSolidIcon : HeartIcon} />
            </Button>
          )}
        </div>
        <div className="space-y-1 pb-3">
          <p className="font-medium text-gray-900">{price}</p>
          <div className="flex items-center justify-between">
            {rating !== undefined && (
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
            )}
            {stockQuantity !== undefined && stockQuantity > 0 && (
              <div className="bg-[#F5F8FA] p-1 px-2">
                <p className="text-[10px] font-light">
                  {stockQuantity} Remaining
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
      {isCategoryPage && (
        <div className="sticky bottom-0 left-0">
          <Button
            leftIcon={<Icon IconComp={PlusIcon} className="text-white" />}
            className="w-full text-sm"
            onClick={addToCartHandler}
            isLoading={addToCart.isLoading}
          >
            ADD
          </Button>
        </div>
      )}
    </Link>
  );
}

export default ProductCard;
