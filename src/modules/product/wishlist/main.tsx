import Pagination from "@/components/paginate";
import Section from "@/components/section";
import { usePagination } from "@/hooks/use-pagination";
import { WishlistResponse } from "@/types/api.types";
import React from "react";
import { BarLoader } from "react-spinners";
import WishListRow from "./wishlist-row";

const WishListMainSection = ({
  wishlistResult,
  onRefetch,
  isRefetching,
}: {
  wishlistResult: WishlistResponse;
  onRefetch: () => void;
  isRefetching: boolean;
}) => {
  const { onNext, onPrev, currentPageNumber, totalPages } = usePagination();
  const sectionRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    sectionRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  }, [currentPageNumber]);

  return (
    <>
      <div ref={sectionRef} />
      <div>
        <BarLoader
          color="#003B65"
          loading={isRefetching}
          height={2}
          speedMultiplier={1}
          width="100%"
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
      <div className="pb-20 pt-6">
        <Section className="space-y-5">
          {wishlistResult?.items?.map((item) => (
            <WishListRow
              name={item.productName}
              productId={item.productId}
              price={item.productPriceString}
              slug={item.slug}
              key={item.id}
              refetchWishList={onRefetch}
              isRefetching={isRefetching}
            />
          ))}
          <div className="flex items-center justify-center">
            <Pagination
              onNext={onNext}
              onPrev={onPrev}
              currentPageNumber={currentPageNumber}
              isPrevDisabled={currentPageNumber === 1}
              isNextDisabled={currentPageNumber === totalPages}
              totalPages={totalPages}
            />
          </div>
        </Section>
      </div>
    </>
  );
};

export default WishListMainSection;
