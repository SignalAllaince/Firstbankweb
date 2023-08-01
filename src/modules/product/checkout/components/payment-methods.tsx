import Heading from "@/components/heading";
import { cn } from "@/lib/utils/component.utils";
import { RadioGroup } from "@headlessui/react";
import { Dispatch, SetStateAction } from "react";

const methods = [
  {
    name: "Card Payment",
    value: "card",
    disabled: true,
  },
  {
    name: "USSD",
    disabled: true,
    value: "16GB",
  },
  {
    name: "Account Transfer",
    disabled: false,
    value: "transfer",
  },
  {
    name: "First Checkout",
    disabled: true,
    value: "first-checkout",
  },
  {
    name: "QR Code",
    disabled: true,
    value: "QR",
  },
  {
    name: "Sol ID (for  Branch purchases)",
    disabled: true,
    value: "solId",
  },
];

function PaymentMethods({
  paymentMethod,
  setPaymentMethod,
}: {
  paymentMethod: null;
  setPaymentMethod: Dispatch<SetStateAction<null>>;
}) {
  return (
    <div className="space-y-6 pb-6">
      <Heading size="h5">Payment method</Heading>
      <RadioGroup
        value={paymentMethod}
        onChange={setPaymentMethod}
        className="w-fit"
      >
        <RadioGroup.Label className="sr-only">Plan</RadioGroup.Label>
        <div className="space-y-6">
          {methods.map((method) => (
            <RadioGroup.Option
              disabled={method.disabled}
              value={method}
              key={method.name}
            >
              {({ checked, active }) => (
                <div
                  className={cn(
                    method.disabled ? "cursor-not-allowed" : "cursor-pointer",
                    "flex w-fit items-center gap-4"
                  )}
                >
                  <span
                    aria-hidden="true"
                    className={cn(
                      "ring-brand-darkest",
                      active && checked ? "ring-2" : "",
                      checked ? "bg-brand-darkest" : "",
                      !active && checked ? "ring-2" : "",
                      method.disabled ? "opacity-50" : "",
                      "relative block h-[14px] w-[14px] rounded-full border-2 border-black border-opacity-80 ring-offset-2 focus:outline-none"
                    )}
                  />
                  <span
                    className={cn(
                      method.disabled ? "opacity-50" : "",
                      "text-sm font-light"
                    )}
                  >
                    {method.name}
                  </span>
                </div>
              )}
            </RadioGroup.Option>
          ))}
        </div>
      </RadioGroup>
    </div>
  );
}

export default PaymentMethods;
