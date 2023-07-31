import Button from "@/components/button";
import Modal from "..";

function DeleteFromWishListModal({
  isOpen,
  onClose,
  onRemoveHandler,
  isLoading,
}: {
  isOpen: boolean;
  onClose: () => void;
  onRemoveHandler: () => void;
  isLoading: boolean;
}) {
  return (
    <Modal isOpen={isOpen} closeModal={onClose}>
      <div className="space-y-8 py-6 md:px-5">
        <div className="text-md mx-auto max-w-sm text-center font-light">
          <p>Are you sure you want to remove this item from your wishlist?</p>
        </div>
        <div className="flex flex-col items-center gap-3 sm:flex-row">
          <Button
            spinnerColor="#003B65"
            onClick={onRemoveHandler}
            isLoading={isLoading}
            className="w-full px-2 text-sm uppercase"
            variant="secondary"
          >
            Remove item
          </Button>
          <Button className="w-full px-2 text-sm uppercase" onClick={onClose}>
            Cancel
          </Button>
        </div>
      </div>
    </Modal>
  );
}

export default DeleteFromWishListModal;
