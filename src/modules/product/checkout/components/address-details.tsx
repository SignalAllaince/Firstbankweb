import Button from "@/components/button";
import Heading from "@/components/heading";
import Icon from "@/components/icon";
import CheckoutAddressModal from "@/components/modal/address";
import useDisclosure from "@/hooks/use-disclosure";
import { PencilIcon } from "@heroicons/react/24/outline";

function AddressDetails() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <CheckoutAddressModal
        isOpen={isOpen}
        onClose={onClose}
        // isLoading={false}
      />
      <div className="relative space-y-4 pt-7 font-light">
        <>
          <Heading size="h5">Delivery Details</Heading>
          <div className="space-y-1">
            <p className="text-xs">Delivery Address</p>
            <p className="text-sm">
              Plot 72, Unknown Estate, along Unknown Road, Unknown Town, Lagos
              State, Nigeria.
            </p>
          </div>
          <div className="space-y-1">
            <p className="text-xs">Phone Number</p>
            <p className="text-sm">09099096797</p>
          </div>
          <div className="space-y-2 text-sm">
            <div className="flex items-center gap-4">
              <p className="w-[170px]">Delivery/Shipping Cost:</p>
              <p className="font-medium">₦ 2,000</p>
            </div>
            <div className="flex items-center gap-4">
              <p className="w-[170px]">Product Tax (7.5%):</p>
              <p className="font-medium">₦ 3,875</p>
            </div>
          </div>
          <div className="flex items-center justify-between border-b border-t border-brand-light py-4">
            <h2 className="font-bold uppercase">TOTAL COST</h2>
            <h2 className="text-lg font-bold">₦ 55,875</h2>
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
