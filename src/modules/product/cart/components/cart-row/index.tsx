import Button from "@/components/button";
import Icon from "@/components/icon";
import BlurImage from "@/components/image";
import CartModal from "@/components/modal/cart";
import CartProductBtn from "@/components/product-btn";
import useDeleteItemFromCart from "@/hooks/cart/useDeleteItemFromCart";
import useUpdateItemInCart from "@/hooks/cart/useUpdateItemInCart";
import useCounter from "@/hooks/use-couter";
import useDebounce from "@/hooks/use-debounce";
import useDisclosure from "@/hooks/use-disclosure";
import { TrashIcon } from "@heroicons/react/24/outline";
import React from "react";

function CartProductRow({
  name,
  onCartRefetch,
  imageSrc,
  isLoading,
  productId,
  price,
  productQuantity,
  limit,
}: {
  imageSrc: string;
  onCartRefetch: any;
  name: string;
  productId: number;
  price: string;
  productQuantity: number;
  isLoading: boolean;
  limit: number;
}) {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const deleteFromCart = useDeleteItemFromCart(productId);
  const { quantity, increaseQuantity, decreaseQuantity } = useCounter(
    limit,
    productQuantity
  );
  const debouncedQuantity = useDebounce(quantity, 1000);
  const updateCartItem = useUpdateItemInCart();

  React.useEffect(() => {
    if (debouncedQuantity !== productQuantity) {
      updateCartItem
        .mutateAsync({
          cartItemId: productId,
          quantity: debouncedQuantity,
        })
        .then(() => {
          onCartRefetch();
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedQuantity]);

  const onRemoveHandler = () => {
    deleteFromCart
      .mutateAsync({})
      .catch((err) => console.log(err))
      .then(() => {
        onCartRefetch();
        onClose();
      });
  };

  return (
    <>
      <div className="flex items-center justify-between border-b">
        <div className="max-w-[400px] py-4 text-slate-700">
          <div className="item-start flex gap-3">
            <div className="flex h-[110px] w-[110px] flex-shrink-0 overflow-hidden rounded-[4px] bg-brand-light shadow-sm">
              <BlurImage
                src={imageSrc}
                alt="product image"
                width={400}
                height={400}
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="flex h-[110px] flex-col justify-between">
              <p className="capitalize text-black">{name}</p>

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
          <p className="text-lg font-bold">{price}</p>
          <div className="bg-full flex w-full items-center justify-center">
            <CartProductBtn
              quantity={quantity}
              onIncrease={increaseQuantity}
              onDecrease={decreaseQuantity}
            />
          </div>
        </div>
      </div>
      {/* Remove from cart modal */}
      <CartModal
        name={name}
        isLoading={isLoading || deleteFromCart.isLoading}
        onRemove={onRemoveHandler}
        isOpen={isOpen}
        onClose={onClose}
      />
      {/* Add to wishlist modal */}
    </>
  );
}

export default CartProductRow;
