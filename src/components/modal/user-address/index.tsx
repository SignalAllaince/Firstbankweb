import Button from "@/components/button";
import Icon from "@/components/icon";
import CustomInput from "@/components/input";
import CustomSelect from "@/components/input/select";
import Textarea from "@/components/input/text-area";
import useCreatedAddress from "@/hooks/address/useCreateAddress";
import useGetShippingState from "@/hooks/checkout/useGetShippingStates";
import { cn } from "@/lib/utils/component.utils";
import { CheckIcon } from "@heroicons/react/24/outline";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import Modal from "..";

type Inputs = {
  address: string;
  phoneNumber: string;
  state: string;
  city: string;
  contactName: string;
};

function UserAddressModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>();
  const createAddress = useCreatedAddress();
  const [isDefault, setDefault] = React.useState(false);
  const shippingStates = useGetShippingState();

  const setAddressHandler: SubmitHandler<Inputs> = (data) => {
    createAddress
      .mutateAsync({
        contactName: data.contactName,
        phone: data.phoneNumber,
        addressLine1: data.address,
        addressLine2: "",
        stateId: data.state,
        city: data.city,
        zipCode: "",
        states: [
          {
            id: data.state,
            name: "string",
          },
        ],
        setAsDefault: isDefault,
        displayCity: true,
      })
      .then((res) => {
        reset();
        onClose();
      })
      .catch(console.log);
  };

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
          <CustomInput
            {...register("contactName", { required: true })}
            errors={errors}
            bg="bg-brand-lightest"
            label="Contact Name"
            placeholder="Joe Doe"
          />
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
          <div className="flex justify-between pt-3">
            <button
              aria-hidden="true"
              onClick={() => setDefault((prev) => !prev)}
              className={cn(
                "ring-brand-blue",
                isDefault ? "bg-brand-blue ring-2" : "",
                "relative flex h-[18px] w-[18px] flex-shrink-0 items-center justify-center rounded border-2 border-brand-blue border-opacity-80  ring-offset-1 focus:outline-none"
              )}
            >
              {isDefault && (
                <Icon IconComp={CheckIcon} className="text-white" />
              )}
            </button>
          </div>
          <div className="pt-4">
            <Button
              className="w-full text-sm uppercase"
              type="submit"
              isLoading={createAddress.isLoading}
            >
              Continue
            </Button>
          </div>
        </form>
      </div>
    </Modal>
  );
}
export default UserAddressModal;
