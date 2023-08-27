import Button from "@/components/button";
import Heading from "@/components/heading";
import Icon from "@/components/icon";
import CheckoutAddressModal from "@/components/modal/address";
import useDisclosure from "@/hooks/use-disclosure";
import { useCheckout } from "@/lib/context/checkout-context";
import { PencilIcon } from "@heroicons/react/24/outline";

function AddressDetails() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { checkoutDetails } = useCheckout();

  const total =
    checkoutDetails.subTotal +
    checkoutDetails.taxAmount +
    checkoutDetails.shippingTotal;
  return (
    <>
      <CheckoutAddressModal
        isOpen={isOpen}
        onClose={onClose}
        orderId={checkoutDetails.orderId}
        // isLoading={false}
      />
      <div className="relative space-y-4 pt-7 font-light">
        <>
          <Heading size="h5">Delivery Details</Heading>
          <div className="flex justify-between">
            <div className="space-y-1">
              <p className="text-xs">Delivery Address</p>
              <p className="text-sm">
                {/* {checkoutDetails.existingBillingAddresses[0].addressLine1} */}
              </p>
            </div>

            <div className="space-y-1">
              <p className="text-xs">City</p>
              <p className="text-sm">
                {/* {checkoutDetails.existingBillingAddresses[0].cityName} */}
              </p>
            </div>
            <div className="space-y-1">
              <p className="text-xs">State</p>
              <p className="text-sm">
                {/* {checkoutDetails.existingBillingAddresses[0].stateName} */}
              </p>
            </div>
          </div>

          <div className="space-y-1">
            <p className="text-xs">Phone Number</p>
            <p className="text-sm">
              {/* {checkoutDetails.existingBillingAddresses[0].phone} */}
            </p>
          </div>
          <div className="space-y-2 text-sm">
            <div className="flex items-center gap-4">
              <p className="w-[170px]">Delivery/Shipping Cost:</p>
              <p className="font-medium">
                {checkoutDetails.shippingTotalString}
              </p>
            </div>
            <div className="flex items-center gap-4">
              <p className="w-[170px]">Product Tax (7.5%):</p>
              <p className="font-medium">{checkoutDetails.taxAmountString}</p>
            </div>
          </div>
          <div className="flex items-center justify-between border-b border-t border-brand-light py-4">
            <h2 className="font-bold uppercase">TOTAL COST</h2>
            <h2 className="text-lg font-bold">₦ {total.toLocaleString()}.00</h2>
          </div>
        </>
        <div className="absolute right-0 top-0">
          <Button
            onClick={onOpen}
            variant="cart"
            size="xs"
            className="border-brand-blue text-brand-blue"
            leftIcon={<Icon IconComp={PencilIcon} boxSize={4} />}
          >
            Change
          </Button>
        </div>
      </div>
    </>
  );
}

export default AddressDetails;
