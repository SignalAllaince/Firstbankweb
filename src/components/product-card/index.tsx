import { cn } from "@/lib/utils/component.utils";
import {
  HeartIcon as HeartSolidIcon,
  StarIcon,
} from "@heroicons/react/20/solid";
import { HeartIcon, PlusIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { MouseEvent } from "react";
import productImg from "../../../public/images/shirt.jpg";
import Button from "../button";
import Icon from "../icon";

function ProductCard({
  //   imageSrc,
  imageAlt = "",
  href = "#",
  isFinished = false,
  isProductPage = false,
}: {
  imageSrc?: string;
  imageAlt?: string;
  href?: string;
  price?: string;
  isProductPage?: boolean;
  isFinished?: boolean;
}) {
  const handleAdd = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
  };

  return (
    <Link
      href={href}
      className={`${
        isFinished ? "cursor-not-allowed opacity-50" : "group shadow"
      }  relative overflow-hidden rounded-none bg-white`}
    >
      <div className="h-[220px] w-full min-w-[240px] overflow-hidden rounded-none bg-red-900 transition-all duration-200 group-hover:opacity-75">
        <Image
          src={productImg}
          //   src={imageSrc}
          alt={imageAlt}
          width={400}
          height={400}
          className=" h-[220px] object-cover object-center"
          // className="aspect-h-1 aspect-w-1 "
        />
      </div>
      <div className="mt-5 space-y-6 px-3 pb-2">
        <div className="flex items-center justify-between">
          <p className="text-sm capitalize">Office Shirt</p>
          {isProductPage && (
            <Button
              variant="secondary"
              size="small"
              className="relative h-auto border-0 px-[4px] py-1"
            >
              <Icon IconComp={isProductPage ? HeartSolidIcon : HeartIcon} />
            </Button>
          )}
        </div>
        <div className="space-y-1 pb-3">
          <p className="font-medium text-gray-900">NGN 25,000</p>
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
              <p className="text-xs font-light">27 Remaining</p>
            </div>
          </div>
        </div>
      </div>
      {isProductPage && (
        <Button
          leftIcon={<Icon IconComp={PlusIcon} className="text-white" />}
          className="w-full text-sm"
          onClick={handleAdd}
        >
          ADD
        </Button>
      )}
    </Link>
  );
}

export default ProductCard;
