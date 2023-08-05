import Button from "@/components/button";
import FadeInOut from "@/components/fade";
import IfElse from "@/components/if-else";
import Textarea from "@/components/input/text-area";
import useAddReview from "@/hooks/review/useAddReview";
import { EmojiModel, emojiRatingsList } from "@/lib/constants/rating";
import { cn } from "@/lib/utils/component.utils";
import { RadioGroup } from "@headlessui/react";
import { StarIcon } from "@heroicons/react/24/solid";
import { AnimatePresence } from "framer-motion";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import Modal from "..";
import handshakeImg from "../../../../public/images/handshake.svg";

type Inputs = {
  comment: "string";
};

function ItemReviewModal({
  isOpen,
  onClose,
  productId,
  productName,
  productImage,
}: {
  isOpen: boolean;
  onClose: () => void;
  productId: number;
  productName: string;
  productImage: string;
}) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>();
  const [rating, setRating] = useState<EmojiModel | null>(null);
  const [count, setCount] = useState(1);
  const [status, setStatus] = useState<"form" | "success">("form");
  const addReview = useAddReview();
  const { data: userData } = useSession();

  const setAddressHandler: SubmitHandler<Inputs> = (data) => {
    addReview
      .mutateAsync({
        rating: count,
        title: rating?.text!,
        comment: data.comment,
        reviewerName: userData?.user?.name!,
        productId: productId,
        hasBoughtProduct: true,
      })
      .then((res) => {
        res.data.data;
        if (res.status === 200) {
          console.log(res);
          setStatus("success");
          reset();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Modal isOpen={isOpen} closeModal={onClose} size="md">
      <AnimatePresence>
        <IfElse
          ifOn={status === "form"}
          ifOnElse={status === "success"}
          onElse={
            <FadeInOut className="space-y-4 py-4 md:px-5">
              <SuccessReview onClose={onClose} name={userData?.user?.name!} />
            </FadeInOut>
          }
        >
          <FadeInOut className="space-y-4 py-4 md:px-5">
            <div className=" space-y-1 border-b border-brand-light pb-4 text-sm font-light text-brand-darkest">
              <p className="text-md font-medium">Item Review</p>
              <p>Select emoji to the product</p>
            </div>
            <div className="mb-4 flex gap-3 text-sm font-light text-brand-darkest">
              <div className="flex h-16 w-16 flex-shrink-0 overflow-hidden rounded-[4px] bg-brand-light shadow-sm">
                <Image
                  src={productImage}
                  alt="product image"
                  width={400}
                  height={400}
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <p>{productName}</p>
            </div>
            <div>
              <RadioGroup value={rating} onChange={setRating}>
                <RadioGroup.Label className="sr-only">Ratings</RadioGroup.Label>
                <div className="flex items-center space-x-3 ">
                  {emojiRatingsList.map((rating) => (
                    <RadioGroup.Option value={rating} key={rating.value}>
                      {({ checked, active }) => (
                        <div className="cursor-pointer">
                          <div
                            aria-hidden="true"
                            className={cn(
                              checked ? "bg-blue-50 ring-1" : "bg-white",
                              active && !checked ? "opacity-80" : "",
                              "relative w-20 space-y-1 rounded-[4px] p-3 shadow ring-brand-blue transition hover:scale-110 focus:outline-none"
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
                      "h-5 w-5 flex-shrink-0 cursor-pointer transition-all hover:scale-150"
                    )}
                    aria-hidden="true"
                  />
                ))}
              </div>
            </div>
            <form
              className="space-y-5 border-t border-brand-light pt-3"
              onSubmit={handleSubmit(setAddressHandler)}
            >
              <Textarea
                {...register("comment", { required: true })}
                errors={errors}
                name="comment"
                bg="bg-brand-lightest"
                label="Comment"
                placeholder="Write your comment here."
              />

              <div className="pt-4">
                <Button
                  className="w-full text-sm uppercase"
                  type="submit"
                  disabled={!rating}
                  isLoading={addReview.isLoading}
                >
                  Submit
                </Button>
              </div>
            </form>
          </FadeInOut>
        </IfElse>
      </AnimatePresence>
    </Modal>
  );
}

export default ItemReviewModal;

function SuccessReview({
  onClose,
  name,
}: {
  onClose: () => void;
  name: string;
}) {
  return (
    <div className="text-md mx-auto max-w-md space-y-6 text-center font-light">
      <div className="mx-auto grid max-w-[100px] place-items-center">
        <Image src={handshakeImg} alt="success icon" />
      </div>

      <div>
        <p>
          Thank you, {name} for your comment. We look forward to your next
          purchase
        </p>
      </div>
      <div className="pt-10">
        <Button className="w-full px-2 text-sm uppercase" onClick={onClose}>
          Close
        </Button>
      </div>
    </div>
  );
}
