import { ENDPOINTS, NAMESPACE } from "@/lib/constants";
import useCustomMutation from "../use-mutationaction";

const useUpdateTaxClass = () => {
  return useCustomMutation({
    method: "put",
    endpoint: ENDPOINTS.UPDATE_TAXCLASS,
    queryKey: [NAMESPACE.UPDATE_TAXCLASS],
  });
};

export default useUpdateTaxClass;
