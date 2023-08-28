import React from "react";
import useNotification from "./use-notification";

function useCounter(limit = 10, start = 1) {
  const [quantity, setQuantity] = React.useState(start);
  const { toast } = useNotification();

  React.useEffect(() => {
    setQuantity(start);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [start]);

  const increaseQuantity = () => {
    if (limit === quantity) {
      toast({
        appearance: "error",
        description: "Maximum Item number reached",
      });
    }
    setQuantity((prev) => Math.min(++prev, limit));
  };
  const decreaseQuantity = () => quantity > 1 && setQuantity((prev) => --prev);

  return { quantity, increaseQuantity, decreaseQuantity };
}

export default useCounter;
