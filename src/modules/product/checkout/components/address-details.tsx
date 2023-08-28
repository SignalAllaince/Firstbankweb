import Button from "@/components/button";
import Heading from "@/components/heading";
import Icon from "@/components/icon";
import CheckoutAddressModal from "@/components/modal/address";
import SelectAddressTypeModal from "@/components/modal/select-address-type";
import useDisclosure from "@/hooks/use-disclosure";
import { useCheckout } from "@/lib/context/checkout-context";
import { PencilIcon } from "@heroicons/react/24/outline";

function AddressDetails() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: isSelectOpen,
    onOpen: onSelectOpen,
    onClose: onSelectClose,
  } = useDisclosure();
  const { checkoutDetails } = useCheckout();
  const usedAddress =
    checkoutDetails.selectedShippingAddressId === 0
      ? {
          addressLine1: "",
          cityName: "",
          stateName: "",
          phone: "",
        }
      : checkoutDetails.existingShippingAddresses?.find(
          (item) => item.id === checkoutDetails.selectedShippingAddressId
        );
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
      />
      <SelectAddressTypeModal
        isOpen={isSelectOpen}
        onClose={onSelectClose}
        onAddressOpen={onOpen}
        address={checkoutDetails}
      />
      <div className="relative space-y-4 pt-7 font-light">
        <>
          <Heading size="h5">Delivery Details</Heading>

          {checkoutDetails.selectedShippingAddressId === 0 ? (
            <p className="text-sm font-bold text-red-400">
              No shipping address selected for this order, you can&apos;t
              proceed until you set an address
            </p>
          ) : (
            <>
              <div className="flex justify-between">
                <div className="space-y-1">
                  <p className="text-xs">Delivery Address</p>
                  <p className="text-sm">{usedAddress?.addressLine1}</p>
                </div>

                <div className="space-y-1">
                  <p className="text-xs">City</p>
                  <p className="text-sm">{usedAddress?.cityName}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-xs">State</p>
                  <p className="text-sm">{usedAddress?.stateName}</p>
                </div>
              </div>

              <div className="space-y-1">
                <p className="text-xs">Phone Number</p>
                <p className="text-sm">{usedAddress?.phone}</p>
              </div>
            </>
          )}
        </>
        <div className="">
          <div className="space-y-2 pb-3 text-sm">
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
        </div>
        <div className="absolute right-0 top-0">
          <Button
            onClick={onSelectOpen}
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
