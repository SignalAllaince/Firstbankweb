import { ENDPOINTS, NAMESPACE } from "@/lib/constants";
import useQueryActionHook from "../use-queryaction";

const useGetProductsOrderedBy = () => {
  return useQueryActionHook({
    method: "get",
    endpoint: ENDPOINTS.GET_PRODUCTS_ORDERBY,
    queryKey: [NAMESPACE.GET_PRODUCTS_ORDERBY],
  });
};

export default useGetProductsOrderedBy;
