import { ENDPOINTS, NAMESPACE } from "@/lib/constants";
import useQueryActionHook from "../use-queryaction";

const useGetProductsBySearchOptions = () => {
  return useQueryActionHook({
    method: "get",
    endpoint: ENDPOINTS.GET_PRODUCTS_SEARCH_OPTIONS,
    queryKey: [NAMESPACE.GET_PRODUCTS_SEARCH_OPTIONS],
  });
};

export default useGetProductsBySearchOptions;
