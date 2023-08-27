import Button from "@/components/button";
import Heading from "@/components/heading";
import Icon from "@/components/icon";
import CustomInput from "@/components/input";
import CustomSelect from "@/components/input/select";
import Textarea from "@/components/input/text-area";
import useCreatedAddress from "@/hooks/address/useCreateAddress";
import useUpdateAddress from "@/hooks/address/useUpdateAddress";
import useGetShippingState from "@/hooks/checkout/useGetShippingStates";
import { cn } from "@/lib/utils/component.utils";
import { IAddressItem } from "@/types/api.types";
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
  refetch,
  defaultValues,
}: {
  isOpen: boolean;
  onClose: () => void;
  refetch?: () => void;
  defaultValues?: IAddressItem;
}) {
  const shippingStates = useGetShippingState();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>({
    defaultValues: {
      address: defaultValues?.addressLine1,
      phoneNumber: defaultValues?.phone,
      contactName: defaultValues?.contactName,
      state:
        shippingStates?.value?.find(
          (item) => item.name === defaultValues?.stateName
        )?.id ?? "",
    },
  });
  const createAddress = useCreatedAddress();
  const updateAddress = useUpdateAddress(defaultValues?.addressId!);
  const toggleAddress = defaultValues ? updateAddress : createAddress;

  const [isDefault, setDefault] = React.useState(
    defaultValues?.isDefaultShippingAddress ?? false
  );

  const closeHandler = () => {
    reset();
    onClose();
  };
  const setAddressHandler: SubmitHandler<Inputs> = (data) => {
    const stateName = shippingStates?.value?.find(
      (item) => item.id === data.state
    )?.name;

    toggleAddress
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
            name: stateName,
          },
        ],
        setAsDefault: isDefault,
        displayCity: true,
      })
      .then(() => {
        refetch && refetch();
        closeHandler();
      })
      .catch(console.log);
  };

  return (
    <Modal isOpen={isOpen} closeModal={closeHandler} size="md">
      <div className="space-y-4 py-3 font-light md:px-5">
        <div className="text-md font-medium text-brand-darkest ">
          <Heading size="h5">Create Address</Heading>
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
          <div className="flex items-center space-x-3 pt-3">
            <button
              type="button"
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
            <p>Use as shipping address</p>
          </div>
          <div className="pt-4">
            <Button
              className="w-full text-sm uppercase"
              type="submit"
              isLoading={toggleAddress.isLoading}
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
