import { ENDPOINTS, NAMESPACE } from "@/lib/constants";
import useCustomMutation from "../use-mutationaction";

const useAddItemToCart = (userId: string) => {
  return useCustomMutation({
    method: "post",
    endpoint: ENDPOINTS.ADD_ITEM_TO_CART(userId),
    queryKey: [NAMESPACE.ADD_ITEM_TO_CART, userId],
  });
};

export default useAddItemToCart;
