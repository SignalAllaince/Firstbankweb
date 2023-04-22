import { ratingsList } from "@/lib/constants/rating";
import { cn } from "@/lib/utils/component.utils";
import { RadioGroup } from "@headlessui/react";
import Image from "next/image";
import { Dispatch, SetStateAction } from "react";

function Ratings({
  rating,
  setRating,
}: {
  rating: null;
  setRating: Dispatch<SetStateAction<null>>;
}) {
  return (
    <RadioGroup value={rating} onChange={setRating}>
      <RadioGroup.Label className="sr-only">Ratings</RadioGroup.Label>
      <div className="items-cente flex space-x-3">
        {ratingsList.map((rating) => (
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
  );
}

export default Ratings;
