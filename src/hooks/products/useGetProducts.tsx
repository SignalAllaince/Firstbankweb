import { ENDPOINTS, NAMESPACE } from "@/lib/constants";
import useQueryActionHook from "../use-queryaction";

const useGetProducts = () => {
  return useQueryActionHook({
    method: "get",
    endpoint: ENDPOINTS.GET_PRODUCTS_BY_SEARCH,
    queryKey: [NAMESPACE.GET_PRODUCTS_BY_SEARCH],
  });
};

export default useGetProducts;
