import { ENDPOINTS, NAMESPACE } from "@/lib/constants";
import useCustomMutation from "../use-mutationaction";

const useCreateCategory = () => {
  return useCustomMutation({
    method: "post",
    endpoint: ENDPOINTS.CREATE_CATEGORY,
    queryKey: [NAMESPACE.CREATE_CATEGORY],
  });
};

export default useCreateCategory;