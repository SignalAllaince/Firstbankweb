import Button from "@/components/button";
import Heading from "@/components/heading";
import IfElse from "@/components/if-else";
import Pagination from "@/components/paginate";
import Section from "@/components/section";
import { usePagination } from "@/hooks/use-pagination";
import { WishlistResponse } from "@/types/api.types";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { BarLoader } from "react-spinners";
import wishlistImg from "../../../../public/images/wishlist.svg";
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
    setTimeout(() => {
      sectionRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }, 800);
  }, [currentPageNumber]);

  return (
    <>
      <div ref={sectionRef} />
      <div>
        <BarLoader
          color="#003B65"
          loading={isRefetching}
          height={2}
          speedMultiplier={0.8}
          width="100%"
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
      <IfElse
        ifOn={wishlistResult.items.length !== 0}
        ifOnElse={wishlistResult.items.length === 0}
        onElse={
          <div>
            <Section className="my-4 flex w-full flex-col items-center justify-center space-y-12  py-10">
              <div className="max-w-xl">
                <Image src={wishlistImg} alt={"djsdsd"} />
              </div>
              <div className="flex flex-col items-center">
                <Heading size="h3">You haven’t saved anything yet!</Heading>
                <p>Browse our categories and discover our best deals!</p>
              </div>
              <Button className="uppercase" href="/">
                start shopping
              </Button>
            </Section>
          </div>
        }
      >
        <motion.div className="w-full bg-white pb-20 pt-6">
          <Section className="space-y-5">
            <AnimatePresence>
              {wishlistResult.items?.map((item) => (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{
                    opacity: { duration: 0.2 },
                    layout: {
                      duration: 1,
                    },
                  }}
                  style={{ originX: 1 }}
                  key={item.id}
                >
                  <WishListRow
                    name={item.productName}
                    imageSrc={item.productImage}
                    productId={item.productId}
                    price={item.productPriceString}
                    slug={item.slug}
                    key={item.id}
                    refetchWishList={onRefetch}
                    isRefetching={isRefetching}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
            {totalPages > 1 && (
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
            )}
          </Section>
        </motion.div>
      </IfElse>
    </>
  );
};

export default WishListMainSection;
