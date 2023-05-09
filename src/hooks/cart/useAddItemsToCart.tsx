import { ENDPOINTS, NAMESPACE } from "@/lib/constants";
import useCustomMutation from "../use-mutationaction";

const useAddItemsToCart = (userId: string) => {
  return useCustomMutation({
    method: "post",
    endpoint: ENDPOINTS.ADD_ITEMS_TO_CART(userId),
    queryKey: [NAMESPACE.ADD_ITEMS_TO_CART, userId],
  });
};

export default useAddItemsToCart;
