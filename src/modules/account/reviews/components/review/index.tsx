import Button from "@/components/button";
import Icon from "@/components/icon";
import WishListModal from "@/components/modal/wishlist";
import useDisclosure from "@/hooks/use-disclosure";
import { TrashIcon } from "@heroicons/react/24/outline";

function WishListRow() {
  const { isOpen, onClose, onOpen } = useDisclosure();

  return (
    <>
      <div className="flex items-start justify-between border-b border-brand-light pb-4">
        <div className="item-start flex max-w-md gap-3 text-[13px] font-light">
          <div className="flex h-[100px] w-[100px] flex-shrink-0 overflow-hidden rounded-[4px] bg-brand-light"></div>
          <div className="flex h-[100px] flex-col justify-between">
            <p>
              This Description should carry only the full name of the product.
            </p>
            <p className="text-xs">Quantity: 1</p>
            <p className="text-xs font-medium">₦ 10,000</p>
          </div>
        </div>
        <div className="flex flex-col items-end gap-y-5">
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
            className="border-brand-error text-brand-error"
            leftIcon={<Icon IconComp={TrashIcon} boxSize={4} />}
            onClick={onOpen}
          >
            Remove Item
          </Button>
        </div>
      </div>
      <WishListModal isOpen={isOpen} onClose={onClose} />
    </>
  );
}

export default WishListRow;
