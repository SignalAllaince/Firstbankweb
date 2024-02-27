import { ENDPOINTS } from "@/lib/constants";
import useCustomMutation from "../use-mutationaction";

const useStartPayment = () => {
  return useCustomMutation<{ orderId: "string"; accountNumber: "string" }>({
    method: "post",
    endpoint: ENDPOINTS.START_PAYMENT,
  });
};

export default useStartPayment;
