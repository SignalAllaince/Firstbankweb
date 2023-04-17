import { useState } from "react";

function useDisclosure() {
  const [isOpen, setOpen] = useState(false);

  const onOpen = () => setOpen(true);
  const onOClose = () => setOpen(false);
  const onToggle = () => setOpen((prev) => !prev);

  return { isOpen, onOClose, onOpen, onToggle };
}

export default useDisclosure;
