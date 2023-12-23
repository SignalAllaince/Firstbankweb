import Button from "@/components/button";
import FadeInOut from "@/components/fade";
import Heading from "@/components/heading";
import IfElse from "@/components/if-else";
import CustomInput from "@/components/input";
import useCompletePayment from "@/hooks/payment/useCompletePayment";
import useStartPayment from "@/hooks/payment/useStartPayment";
import { AnimatePresence } from "framer-motion";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import Modal from "..";

function ProceedPaymentModal({
  isOpen,
  onClose,
  orderId,
  onSuccess,
}: {
  isOpen: boolean;
  onClose: () => void;
  orderId: string;
  onSuccess: () => void;
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<{
    accountNumber: number;
  }>();

  const {
    register: reg,
    handleSubmit: hSubmit,
    formState: { errors: sErrors },
  } = useForm<{
    otp: number;
  }>();
  const [stage, setStage] = React.useState<"start" | "complete">("start");
  const startPayment = useStartPayment();
  const completePayment = useCompletePayment();
  const [paymentId, setPaymentId] = React.useState("");
  const startPaymentHandler: SubmitHandler<{ accountNumber: number }> = (
    data
  ) => {
    startPayment
      .mutateAsync({
        orderId,
        accountNumber: data.accountNumber,
      })
      .then((res) => {
        console.log(res);
        setStage("complete");
        // @ts-ignore
        setPaymentId(res.data.data.paymentId);
      })
      .catch((err) => {
        console.log(err?.response?.data);
      });
  };

  const completePaymentHandler: SubmitHandler<{ otp: number }> = (data) => {
    completePayment
      .mutateAsync({
        paymentId,
        otp: data.otp,
      })
      .then((res) => {
        console.log(res);
        onSuccess();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Modal isOpen={isOpen} closeModal={onClose}>
      <div className="space-y-4 py-3 md:px-5">
        <AnimatePresence>
          <IfElse
            ifOn={stage === "start"}
            ifOnElse={stage === "complete"}
            onElse={
              <FadeInOut key={stage} className="space-y-3">
                <div className="space-y-1">
                  <Heading size="h4">Enter Token</Heading>
                </div>
                <form
                  className="space-y-2"
                  onSubmit={hSubmit(completePaymentHandler)}
                >
                  <CustomInput
                    {...reg("otp", { required: true })}
                    errors={sErrors}
                    bg="bg-brand-lightest"
                    label="otp"
                    placeholder="08000000000"
                  />

                  <div className="pt-4">
                    <Button
                      className="w-full text-sm uppercase"
                      type="submit"
                      isLoading={completePayment.isLoading}
                    >
                      Make payment
                    </Button>
                  </div>
                </form>
              </FadeInOut>
            }
          >
            <FadeInOut className="space-y-3" key={stage}>
              <div className="space-y-1">
                <Heading size="h4">Enter Account Number</Heading>
                <p className="text-sm">
                  Please input your first bank account number
                </p>
              </div>
              <form
                className="space-y-2"
                onSubmit={handleSubmit(startPaymentHandler)}
              >
                <CustomInput
                  {...register("accountNumber", { required: true })}
                  errors={errors}
                  bg="bg-brand-lightest"
                  label="account number"
                  placeholder="08000000000"
                />

                <div className="pt-4">
                  <Button
                    className="w-full text-sm uppercase"
                    type="submit"
                    isLoading={startPayment.isLoading}
                  >
                    Verify Account
                  </Button>
                </div>
              </form>
            </FadeInOut>
          </IfElse>
        </AnimatePresence>
      </div>
    </Modal>
  );
}

export default ProceedPaymentModal;
