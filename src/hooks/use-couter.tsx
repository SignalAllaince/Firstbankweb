import React from "react";

function useCounter(limit = 10) {
  const [quantity, setQuantity] = React.useState(1);
  const increaseQuantity = () => setQuantity((prev) => Math.min(++prev, limit));
  const decreaseQuantity = () => quantity > 1 && setQuantity((prev) => --prev);

  return { quantity, increaseQuantity, decreaseQuantity };
}

export default useCounter;
