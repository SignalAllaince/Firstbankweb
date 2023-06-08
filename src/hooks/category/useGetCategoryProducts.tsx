import { ENDPOINTS, NAMESPACE } from "@/lib/constants";
import { CategoryItems } from "@/types/api.types";
import useCustomMutation from "../use-mutationaction";

const useGetCategoryProducts = (categoryId: number) => {
  return useCustomMutation<CategoryItems>({
    method: "post",
    endpoint: ENDPOINTS.GET_SINGLE_CATEGORY(categoryId),
    queryKey: [NAMESPACE.GET_SINGLE_CATEGORY, categoryId],
    showFailureToast: false,
    showSuccessToast: false,
    enabled: !!categoryId,
  });
};

export default useGetCategoryProducts;
