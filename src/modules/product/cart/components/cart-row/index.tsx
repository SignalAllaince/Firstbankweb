import Button from "@/components/button";
import Icon from "@/components/icon";
import CartModal from "@/components/modal/cart";
import WishListModal from "@/components/modal/wishlist";
import CartProductBtn from "@/components/product-btn";
import useDisclosure from "@/hooks/use-disclosure";
import { HeartIcon, TrashIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import productImg from "../../../../../../public/images/shirt.jpg";

function CartProductRow() {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const {
    isOpen: isModalOpn,
    onClose: onModalClose,
    onOpen: onModalOpn,
  } = useDisclosure();

  return (
    <>
      <tr className="border-b">
        <td className="w-[550px] whitespace-pre-line py-4 text-slate-700 md:w-[480px] lg:w-[450px]">
          <div className="item-start flex gap-3">
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
              <p className="break-words">
                This Description should carry only the full name of the product.
              </p>
              <div className="flex items-center gap-2">
                <Button
                  variant="cart"
                  size="xs"
                  className="border-brand-error text-brand-error"
                  leftIcon={<Icon IconComp={TrashIcon} boxSize={4} />}
                  onClick={onOpen}
                >
                  Remove Item
                </Button>
                <Button
                  variant="cart"
                  size="xs"
                  className="border-brand-darkest text-brand-darkest"
                  rightIcon={<Icon IconComp={HeartIcon} boxSize={4} />}
                  onClick={onModalOpn}
                >
                  Add to wishlist
                </Button>
              </div>
            </div>
          </div>
        </td>
        <td className="flex w-[200px] items-end justify-center whitespace-nowrap py-4">
          {/* Cart btn */}
          <div className="mt-7">
            <CartProductBtn />
          </div>
        </td>
        <td className="w-[200px] whitespace-nowrap py-4 text-center">
          <p className="text-lg font-bold">₦ 25,000</p>
        </td>
      </tr>
      {/* Remove from cart modal */}
      <CartModal isOpen={isOpen} onClose={onClose} />
      {/* Add to wishlist modal */}
      <WishListModal isOpen={isModalOpn} onClose={onModalClose} />
    </>
  );
}

export default CartProductRow;
