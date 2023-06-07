import { ENDPOINTS, NAMESPACE } from "@/lib/constants";
import { SearchCategories } from "@/types/api.types";
import useQueryActionHook from "../use-queryaction";

const useGetSearchCategories = () => {
  return useQueryActionHook<SearchCategories[]>({
    method: "get",
    endpoint: ENDPOINTS.GET_SEARCHED_CATEGORIES,
    queryKey: [NAMESPACE.GET_SEARCHED_CATEGORIES],
  });
};

export default useGetSearchCategories;
