import { ENDPOINTS, NAMESPACE } from "@/lib/constants";
import { CategoryItems } from "@/types/api.types";
import useQueryActionHook from "../use-queryaction";

const useGetCategoryProducts = (categoryId: number) => {
  return useQueryActionHook<CategoryItems>({
    method: "get",
    endpoint: ENDPOINTS.GET_SINGLE_CATEGORY(categoryId),
    queryKey: [NAMESPACE.GET_SINGLE_CATEGORY, categoryId],
    enabled: !!categoryId,
  });
};

export default useGetCategoryProducts;
