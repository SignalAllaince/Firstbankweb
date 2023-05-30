import { ENDPOINTS, NAMESPACE } from "@/lib/constants";
import useCustomMutation from "../use-mutationaction";

const useSearchShippingRate = () => {
  return useCustomMutation({
    method: "post",
    endpoint: ENDPOINTS.SEARCH_SHIPPING_RATE,
    queryKey: [NAMESPACE.SEARCH_SHIPPING_RATE],
  });
};

export default useSearchShippingRate;
