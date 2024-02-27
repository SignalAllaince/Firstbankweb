import Button from "@/components/button";
import Modal from "..";

function DeleteReviewModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  return (
    <Modal isOpen={isOpen} closeModal={onClose}>
      <div className="space-y-8 py-6 md:px-5">
        <div className="text-md mx-auto max-w-sm text-center font-light ">
          <p>Are you sure you want to delete this review?</p>
        </div>
        <div className="flex flex-col items-center gap-3 sm:flex-row">
          <Button className="w-full px-2 text-sm uppercase" variant="secondary">
            delete review
          </Button>
          <Button className="w-full px-2 text-sm uppercase" href="/cart">
            Cancel
          </Button>
        </div>
      </div>
      <SuccessComp />
    </Modal>
  );
}

const SuccessComp = () => (
  <div className="space-y-8 py-6 md:px-5">
    <div className="text-md mx-auto max-w-sm text-center font-light ">
      <p>Review deleted</p>
    </div>
    <div className="flex">
      <Button className="w-full px-2 text-sm uppercase" href="/cart">
        ok
      </Button>
    </div>
  </div>
);
export default DeleteReviewModal;
