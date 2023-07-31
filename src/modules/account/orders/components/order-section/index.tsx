import { OrderItem } from "@/types/api.types";
import Image from "next/image";
import productImg from "../../../../../../public/images/shirt.jpg";

function OrderProductRow({ product }: { product: OrderItem }) {
  return (
    <div className="flex items-start justify-between pb-4">
      <div className="item-start flex max-w-md gap-3 text-[13px] font-light">
        <div className="flex h-[100px] w-[100px] flex-shrink-0 overflow-hidden rounded-[4px] bg-brand-light">
          <Image
            src={productImg}
            // src={product.productImage ? product.productImage : productImg}
            alt="product image"
            width={400}
            height={400}
            className="h-full w-full object-cover object-center"
          />
        </div>
        <div className="flex h-[100px] flex-col justify-between">
          <p>{product.productName}</p>
          <p className="text-xs">Quantity: {product.quantity}</p>
          <p className="text-xs font-medium">{product.totalString}</p>
        </div>
      </div>
    </div>
  );
}

export default OrderProductRow;
