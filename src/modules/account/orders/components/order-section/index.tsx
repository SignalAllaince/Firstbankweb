import Image from "next/image";
import productImg from "../../../../../../public/images/shirt.jpg";

function OrderProductRow() {
  return (
    <div className="flex items-start justify-between pb-4">
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
    </div>
  );
}

export default OrderProductRow;
