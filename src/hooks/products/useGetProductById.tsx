import { ENDPOINTS, NAMESPACE } from "@/lib/constants";
import useQueryActionHook from "../use-queryaction";

const useGetProductById = (productId: string) => {
  return useQueryActionHook({
    method: "get",
    endpoint: ENDPOINTS.GET_PRODUCT_BY_ID(productId),
    queryKey: [NAMESPACE.GET_PRODUCT_BY_ID, productId],
  });
};

export default useGetProductById;
