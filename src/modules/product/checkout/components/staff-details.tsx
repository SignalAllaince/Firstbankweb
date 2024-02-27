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
              "ring-brand-blue",
              checked ? "ring-2" : "",
              checked ? "bg-brand-blue" : "",
              "relative flex h-[18px] w-[18px] flex-shrink-0 items-center justify-center rounded border-2 border-brand-darkest border-opacity-80  ring-offset-1 focus:outline-none"
            )}
          >
            {checked && <Icon IconComp={CheckIcon} className="text-white" />}
          </span>
          <p className="text-sm font-light">
            By ticking, you are confirming that you have read understood and
            agree with BrandShop&apos;s terms and conditions
          </p>
        </div>
      </div>
    </div>
  );
}

export default StaffDetails;
