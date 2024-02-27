import { ENDPOINTS, NAMESPACE } from "@/lib/constants";
import useQueryActionHook from "../use-queryaction";

const useGetShippingRates = () => {
  return useQueryActionHook({
    method: "get",
    endpoint: ENDPOINTS.GET_SHIPPING_RATES,
    queryKey: [NAMESPACE.GET_SHIPPING_RATES],
  });
};

export default useGetShippingRates;
