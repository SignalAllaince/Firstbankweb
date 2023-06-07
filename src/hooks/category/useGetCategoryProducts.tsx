import { ENDPOINTS, NAMESPACE } from "@/lib/constants";
import useCustomMutation from "../use-mutationaction";

const useGetCategoryProducts = (categoryId: number) => {
  return useCustomMutation({
    method: "post",
    endpoint: ENDPOINTS.GET_SINGLE_CATEGORY(categoryId),
    queryKey: [NAMESPACE.GET_SINGLE_CATEGORY, categoryId],
    showFailureToast: false,
    showSuccessToast: false,
  });
};

export default useGetCategoryProducts;
