import { ISingleReview } from "@/types/api.types";
import { StarIcon } from "@heroicons/react/20/solid";
import dayjs from "dayjs";

function ProductReview({
  reviewerName,
  comment,
  dateCreated,
  rating,
}: ISingleReview) {
  return (
    <div className="flex items-start gap-4 border-b border-brand-light pb-6">
      <div className="grid h-12 w-12 place-items-center bg-[#D9D9D9]">
        <h2 className="font-medium">{reviewerName?.slice(0, 1)}</h2>
      </div>
      <div className="space-y-3">
        <div className="flex items-center gap-3 text-sm font-light">
          <p>{reviewerName}</p>
          <div className="h-1 w-1 rounded-full bg-brand-dark" />
          <p className="text-brand-medium">
            {dayjs(dateCreated).format("MMMM DD, YYYY")}
          </p>
        </div>
        <p className="font-light">{comment}</p>
        <div className="flex items-center">
          {[0, 1, 2, 3, 4].map((num) => (
            <StarIcon
              key={num}
              className={`h-4 w-4 ${
                num + 1 > rating ? "text-gray-300" : "text-brand-accent"
              } flex-shrink-0`}
              aria-hidden="true"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductReview;
