import Button from "@/components/button";
import Modal from "..";

function DeleteAddressModal({
  isOpen,
  onClose,
  onDeleteHandler,
  isLoading,
}: {
  isOpen: boolean;
  onClose: () => void;
  onDeleteHandler: () => void;
  isLoading: boolean;
}) {
  return (
    <Modal isOpen={isOpen} closeModal={onClose}>
      <div className="space-y-8 py-6 md:px-5">
        <div className="text-md mx-auto max-w-sm text-center font-light">
          <p>Are you sure you want to delete this address?</p>
        </div>
        <div className="flex flex-col items-center gap-3 sm:flex-row">
          <Button
            spinnerColor="#003B65"
            onClick={onDeleteHandler}
            isLoading={isLoading}
            className="w-full px-2 text-sm uppercase"
            variant="secondary"
          >
            Delete Address
          </Button>
          <Button className="w-full px-2 text-sm uppercase" onClick={onClose}>
            Cancel
          </Button>
        </div>
      </div>
    </Modal>
  );
}

export default DeleteAddressModal;
