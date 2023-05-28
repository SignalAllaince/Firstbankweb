import { ENDPOINTS, NAMESPACE } from "@/lib/constants";
import useQueryActionHook from "../use-queryaction";

const useGetCartItemResult = (productId: string) => {
  return useQueryActionHook({
    method: "get",
    endpoint: ENDPOINTS.GET_CART_ITEM_RESULT(productId),
    queryKey: [NAMESPACE.GET_CART_ITEM_RESULT, productId],
  });
};

export default useGetCartItemResult;
