import Button from "@/components/button";
import Textarea from "@/components/input/text-area";
import Ratings from "@/components/rating";
import { useState } from "react";
import Modal from "..";

function ItemReviewModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [rating, setRating] = useState(null);
  return (
    <Modal isOpen={isOpen} closeModal={onClose} closeOnOverlayClick size="md">
      <div className="space-y-6 py-4 md:px-5">
        <div className=" space-y-1 border-b border-brand-light pb-4 text-sm font-light text-brand-darkest">
          <p className="text-md font-medium">Item Review</p>
          <p>Select emoji to the product</p>
        </div>
        <div className="flex gap-3 text-sm font-light text-brand-darkest">
          <div className="h-12 w-12 flex-shrink-0 rounded-[4px] bg-brand-light" />
          <p>
            This Description should carry only the full name of the product.
          </p>
        </div>
        <div>
          <Ratings rating={rating} setRating={setRating} />
        </div>
        <form className="space-y-5 border-t border-brand-light pt-3">
          <Textarea
            name="comment"
            bg="bg-brand-lightest"
            label="Comment"
            placeholder="Write your comment here."
          />

          <div className="pt-4">
            <Button className="w-full text-sm uppercase" href="/cart/checkout">
              Submit
            </Button>
          </div>
        </form>
      </div>
    </Modal>
  );
}

export default ItemReviewModal;
