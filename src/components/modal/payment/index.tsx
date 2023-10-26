import Button from "@/components/button";
import BlurImage from "@/components/image";
import { motion } from "framer-motion";
import Modal from "..";
import errorImg from "../../../../public/images/failed.svg";
import successImg from "../../../../public/images/success.svg";

function PaymentModal({
  isOpen,
  onClose,
  pass,
}: {
  isOpen: boolean;
  onClose: () => void;
  pass: boolean;
}) {
  return (
    <Modal isOpen={isOpen} closeModal={onClose}>
      <motion.div className="space-y-4 py-6 md:px-5" layout>
        {!pass ? <SuccessComp /> : <ErrorComp />}
      </motion.div>
    </Modal>
  );
}

export default PaymentModal;

function ErrorComp() {
  return (
    <div className="text-md mx-auto max-w-md space-y-6 text-center font-light">
      <div className="mx-auto grid max-w-[100px] place-items-center">
        <BlurImage src={errorImg} alt="success icon" />
      </div>
      <div>
        <p className="text-lg">Payment failed! Please try again</p>
      </div>
    </div>
  );
}

function SuccessComp() {
  return (
    <div className="text-md mx-auto max-w-md space-y-6 text-center font-light">
      <div className="mx-auto grid max-w-[100px] place-items-center">
        <BlurImage src={successImg} alt="success icon" />
      </div>
      <div>
        <p className="text-lg">Payment successful!</p>
      </div>
      <div>
        <p>Your order with Order number: FBBS-209323827</p>
        <p> has been successfully submitted.</p>
      </div>
      <div className="pt-10">
        <Button className="w-full px-2 text-sm uppercase" href="/">
          Continue shopping
        </Button>
      </div>
    </div>
  );
}
