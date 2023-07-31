import Button from "@/components/button";
import Icon from "@/components/icon";
import CustomInput from "@/components/input";
import CustomSelect from "@/components/input/select";
import Textarea from "@/components/input/text-area";
import useCreateShippingAddress from "@/hooks/checkout/useCreateShippingAddress";
import useGetShippingState from "@/hooks/checkout/useGetShippingStates";
import { useCheckout } from "@/lib/context/checkout-context";
import { cn } from "@/lib/utils/component.utils";
import { RadioGroup } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/24/outline";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import Modal from "..";

type Inputs = {
  address: string;
  phoneNumber: string;
  state: string;
  city: string;
};

const editModes = [
  { label: "Add as new address", value: 1 },
  { label: "Update current address", value: 2 },
];

function CheckoutAddressModal({
  isOpen,
  onClose,
  orderId,
}: {
  isOpen: boolean;
  onClose: () => void;
  orderId: string;
}) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>();
  const createShippingAddress = useCreateShippingAddress(orderId);
  const shippingStates = useGetShippingState();
  const { updateCheckoutDetails } = useCheckout();

  const setAddressHandler: SubmitHandler<Inputs> = (data) => {
    createShippingAddress
      .mutateAsync({
        contactName: "somethin",
        phone: data.phoneNumber,
        addressLine1: data.address,
        addressLine2: "",
        stateId: data.state,
        city: data.city,
        zipCode: "",
      })
      .then((res) => {
        updateCheckoutDetails(res?.data?.data);
        reset();
        onClose();
      })
      .catch(console.log);
  };

  const [editMode, setEditMode] = React.useState(editModes[0]);

  return (
    <Modal isOpen={isOpen} closeModal={onClose} size="md">
      <div className="space-y-8 py-6 md:px-5">
        <div className="text-md font-medium text-brand-darkest ">
          <p>
            Kindly provide the following details correctly in the fields below
            to continue
          </p>
        </div>
        <form className="space-y-2" onSubmit={handleSubmit(setAddressHandler)}>
          <CustomSelect
            {...register("state", { required: true })}
            errors={errors}
            bg="bg-brand-lightest"
            label="State"
            placeholder="08000000000"
            isLoading={shippingStates.isLoading}
            // @ts-expect-error
            options={shippingStates?.value?.map((item) => ({
              label: item.name,
              value: item.id,
            }))}
          />
          <CustomInput
            {...register("city", { required: true })}
            errors={errors}
            bg="bg-brand-lightest"
            label="City"
            placeholder="Ikeja"
          />
          <Textarea
            {...register("address", { required: true })}
            errors={errors}
            bg="bg-brand-lightest"
            label="Delivery Address"
            placeholder="Plot 72, Unknown Estate, along Unknown Road, Unknown Town, Lagos State, Nigeria."
          />
          <CustomInput
            {...register("phoneNumber", { required: true })}
            errors={errors}
            bg="bg-brand-lightest"
            label="Phone Number"
            placeholder="08000000000"
          />
          <RadioGroup value={editMode} onChange={setEditMode}>
            <RadioGroup.Label className="sr-only">Ratings</RadioGroup.Label>
            <div className="flex justify-between pt-3">
              {editModes.map((mode) => (
                <RadioGroup.Option value={mode} key={mode.value}>
                  <div className="flex cursor-pointer items-center gap-3">
                    <span
                      aria-hidden="true"
                      className={cn(
                        "ring-brand-blue",
                        editMode.value === mode.value
                          ? "bg-brand-blue ring-2"
                          : "",
                        "relative flex h-[18px] w-[18px] flex-shrink-0 items-center justify-center rounded border-2 border-brand-blue border-opacity-80  ring-offset-1 focus:outline-none"
                      )}
                    >
                      {editMode.value === mode.value && (
                        <Icon IconComp={CheckIcon} className="text-white" />
                      )}
                    </span>
                    <p className="text-sm font-light">{mode.label}</p>
                  </div>
                </RadioGroup.Option>
              ))}
            </div>
          </RadioGroup>
          <div className="pt-4">
            <Button
              className="w-full text-sm uppercase"
              type="submit"
              isLoading={createShippingAddress.isLoading}
            >
              Continue
            </Button>
          </div>
        </form>
      </div>
    </Modal>
  );
}

export default CheckoutAddressModal;
