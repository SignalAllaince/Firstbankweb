import { StarIcon } from "@heroicons/react/20/solid";

function ProductReview() {
  return (
    <div className="flex items-start gap-4 border-b border-brand-light pb-6">
      <div className="grid h-12 w-12 place-items-center bg-[#D9D9D9]">
        <h2 className="font-medium">T</h2>
      </div>
      <div className="space-y-3">
        <div className="flex items-center gap-3 text-sm font-light">
          <p>Timothy John</p>
          <div className="h-1 w-1 rounded-full bg-brand-dark" />
          <p className="text-brand-medium">Janunary 23, 2023</p>
        </div>
        <p className="font-light">Awesome stuff!!!</p>
        <div className="flex items-center">
          {[0, 1, 2, 3, 4].map((rating) => (
            <StarIcon
              key={rating}
              className={"h-4 w-4 flex-shrink-0 text-brand-accent"}
              aria-hidden="true"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductReview;
