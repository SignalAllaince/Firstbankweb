import { AnimatePresence, motion } from "framer-motion";
import { ReactElement } from "react";

interface IfElseProps {
  children?: ReactElement | null;
  elseThen?: ReactElement | null;
  onElse?: ReactElement | null;
  ifOn?: boolean;
  ifOnElse?: boolean;
}

const IfElse = ({
  children = null,
  elseThen = null,
  onElse = null,
  ifOn = false,
  ifOnElse = true,
}: IfElseProps) => {
  return (
    <AnimatePresence mode="popLayout">
      {ifOn && (
        <motion.div
          initial={{ opacity: 0.3 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0.3 }}
        >
          {children}
        </motion.div>
      )}
      {ifOnElse && (
        <motion.div
          initial={{ opacity: 0.3 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0.3 }}
        >
          {onElse}
        </motion.div>
      )}

      {!ifOn && elseThen && !ifOnElse ? (
        <motion.div
          initial={{ opacity: 0.3 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0.3 }}
        >
          {elseThen}
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
};

export default IfElse;
