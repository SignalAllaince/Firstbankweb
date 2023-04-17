import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline";
import { AnimatePresence, motion } from "framer-motion";
import { ReactNode, useState } from "react";
import Heading from "../heading";
import Icon from "../icon";

const Accordion = ({
  initialState = true,
  title,
  children,
}: {
  initialState?: boolean;
  title: string;
  children: ReactNode;
}) => {
  const [isOpen, setIsOpen] = useState(initialState);

  // By using `AnimatePresence` to mount and unmount the contents, we can animate
  // them in and out while also only rendering the contents of open accordions
  return (
    <div className="space-y-7 border-b border-brand-darkest py-5 pb-8">
      <motion.header
        initial={false}
        className={`m-0 flex h-[20px] w-full cursor-pointer items-center justify-between gap-4  transition-all duration-200`}
        onClick={() => setIsOpen((prevState) => !prevState)}
      >
        <Heading size="h5" className="text-black">
          {title}
        </Heading>
        <p className="text-2xl font-bold">
          {isOpen ? (
            <Icon IconComp={MinusIcon} />
          ) : (
            <Icon IconComp={PlusIcon} />
          )}
        </p>
      </motion.header>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.section
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            layout
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              variants={{
                collapsed: { scale: 0.8, opacity: 0 },
                open: { scale: 1, opacity: 1 },
              }}
              transition={{ duration: 0.5 }}
              className="content-placeholder"
            >
              {children}
            </motion.div>
          </motion.section>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Accordion;
