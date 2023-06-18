import { ForwardRefComponent, HTMLMotionProps, motion } from "framer-motion";
import { DetailedHTMLProps, HTMLAttributes } from "react";

function FadeInOut(
  props: Omit<
    ForwardRefComponent<HTMLDivElement, HTMLMotionProps<"div">>,
    "$$typeof"
  > &
    DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>
) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className={`w-full ${props.className}`}
    >
      {props.children}
    </motion.div>
  );
}

export default FadeInOut;
