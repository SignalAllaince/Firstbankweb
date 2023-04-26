import Button from "@/components/button";
import Textarea from "@/components/input/text-area";
import { emojiRatingsList } from "@/lib/constants/rating";
import { cn } from "@/lib/utils/component.utils";
import { RadioGroup } from "@headlessui/react";
import { StarIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
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
  const [count, setCount] = useState(0);
  return (
    <Modal isOpen={isOpen} closeModal={onClose} closeOnOverlayClick size="md">
      <div className="space-y-4 py-4 md:px-5">
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
          <RadioGroup value={rating} onChange={setRating}>
            <RadioGroup.Label className="sr-only">Ratings</RadioGroup.Label>
            <div className="flex items-center space-x-3">
              {emojiRatingsList.map((rating) => (
                <RadioGroup.Option value={rating} key={rating.value}>
                  {({ checked, active }) => (
                    <div className="cursor-pointer">
                      <div
                        aria-hidden="true"
                        className={cn(
                          checked ? "bg-blue-50 ring-1" : "bg-white",
                          active && !checked ? "opacity-80" : "",
                          "relative w-20 space-y-1 rounded-[4px] p-3 shadow ring-brand-blue transition focus:outline-none"
                        )}
                      >
                        <Image
                          src={rating.img}
                          alt="emoji"
                          className="mx-auto h-6 w-6"
                        />
                        <p className="text-center text-[10px] font-light capitalize">
                          {rating.text}
                        </p>
                      </div>
                    </div>
                  )}
                </RadioGroup.Option>
              ))}
            </div>
          </RadioGroup>
        </div>
        <div className="flex items-center gap-2 border-t border-brand-light pt-3 text-sm font-light">
          <p>Kindly rate this item:</p>
          <div className="flex items-center gap-1">
            {[1, 2, 3, 4, 5].map((rating) => (
              <StarIcon
                onClick={() => setCount(rating)}
                key={rating}
                className={cn(
                  count >= rating ? "text-brand-accent" : "text-gray-200",
                  "h-5 w-5 flex-shrink-0 cursor-pointer"
                )}
                aria-hidden="true"
              />
            ))}
          </div>
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
