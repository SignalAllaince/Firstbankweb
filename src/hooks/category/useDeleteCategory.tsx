import { ENDPOINTS, NAMESPACE } from "@/lib/constants";
import useCustomMutation from "../use-mutationaction";

const useDeleteCategory = (categoryId: string) => {
  return useCustomMutation({
    method: "delete",
    endpoint: ENDPOINTS.DELETE_CATEGORY(categoryId),
    queryKey: [NAMESPACE.DELETE_CATEGORY, categoryId],
  });
};

export default useDeleteCategory;
