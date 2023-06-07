import { ENDPOINTS, NAMESPACE } from "@/lib/constants";
import useQueryActionHook from "../use-queryaction";

const useGetAllCategories = () => {
  return useQueryActionHook({
    method: "get",
    endpoint: ENDPOINTS.GET_ALL_CATEGORIES,
    queryKey: [NAMESPACE.GET_ALL_CATEGORIES],
  });
};

export default useGetAllCategories;
