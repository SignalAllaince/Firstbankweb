import { ENDPOINTS, NAMESPACE } from "@/lib/constants";
import useQueryActionHook from "../use-queryaction";

const useGetShippingAddress = (userId: string) => {
  return useQueryActionHook({
    method: "get",
    endpoint: ENDPOINTS.GET_CHECKOUT_SHIPPING_ADDRESS(userId),
    queryKey: [NAMESPACE.GET_CHECKOUT_SHIPPING_ADDRESS],
    enabled: !!userId,
  });
};

export default useGetShippingAddress;
