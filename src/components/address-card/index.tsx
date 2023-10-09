import useDeleteAddress from "@/hooks/address/useDeleteAddress";
import useDisclosure from "@/hooks/use-disclosure";
import { IAddressItem } from "@/types/api.types";
import { StarIcon } from "@heroicons/react/20/solid";
import Button from "../button";
import Heading from "../heading";
import Icon from "../icon";
import DeleteAddressModal from "../modal/delete-address";
import UserAddressModal from "../modal/user-address";

function AddressCard({
  address,
  refetch,
}: {
  address: IAddressItem;
  refetch: () => void;
}) {
  const deleteAddress = useDeleteAddress();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: isDeleteOpen,
    onOpen: onDeleteOpen,
    onClose: onDeleteClose,
  } = useDisclosure();

  const deleteAddressHandler = () => {
    deleteAddress
      .mutateAsync({
        id: address.addressId,
        data: null,
      })
      .then(() => {
        refetch();
        onDeleteClose();
      })
      .catch(console.log);
  };

  return (
    <>
      <div className="relative flex items-end justify-between border-b pb-4">
        {address.isDefaultShippingAddress && (
          <div className="absolute right-0 top-0">
            <Icon IconComp={StarIcon} />
          </div>
        )}
        <div className="flex flex-1 items-center gap-2 text-gray-700">
          <div className="w-full text-sm font-light">
            <div className="pb-2">
              <Heading size="h5">{address?.contactName}</Heading>
            </div>
            <div className="space-y-1 text-slate-500">
              <p className="italic">{address?.phone}</p>
              <p>
                {address?.addressLine1}, {address?.stateName}.
              </p>
            </div>
          </div>
        </div>
        <div className="flex gap-2">
          <Button
            onClick={onDeleteOpen}
            variant="cart"
            size="xs"
            className="border-red-600 text-red-600"
          >
            Delete
          </Button>
          <Button
            onClick={onOpen}
            variant="cart"
            size="xs"
            className="border-brand-blue text-brand-blue"
          >
            Edit
          </Button>
        </div>
      </div>
      <DeleteAddressModal
        onClose={onDeleteClose}
        isOpen={isDeleteOpen}
        onDeleteHandler={deleteAddressHandler}
        isLoading={deleteAddress.isLoading}
      />
      <UserAddressModal
        isOpen={isOpen}
        onClose={onClose}
        refetch={refetch}
        defaultValues={address}
      />
    </>
  );
}

export default AddressCard;
