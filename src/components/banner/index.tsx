import useGetUserInfo from "@/hooks/user/useGetUserInfo";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import shirtImg from "../../../public/images/shirt.svg";
import shoeImg from "../../../public/images/shoe.svg";
import umbrellaImg from "../../../public/images/umbrella.svg";
import Button from "../button";
import Heading from "../heading";
import Icon from "../icon";
import BlurImage from "../image";

const images = [
  {
    src: shoeImg,
  },
  {
    src: shirtImg,
  },
  {
    src: umbrellaImg,
  },
];

// const colors = ["black", "#f0bd2d", "green"];
function Banner() {
  const [active, setActive] = React.useState<number>(0);
  const [upset, setUpset] = React.useState<number>(1);
  const time = 3000;
  const userInfo = useGetUserInfo();

  React.useEffect(() => {
    const changeCarousel = () =>
      setActive((prev) => (prev === 2 ? 0 : prev + 1));

    const interval = setInterval(() => {
      changeCarousel();
    }, time);
    return () => clearInterval(interval);
  }, [upset, time]);

  return (
    <div className="banner-row grid w-full grid-cols-1 space-y-3">
      <Heading size="h5" className="h-fit pb-4">
        Hi {userInfo?.value ? userInfo?.value?.firstName : "****"}, what items
        would you like to buy today?
      </Heading>
      <div className="relative flex flex-1 justify-center overflow-hidden rounded-[4px] bg-brand-blue px-8 py-6 text-brand-lightest">
        <div className="flex h-[300px] w-full items-center justify-between">
          <div className="flex h-full max-h-[300px] flex-col justify-between py-4">
            <div className="space-y-2">
              <Heading size="h2">Live in style</Heading>
              <p className="text-sm font-light">
                with the newly added customized converse shoes.
              </p>
              <div className="pt-5">
                <Button
                  size="small"
                  rightIcon={<Icon IconComp={ArrowRightIcon} boxSize={4} />}
                  variant="warning"
                  className="w-fit"
                  href="/product/7/watch"
                >
                  View product
                </Button>
              </div>
            </div>

            <div className="flex items-center gap-1 pt-10">
              {Array(images.length)
                .fill(0)
                .map((_, i) => i)
                .map((item) => (
                  <div
                    onClick={() => {
                      setActive(item);
                      setUpset(upset + 1);
                    }}
                    className={`h-3 w-3 cursor-pointer rounded-full ${
                      item < 2 ? "bg-brand-accent" : "bg-white"
                    }`}
                    style={{
                      background: `${active === item ? "#f0bd2d" : "white"}`,
                    }}
                    key={item}
                  ></div>
                ))}
            </div>
          </div>
          <AnimatePresence mode="popLayout">
            <motion.div
              key={active}
              animate={{ opacity: 1, scale: 1 }}
              initial={{ opacity: 0, scale: 0.9 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ type: "spring", stiffness: 50, duration: 2000 }}
              className="z-20 max-h-[300px] max-w-[270px]"
            >
              <BlurImage
                src={images[active].src}
                alt=""
                width={400}
                height={400}
                className="relative z-20"
              />
            </motion.div>
          </AnimatePresence>

          <div className="absolute -right-80 -top-20 z-10 h-[600px] w-[600px] -rotate-[30deg] overflow-hidden rounded-[40px] bg-brand-accent">
            {/* <motion.div
              key={active}
              animate={{ opacity: 1, backgroundColor: colors[active] }}
              initial={{
                opacity: 0,
                backgroundColor: colors[active === 0 ? 0 : active - 1],
              }}
              exit={{
                opacity: 0,
                backgroundColor: colors[active - 1 < 0 ? 0 : active - 1],
              }}
              // transition={{ delay: 0.2 }}
              className="h-full w-full"
            ></motion.div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
