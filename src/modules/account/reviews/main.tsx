import Heading from "@/components/heading";
import IfElse from "@/components/if-else";
import BlurImage from "@/components/image";
import Pagination from "@/components/paginate";
import Section from "@/components/section";
import { usePagination } from "@/hooks/use-pagination";
import { IUserReview } from "@/types/api.types";
import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { BarLoader } from "react-spinners";
import starImg from "../../../../public/images/star.svg";
import ReviewRow from "./components/review";

const ReviewMainSection = ({
  review,
  //   onRefetch,
  isRefetching,
}: {
  review: IUserReview;
  onRefetch: () => void;
  isRefetching: boolean;
}) => {
  const { currentPageNumber } = usePagination();
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
      <div className="relative -top-5">
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
        ifOn={review.items.length !== 0}
        ifOnElse={review.items.length === 0}
        onElse={
          <div>
            <Section className="my-4 flex w-full flex-col items-center justify-center space-y-4 py-4">
              <div className="max-w-xl">
                <BlurImage src={starImg} alt={"djsdsd"} />
              </div>
              <div className="flex flex-col items-center space-y-3 text-center">
                <Heading size="h4">No reviews here right now!</Heading>
                <p className="font-light">
                  Check your “Orders” for products that you haven’t reviewed &
                  rated!
                </p>
              </div>
            </Section>
          </div>
        }
      >
        <motion.div className="w-full bg-white pb-20 pt-6">
          <Section className="space-y-5">
            <AnimatePresence>
              {review.items?.map((item) => (
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
                  <ReviewRow key={item.id} review={item} />
                </motion.div>
              ))}
            </AnimatePresence>
            <div className="flex items-center justify-center pt-3">
              <Pagination />
            </div>
          </Section>
        </motion.div>
      </IfElse>
    </>
  );
};

export default ReviewMainSection;
