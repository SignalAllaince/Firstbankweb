import { ENDPOINTS, NAMESPACE } from "@/lib/constants";
import useQueryActionHook from "../use-queryaction";

const useMakeCheckoutPayment = (orderId: string) => {
  return useQueryActionHook({
    method: "get",
    endpoint: ENDPOINTS.GET_CHECKOUT_PAYMENT(orderId),
    queryKey: [NAMESPACE.GET_CHECKOUT_PAYMENT],
    enabled: false,
  });
};

export default useMakeCheckoutPayment;
