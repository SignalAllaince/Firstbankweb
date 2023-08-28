import { ENDPOINTS, NAMESPACE } from "@/lib/constants";
import useQueryActionHook from "../use-queryaction";

const useGetShippingState = () => {
  return useQueryActionHook<
    {
      id: string;
      name: string;
    }[]
  >({
    method: "get",
    endpoint: ENDPOINTS.GET_CHECKOUT_SHIPPING_STATES,
    queryKey: [NAMESPACE.GET_CHECKOUT_SHIPPING_STATES],
  });
};

export default useGetShippingState;
