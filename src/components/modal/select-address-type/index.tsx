import Button from "@/components/button";
import Heading from "@/components/heading";
import useUpdateOrderShippingAddress from "@/hooks/checkout/useUpdateOrderShippingAddress";
import { useCheckout } from "@/lib/context/checkout-context";
import { cn } from "@/lib/utils/component.utils";
import { ICategoryDetails } from "@/types/api.types";
import React from "react";
import Modal from "..";

function SelectAddressTypeModal({
  isOpen,
  onClose,
  address,
  onAddressOpen,
}: {
  isOpen: boolean;
  onClose: () => void;
  onAddressOpen: () => void;
  address: ICategoryDetails;
}) {
  const { updateCheckoutDetails } = useCheckout();

  const [selected, setSelected] = React.useState<string | null | number>(null);
  const updateOrderShippingAddress = useUpdateOrderShippingAddress(
    // @ts-expect-error
    selected,
    address.orderId
  );

  const handlerAddressUpdate = () => {
    if (selected === "new") {
      onClose();
      setSelected(null);
      onAddressOpen();
      return;
    }
    updateOrderShippingAddress
      .mutateAsync({})
      .then((res) => {
        updateCheckoutDetails(res?.data?.data);
        onClose();
      })
      .catch(console.log);
  };

  return (
    <Modal
      isOpen={isOpen}
      closeModal={() => {
        onClose();
        setSelected(null);
      }}
    >
      <div className="space-y-8 py-6 md:px-5">
        <Heading size="h4" className="text-gray-700">
          Select Shipping Address
        </Heading>
        <div className="flex flex-col items-center gap-3">
          {address?.existingShippingAddresses?.map((item) => (
            <Button
              key={item.id}
              spinnerColor="#003B65"
              onClick={() => setSelected(item.id)}
              className="h-16 w-full justify-start px-2 pl-5 text-sm capitalize"
              variant="secondary"
              style={{
                color: selected === item.id ? "rgb(0 59 101)" : "rgb(0 59 101)",
              }}
            >
              <span className={cn("flex w-fit items-center gap-3")}>
                <span
                  aria-hidden="true"
                  className={cn(
                    "ring-brand-darkest",
                    selected === item.id ? "ring-2" : "",
                    selected === item.id ? "bg-brand-blue" : "",
                    selected === item.id ? "ring-2" : "",
                    "relative block h-[14px] w-[14px] rounded-full border-2 border-brand-blue border-opacity-80 ring-offset-2 focus:outline-none"
                  )}
                />
                <span>
                  {item.addressLine1}, {item.cityName}, {item.stateName}
                </span>
              </span>
            </Button>
          ))}
          <Button
            spinnerColor="#003B65"
            onClick={() => setSelected("new")}
            style={{
              color: selected === "new" ? "#fff" : "",
              background: selected === "new" ? "#506473" : "",
            }}
            className="h-16 w-full px-2 text-sm uppercase"
            variant="secondary"
          >
            Add new Address
          </Button>
        </div>
        <div>
          <Button
            className="w-full px-2 text-sm uppercase"
            disabled={!selected}
            onClick={handlerAddressUpdate}
            isLoading={updateOrderShippingAddress.isLoading}
          >
            Continue
          </Button>
        </div>
      </div>
    </Modal>
  );
}

export default SelectAddressTypeModal;
