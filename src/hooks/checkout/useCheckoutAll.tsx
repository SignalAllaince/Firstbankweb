import { ENDPOINTS, NAMESPACE } from "@/lib/constants";
import useQueryActionHook from "../use-queryaction";

const useCheckoutAll = () => {
  return useQueryActionHook({
    method: "get",
    endpoint: ENDPOINTS.GET_ALL_CHECKOUT,
    queryKey: [NAMESPACE.GET_ALL_CHECKOUT],
    enabled: false,
  });
};

export default useCheckoutAll;
