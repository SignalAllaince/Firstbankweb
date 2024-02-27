import { ENDPOINTS, NAMESPACE } from "@/lib/constants";
import useQueryActionHook from "../use-queryaction";

const useGetTaxClassList = () => {
  return useQueryActionHook({
    method: "get",
    endpoint: ENDPOINTS.GET_TAXCLASS_LIST,
    queryKey: [NAMESPACE.GET_TAXCLASS_LIST],
  });
};

export default useGetTaxClassList;
