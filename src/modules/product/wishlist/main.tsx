import Section from "@/components/section";
import { WishlistResponse } from "@/types/api.types";
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
  return (
    <section className="pb-20 pt-6">
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
      </Section>
    </section>
  );
};

export default WishListMainSection;
