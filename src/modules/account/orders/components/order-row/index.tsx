import Button from "@/components/button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import productImg from "../../../../../../public/images/shirt.jpg";

function SingleOrder() {
  const router = useRouter();
  return (
    <div className="flex items-start justify-between border-b border-brand-light pb-4">
      <div className="item-start flex max-w-lg gap-3 text-sm font-light">
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
          <p className="text-xs text-brand-dark">Order No. - BS83748748</p>
          <div className="flex items-center gap-2">
            <p className="text-xs">
              To be delivered between Monday, April 8 and Thursday, April 11
            </p>
          </div>
        </div>
      </div>
      <div>
        <Button
          variant="secondary"
          size="xs"
          onClick={() => router.push("/account/orders/jsjsjsj")}
        >
          Order Details
        </Button>
      </div>
    </div>
  );
}

export default SingleOrder;
