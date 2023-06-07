import { ENDPOINTS, NAMESPACE } from "@/lib/constants";
import { SearchCategories } from "@/types/api.types";
import useQueryActionHook from "../use-queryaction";

const useGetAllCategories = () => {
  return useQueryActionHook<SearchCategories[]>({
    method: "get",
    endpoint: ENDPOINTS.GET_ALL_CATEGORIES,
    queryKey: [NAMESPACE.GET_ALL_CATEGORIES],
  });
};

export default useGetAllCategories;
