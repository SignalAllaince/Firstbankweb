import Button from "@/components/button";
import Modal from "..";

function CartModal({
  isOpen,
  onOClose,
}: {
  isOpen: boolean;
  onOClose: () => void;
}) {
  return (
    <Modal isOpen={isOpen} closeModal={onOClose} closeOnOverlayClick>
      <div className="space-y-8 py-6 md:px-5">
        <div className="text-md mx-auto max-w-sm text-center font-light lg:text-lg">
          <p>Are you sure you want to remove this item from your cart?</p>
        </div>
        <div className="flex flex-col items-center gap-3 sm:flex-row">
          <Button className="w-full px-2 uppercase" variant="secondary">
            Remove item
          </Button>
          <Button className="w-full px-2 uppercase" href="/cart">
            No, Cancel
          </Button>
        </div>
      </div>
    </Modal>
  );
}

export default CartModal;
