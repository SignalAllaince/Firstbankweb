import Button from "@/components/button";
import CustomInput from "@/components/input";
import Textarea from "@/components/input/text-area";
import Modal from "..";

function CheckoutModal({
  isOpen,
  onOClose,
}: {
  isOpen: boolean;
  onOClose: () => void;
}) {
  return (
    <Modal isOpen={isOpen} closeModal={onOClose} closeOnOverlayClick size="md">
      <div className="space-y-8 py-6 md:px-5">
        <div className="text-md font-medium text-brand-darkest lg:text-lg">
          <p>
            Kindly provide the following details correctly in the fields below
            to continue
          </p>
        </div>
        <form className="space-y-5">
          <Textarea
            name="address"
            bg="bg-brand-lightest"
            label="Delivery Address"
            placeholder="Plot 72, Unknown Estate, along Unknown Road, Unknown Town, Lagos State, Nigeria."
          />
          <CustomInput
            bg="bg-brand-lightest"
            name="phoneNumber"
            label="Phone Number"
            placeholder="08000000000"
          />
          <div className="pt-4">
            <Button className="w-full uppercase" href="/cart/checkout">
              Continue
            </Button>
          </div>
        </form>
      </div>
    </Modal>
  );
}

export default CheckoutModal;
