import { ENDPOINTS, NAMESPACE } from "@/lib/constants";
import useQueryActionHook from "../use-queryaction";

const useGetTaxRateList = () => {
  return useQueryActionHook({
    method: "get",
    endpoint: ENDPOINTS.GET_TAX_RATE_LIST,
    queryKey: [NAMESPACE.GET_TAX_RATE_LIST],
  });
};

export default useGetTaxRateList;
