import { ratingsList } from "@/lib/constants/rating";
import { cn } from "@/lib/utils/component.utils";
import { RadioGroup } from "@headlessui/react";
import { StarIcon } from "@heroicons/react/20/solid";
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
      <div className="space-y-4">
        {ratingsList.map((rating) => (
          <RadioGroup.Option value={rating} key={rating.value}>
            {({ checked, active }) => (
              <div className="flex cursor-pointer items-center gap-4">
                <span
                  aria-hidden="true"
                  className={cn(
                    "ring-brand-darkest",
                    active && checked ? "ring-2" : "",
                    checked ? "bg-brand-darkest" : "",
                    !active && checked ? "ring-2" : "",
                    "relative block h-4 w-4 rounded-full border-2 border-black border-opacity-80 ring-offset-2 focus:outline-none"
                  )}
                />
                <div className="flex items-center space-x-3">
                  <div className="flex items-center">
                    {[0, 1, 2, 3, 4].map((rate) => (
                      <StarIcon
                        key={rate}
                        className={cn(
                          rating.value > rate
                            ? "text-brand-accent"
                            : "text-gray-200",
                          "h-4 w-4 flex-shrink-0"
                        )}
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                  <p className="text-sm">& Up</p>
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
