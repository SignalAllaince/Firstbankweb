import useDisclosure from "@/hooks/use-disclosure";
import { IAddressItem } from "@/types/api.types";
import { CheckIcon } from "@heroicons/react/24/outline";
import Button from "../button";
import Icon from "../icon";
import UserAddressModal from "../modal/user-address";

function AddressCard({
  address,
  refetch,
}: {
  address: IAddressItem;
  refetch: () => void;
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <div className="flex items-end justify-between">
        <div className="flex items-center gap-2 text-gray-700">
          <Icon IconComp={CheckIcon} />
          <div className="text-sm font-light">
            <div className="flex items-center">
              <p className="w-[100px]">Name:</p>
              <p>{address?.contactName}</p>
            </div>
            <div className="flex items-center">
              <p className="w-[100px]">Address:</p>
              <p>
                {address?.addressLine1}, {address?.stateName}
              </p>
            </div>
            <div className="flex items-center">
              <p className="w-[100px]">Phone:</p>
              <p>{address?.phone}</p>
            </div>
          </div>
        </div>
        <Button
          onClick={onOpen}
          variant="cart"
          size="xs"
          className="border-brand-blue text-brand-blue"
        >
          Edit
        </Button>
      </div>
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
