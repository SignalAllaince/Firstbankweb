import { ENDPOINTS, NAMESPACE } from "@/lib/constants";
import { SearchCategories } from "@/types/api.types";
import useQueryActionHook from "../use-queryaction";

const useGetSearchCategories = (staleTime: number = 3600000) => {
  return useQueryActionHook<SearchCategories[]>({
    method: "get",
    endpoint: ENDPOINTS.GET_SEARCHED_CATEGORIES,
    queryKey: [NAMESPACE.GET_SEARCHED_CATEGORIES],
    staleTime,
  });
};

export default useGetSearchCategories;
