import { AnimatePresence, motion } from "framer-motion";
import React from "react";

function Carousel({
  children,
  time = 6000,
  alignIndicator = "center",
  stiffness = 50,
  staleColor = "#fff",
  activeColor = "#ffffff99",
  displacedX = "30vw",
  showIndicator = true,
}: {
  children?: React.ReactNode;
  time?: number;
  alignIndicator?: string;
  stiffness?: number;
  staleColor?: string;
  activeColor?: string;
  displacedX?: string;
  showIndicator?: boolean;
}) {
  const [active, setActive] = React.useState<number>(1);
  const [upset, setUpset] = React.useState<number>(1);

  React.useEffect(() => {
    const changeCarousel = () =>
      setActive((prev) => (prev === 3 ? 1 : prev + 1));

    const interval = setInterval(() => {
      changeCarousel();
    }, time);
    return () => clearInterval(interval);
  }, [upset, time]);

  return (
    <>
      <AnimatePresence>
        <motion.div
          animate={{ x: 0, opacity: 1 }}
          initial={{ x: displacedX, opacity: 0 }}
          exit={{ x: `-${displacedX}`, opacity: 0 }}
          transition={{ type: "spring", stiffness: stiffness }}
          key={active}
        >
          {children[active - 1]}
        </motion.div>
      </AnimatePresence>
      {showIndicator && (
        <div alignItems={alignIndicator}>
          {Array(React.Children.count(children))
            .fill(0)
            .map((_, i) => 1 + i)
            .map((num) => (
              <motion.div
                style={{
                  height: "10px",
                  width: `${active === num ? "70px" : "10px"}`,
                  background: `${active === num ? staleColor : activeColor}`,
                  cursor: "pointer",
                }}
                layout
                transition={{ type: "spring", stiffness: 50 }}
                onClick={() => {
                  setActive(num);
                  setUpset(upset + 1);
                }}
                key={num}
              />
            ))}
        </div>
      )}
    </>
  );
}

export default Carousel;
