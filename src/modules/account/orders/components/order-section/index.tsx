import Button from "@/components/button";
import BlurImage from "@/components/image";
import ItemReviewModal from "@/components/modal/review";
import useDisclosure from "@/hooks/use-disclosure";
import { OrderItem } from "@/types/api.types";

function OrderProductRow({ product }: { product: OrderItem }) {
  const { isOpen, onClose, onOpen } = useDisclosure();

  return (
    <>
      <div className="flex w-full items-start justify-between pb-4">
        <div className="item-start flex w-full  gap-3 text-[13px] font-light">
          <div className="flex h-[100px] w-[100px] flex-shrink-0 overflow-hidden rounded-[4px] bg-brand-light">
            <BlurImage
              src={product.productImage}
              // src={product.productImage ? product.productImage : productImg}
              alt="product image"
              width={400}
              height={400}
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div className="flex w-full items-end justify-between">
            <div className="flex h-[100px] flex-col justify-between">
              <p>{product.productName}</p>
              <p className="text-xs">Quantity: {product.quantity}</p>
              <p className="text-xs font-medium">{product.totalString}</p>
            </div>
            <Button
              onClick={onOpen}
              variant="cart"
              size="xs"
              className="border-brand-blue text-brand-blue"
            >
              Rate Item
            </Button>
          </div>
        </div>
      </div>
      <ItemReviewModal
        isOpen={isOpen}
        onClose={onClose}
        productId={product.productId}
        productName={product.productName}
        productImage={product.productImage}
      />
    </>
  );
}

export default OrderProductRow;
