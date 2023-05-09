import { ENDPOINTS, NAMESPACE } from "@/lib/constants";
import { CreateProductResponse } from "@/types/api.types";
import useQueryActionHook from "../use-queryaction";

const useGetParentCategories = () => {
  return useQueryActionHook<CreateProductResponse>({
    method: "get",
    endpoint: ENDPOINTS.GET_CATEGORY_PARENT,
    queryKey: [NAMESPACE.GET_CATEGORY_PARENT],
  });
};

export default useGetParentCategories;
