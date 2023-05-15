import { ENDPOINTS, NAMESPACE } from "@/lib/constants";
import useQueryActionHook from "../use-queryaction";

const useGetCategoryList = () => {
  return useQueryActionHook({
    method: "get",
    endpoint: ENDPOINTS.GET_CATEGORY_LIST,
    queryKey: [NAMESPACE.GET_CATEGORY_LIST],
  });
};

export default useGetCategoryList;
