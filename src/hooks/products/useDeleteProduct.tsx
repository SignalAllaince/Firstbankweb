import { ENDPOINTS, NAMESPACE } from "@/lib/constants";
import useCustomMutation from "../use-mutationaction";

const useDeleteCategory = (productId: string) => {
  return useCustomMutation({
    method: "delete",
    endpoint: ENDPOINTS.DELETE_PRODUCT(productId),
    queryKey: [NAMESPACE.DELETE_PRODUCT, productId],
  });
};

export default useDeleteCategory;
