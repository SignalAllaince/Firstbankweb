import { ENDPOINTS, NAMESPACE } from "@/lib/constants";
import useQueryActionHook from "../use-queryaction";

const useGetSearchCategories = () => {
  return useQueryActionHook({
    method: "get",
    endpoint: ENDPOINTS.GET_SEARCHED_CATEGORIES,
    queryKey: [NAMESPACE.GET_SEARCHED_CATEGORIES],
  });
};

export default useGetSearchCategories;
