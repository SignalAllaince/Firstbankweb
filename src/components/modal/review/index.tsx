import Button from "@/components/button";
import Textarea from "@/components/input/text-area";
import Modal from "..";

function ItemReviewModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  return (
    <Modal isOpen={isOpen} closeModal={onClose} closeOnOverlayClick size="md">
      <div className="space-y-8 py-6 md:px-5">
        <div className="text-md font-medium text-brand-darkest lg:text-lg">
          <p>
            Kindly provide the following details correctly in the fields below
            to continue
          </p>
        </div>
        <form className="space-y-5">
          <Textarea
            name="comment"
            bg="bg-brand-lightest"
            label="Comment"
            placeholder="Write your comment here."
          />

          <div className="pt-4">
            <Button className="w-full text-sm uppercase" href="/cart/checkout">
              Continue
            </Button>
          </div>
        </form>
      </div>
    </Modal>
  );
}

export default ItemReviewModal;
