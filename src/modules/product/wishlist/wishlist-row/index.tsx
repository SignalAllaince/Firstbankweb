import Button from "@/components/button";
import Icon from "@/components/icon";
import DeleteFromWishListModal from "@/components/modal/remove-wishlist";
import useDisclosure from "@/hooks/use-disclosure";
import useRemoveFromWishlist from "@/hooks/wishlist/useRemoveFromWishlist";
import { TrashIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

function WishListRow({
  name,
  refetchWishList,
  imageSrc,
  productId,
  price,
  slug,
  isRefetching,
}: {
  imageSrc: string;
  refetchWishList: () => void;
  name: string;
  productId: number;
  price: string;
  slug: string;
  isRefetching: boolean;
}) {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const removeFromWishlist = useRemoveFromWishlist(productId);

  const onRemoveHandler = () => {
    removeFromWishlist
      .mutateAsync({})
      .catch((err) => console.log(err))
      .then(() => {
        refetchWishList();
        onClose();
      });
  };

  return (
    <>
      <div className="flex items-start justify-between border-b border-brand-light pb-4">
        <div className="item-start flex max-w-md gap-3 text-[13px] font-light">
          <div className="flex h-[100px] w-[100px] flex-shrink-0 overflow-hidden rounded-[4px] bg-brand-light">
            <Image
              src={imageSrc}
              alt="product image"
              width={400}
              height={400}
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div className="flex h-[100px] flex-col justify-between">
            <p>{name}</p>
            <p className="text-xs font-medium">{price}</p>
          </div>
        </div>
        <div className="flex flex-shrink-0 flex-col items-end gap-y-5">
          <Button
            variant="cart"
            size="xs"
            href={`/${slug}`}
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
      <DeleteFromWishListModal
        isLoading={isRefetching || removeFromWishlist.isLoading}
        onRemoveHandler={onRemoveHandler}
        isOpen={isOpen}
        onClose={onClose}
      />
    </>
  );
}

export default WishListRow;
