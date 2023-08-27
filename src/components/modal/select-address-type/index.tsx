import Button from "@/components/button";
import useUpdateOrderShippingAddress from "@/hooks/checkout/useUpdateOrderShippingAddress";
import { useCheckout } from "@/lib/context/checkout-context";
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
    <Modal isOpen={isOpen} closeModal={onClose}>
      <div className="space-y-8 py-6 md:px-5">
        <div className="flex flex-col items-center gap-3">
          {address?.existingShippingAddresses?.map((item) => (
            <Button
              key={item.id}
              spinnerColor="#003B65"
              onClick={() => setSelected(item.id)}
              className="h-20 w-full px-2 text-sm uppercase"
              variant="secondary"
              style={{
                color: selected === item.id ? "#fff" : "",
                background: selected === item.id ? "#506473" : "",
              }}
            >
              <span>
                {item.addressLine1}, {item.cityName}, {item.stateName}
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
            className="h-20 w-full px-2 text-sm uppercase"
            variant="secondary"
          >
            Create a new Address
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
