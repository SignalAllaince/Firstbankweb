import { ENDPOINTS } from "@/lib/constants";
import useCustomMutation from "../use-mutationaction";

const useCompletePayment = () => {
  return useCustomMutation<{ paymentId: string; otp: string }>({
    method: "post",
    endpoint: ENDPOINTS.GET_ALL_CHECKOUT,
  });
};

export default useCompletePayment;
