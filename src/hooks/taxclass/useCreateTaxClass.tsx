import { ENDPOINTS, NAMESPACE } from "@/lib/constants";
import useCustomMutation from "../use-mutationaction";

const useCreateTaxClass = () => {
  return useCustomMutation({
    method: "post",
    endpoint: ENDPOINTS.CREATE_TAXCLASS,
    queryKey: [NAMESPACE.CREATE_TAXCLASS],
  });
};

export default useCreateTaxClass;