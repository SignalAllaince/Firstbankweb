import { ENDPOINTS, NAMESPACE } from "@/lib/constants";
import useQueryActionHook from "../use-queryaction";

const useGetActiveTaxClass = () => {
  return useQueryActionHook({
    method: "get",
    endpoint: ENDPOINTS.GET_ACTIVE_TAXCLASS,
    queryKey: [NAMESPACE.GET_ACTIVE_TAXCLASS],
  });
};

export default useGetActiveTaxClass;
