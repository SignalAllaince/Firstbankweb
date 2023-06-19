import { ENDPOINTS, NAMESPACE } from "@/lib/constants";
import useQueryActionHook from "../use-queryaction";

const useShippingAsBilling = (orderId: string) => {
  return useQueryActionHook({
    method: "get",
    endpoint: ENDPOINTS.GET_SHIPPING_AS_BILLING(orderId),
    queryKey: [NAMESPACE.GET_SHIPPING_AS_BILLING],
    enabled: false,
  });
};

export default useShippingAsBilling;
