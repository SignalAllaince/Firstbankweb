import { ENDPOINTS, NAMESPACE } from "@/lib/constants";
import useQueryActionHook from "../use-queryaction";

const useCheckoutAll = (key: any = null) => {
  return useQueryActionHook({
    method: "get",
    endpoint: ENDPOINTS.GET_ALL_CHECKOUT,
    queryKey: [NAMESPACE.GET_ALL_CHECKOUT],
    enabled: !!key,
  });
};

export default useCheckoutAll;
