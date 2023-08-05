import Button from "@/components/button";
import { signOut } from "next-auth/react";
import React from "react";
import Modal from "..";

function LogoutModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [loading, setLoading] = React.useState(false);
  return (
    <Modal isOpen={isOpen} closeModal={onClose}>
      <div className="space-y-8 py-6 md:px-5">
        <div className="text-md mx-auto max-w-sm text-center font-light">
          <p>Are you sure you want to Log out?</p>
        </div>
        <div className="flex flex-col items-center gap-3 sm:flex-row">
          <Button
            spinnerColor="#003B65"
            isLoading={loading}
            onClick={() => {
              setLoading(true);
              signOut();
            }}
            className="w-full px-2 text-sm uppercase"
            variant="secondary"
          >
            yes, logout
          </Button>
          <Button className="w-full px-2 text-sm uppercase" onClick={onClose}>
            Cancel
          </Button>
        </div>
      </div>
    </Modal>
  );
}

export default LogoutModal;
