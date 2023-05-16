import Button from "@/components/button";
import Icon from "@/components/icon";
import DeleteFromWishListModal from "@/components/modal/remove-wishlist";
import useDisclosure from "@/hooks/use-disclosure";
import { TrashIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import productImg from "../../../../../public/images/shirt.jpg";

function WishListRow() {
  const { isOpen, onClose, onOpen } = useDisclosure();

  return (
    <>
      <div className="flex items-start justify-between border-b border-brand-light pb-4">
        <div className="item-start flex max-w-md gap-3 text-[13px] font-light">
          <div className="flex h-[100px] w-[100px] flex-shrink-0 overflow-hidden rounded-[4px] bg-brand-light">
            <Image
              src={productImg}
              alt="product image"
              width={400}
              height={400}
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div className="flex h-[100px] flex-col justify-between">
            <p>
              This Description should carry only the full name of the product.
            </p>
            <p className="text-xs">Quantity: 1</p>
            <p className="text-xs font-medium">₦ 10,000</p>
          </div>
        </div>
        <div className="flex flex-shrink-0 flex-col items-end gap-y-5">
          <Button
            variant="cart"
            size="xs"
            href="/category/others/umbrella"
            className="border-brand-darkest text-brand-darkest"
          >
            View Item
          </Button>
          <Button
            variant="cart"
            size="xs"
            className="flex-shrink-0 border-brand-error text-brand-error"
            leftIcon={<Icon IconComp={TrashIcon} boxSize={4} />}
            onClick={onOpen}
          >
            Remove Item
          </Button>
        </div>
      </div>
      <DeleteFromWishListModal isOpen={isOpen} onClose={onClose} />
    </>
  );
}

export default WishListRow;
