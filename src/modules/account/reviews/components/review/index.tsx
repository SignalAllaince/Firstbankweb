import Button from "@/components/button";
import DeleteReviewModal from "@/components/modal/delete-review";
import useDisclosure from "@/hooks/use-disclosure";
import { cn } from "@/lib/utils/component.utils";
import { StarIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import smileEmoji from "../../../../../../public/images/emoji/smile.svg";

function WishListRow() {
  const { isOpen, onClose, onOpen } = useDisclosure();

  return (
    <>
      <div className="flex items-start justify-between border-b border-brand-light pb-4">
        <div className="item-start flex max-w-md gap-3 text-[13px] font-light">
          <div className="flex h-[100px] w-[100px] flex-shrink-0 overflow-hidden rounded-[4px] bg-brand-light"></div>
          <div className="flex h-[100px] flex-col justify-between">
            <p>
              This Description should carry only the full name of the product.
            </p>
            <div className="flex items-center">
              {[0, 1, 2, 3, 4].map((rating) => (
                <StarIcon
                  key={rating}
                  className={cn(
                    4 > rating ? "text-brand-accent" : "text-gray-200",
                    "h-4 w-4 flex-shrink-0"
                  )}
                  aria-hidden="true"
                />
              ))}
            </div>
            <div className="flex items-center gap-3 pb-1">
              <Image src={smileEmoji} alt="" className="h-4 w-4" />
              <p className="text-sm">
                I like it, it was exactly what I expected!
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-end gap-y-5">
          <Button variant="secondary" size="xs" onClick={onOpen}>
            Delete review
          </Button>
        </div>
      </div>
      <DeleteReviewModal isOpen={isOpen} onClose={onClose} />
    </>
  );
}

export default WishListRow;
