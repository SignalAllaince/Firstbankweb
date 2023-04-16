import { cn } from "@/lib/utils/component.utils";
import { StarIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import Link from "next/link";
import productImg from "../../../public/images/product.jpeg";

function ProductCard({
  //   imageSrc,
  imageAlt = "",
  href = "#",
  isFinished = false,
}: // isWishList = false,
{
  imageSrc?: string;
  imageAlt?: string;
  href?: string;
  price?: string;
  isWishList?: boolean;
  isFinished?: boolean;
}) {
  // const handleAdd = (e: MouseEvent<HTMLButtonElement>) => {
  //   e.preventDefault();
  // };
  return (
    <Link
      href={href}
      className={`${
        isFinished ? "cursor-not-allowed opacity-50" : "group shadow-sm"
      }  relative overflow-hidden rounded-none border-0 bg-white`}
    >
      <div className="h-[220px] w-full min-w-[210px] overflow-hidden rounded-none bg-gray-200 transition-all duration-200 group-hover:opacity-75">
        <Image
          src={productImg}
          //   src={imageSrc}
          alt={imageAlt}
          width={400}
          height={400}
          //   className="aspect-h-1 aspect-w-1 object-cover object-center"
          className="aspect-h-1 aspect-w-1 "
        />
      </div>
      <div className="mt-5 space-y-6 px-3 pb-2">
        <div className="flex items-center justify-between">
          <p className="text-sm">Focus Card Tray</p>
          {/* <Button
            variant="secondary"
            size="small"
            className="relative h-auto border-0 px-[4px] py-1"
          >
            <Icon IconComp={isWishList ? HeartSolidIcon : HeartIcon} />
          </Button> */}
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
      {/* <Button
        leftIcon={<Icon IconComp={PlusIcon} className="text-white" />}
        className="w-full text-sm"
        onClick={handleAdd}
      >
        ADD
      </Button> */}
    </Link>
  );
}

export default ProductCard;
