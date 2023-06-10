import Button from "@/components/button";
import Icon from "@/components/icon";
import CartModal from "@/components/modal/cart";
import CartProductBtn from "@/components/product-btn";
import useDisclosure from "@/hooks/use-disclosure";
import { TrashIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import productImg from "../../../../../../public/images/shirt.jpg";

function CartProductRow() {
  const { isOpen, onClose, onOpen } = useDisclosure();

  return (
    <>
      <div className="flex items-center justify-between border-b">
        <div className="max-w-[400px] py-4 text-slate-700">
          <div className="item-start flex gap-3">
            <div className="flex h-[110px] w-[110px] flex-shrink-0 overflow-hidden rounded-[4px] bg-brand-light">
              <Image
                src={productImg}
                alt="product image"
                width={400}
                height={400}
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="flex h-[110px] flex-col justify-between">
              <p className="break-words">
                This Description should carry only the full name of the product.
              </p>
              <div className="w-fit bg-[#F5F8FA]  px-2">
                <p className="text-[10px] font-light">11 Remaining</p>
              </div>
              <div className="flex items-center gap-2">
                <Button
                  variant="cart"
                  size="xs"
                  className="border-brand-error text-brand-error"
                  leftIcon={<Icon IconComp={TrashIcon} boxSize={4} />}
                  onClick={onOpen}
                >
                  Remove
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="w-[200px] space-y-4 py-4 text-center">
          <p className="text-lg font-bold">₦ 25,000</p>
          <div className="bg-full flex w-full items-center justify-center">
            <CartProductBtn quantity={1} />
          </div>
        </div>
      </div>
      {/* Remove from cart modal */}
      <CartModal isOpen={isOpen} onClose={onClose} />
      {/* Add to wishlist modal */}
    </>
  );
}

export default CartProductRow;
