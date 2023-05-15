import { ENDPOINTS, NAMESPACE } from "@/lib/constants";
import useCustomMutation from "../use-mutationaction";

const useDeleteItemFromCart = (itemId: string) => {
  return useCustomMutation({
    method: "delete",
    endpoint: ENDPOINTS.DELETE_CART_ITEM(itemId),
    queryKey: [NAMESPACE.DELETE_CART_ITEM, itemId],
  });
};

export default useDeleteItemFromCart;
