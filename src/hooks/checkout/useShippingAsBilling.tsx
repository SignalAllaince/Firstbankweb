import { ENDPOINTS, NAMESPACE } from "@/lib/constants";
import useCustomMutation from "../use-mutationaction";

const useShippingAsBilling = (orderId: string) => {
  return useCustomMutation({
    method: "put",
    endpoint: ENDPOINTS.GET_SHIPPING_AS_BILLING(orderId),
    queryKey: [NAMESPACE.GET_SHIPPING_AS_BILLING],
  });
};

export default useShippingAsBilling;
