import Heading from "@/components/heading";
import Icon from "@/components/icon";
import { cn } from "@/lib/utils/component.utils";
import { CheckIcon } from "@heroicons/react/24/outline";
import { Dispatch, SetStateAction } from "react";

function StaffDetails({
  checked,
  setChecked,
}: {
  checked: boolean;
  setChecked: Dispatch<SetStateAction<boolean>>;
}) {
  const handleChange = () => setChecked((prev) => !prev);
  return (
    <div>
      {/* Staff details Section */}
      <div className="space-y-4 pt-6">
        <Heading size="h5">Staff/Customer Details</Heading>
        <div className="grid max-w-xl grid-cols-3 gap-x-4 gap-y-8 font-light capitalize">
          <div className="space-y-2">
            <p className="text-xs">First Name</p>
            <div className="text-sm">Emeka</div>
          </div>
          <div className="space-y-2">
            <p className="text-xs">Middle Name</p>
            <div className="text-sm">Christain</div>
          </div>
          <div className="space-y-2">
            <p className="text-xs">Last Name</p>
            <div className="text-sm">Nzekwe</div>
          </div>
          <div className="space-y-2">
            <p className="text-xs">Account Number</p>
            <div className="text-sm">0123456789</div>
          </div>
          <div className="space-y-2">
            <p className="text-xs">Email address</p>
            <div className="text-sm normal-case">emekanzekwe@gmail.com</div>
          </div>
        </div>
      </div>
      {/* Estimated delivery time */}
      <div className="space-y-4 pt-7 font-light">
        <Heading size="h5">Estimated delivery time</Heading>
        <p className="text-sm">
          Your order will arrive between April 10 and April 12.
        </p>
      </div>
      <div className="py-4">
        <div
          onClick={handleChange}
          className="flex cursor-pointer items-center gap-3"
        >
          <span
            aria-hidden="true"
            className={cn(
              "ring-brand-darkest",
              checked ? "ring-2" : "",
              checked ? "bg-brand-darkest" : "",
              "relative flex h-[18px] w-[18px] flex-shrink-0 items-center justify-center rounded border-2 border-black border-opacity-80  ring-offset-1 focus:outline-none"
            )}
          >
            {checked && <Icon IconComp={CheckIcon} className="text-white" />}
          </span>
          <p className="text-sm font-light">
            By ticking, you are confirming that you have read understood and
            agree with BrandShop’s terms and conditions
          </p>
        </div>
      </div>
    </div>
  );
}

export default StaffDetails;
