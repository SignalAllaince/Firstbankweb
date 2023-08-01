import Image from "next/image";
import productImg from "../../../../../public/images/shirt.jpg";

function CheckoutProduct({
  name,
  quantity,
}: {
  name: string;
  quantity: number;
}) {
  return (
    <div className="flex items-start justify-between pb-4">
      <div className="item-start flex max-w-sm gap-3 text-sm font-light">
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
          <p className="break-words">{name}</p>
          <div className="flex items-center gap-2">
            <p>Quantity: {quantity}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckoutProduct;
