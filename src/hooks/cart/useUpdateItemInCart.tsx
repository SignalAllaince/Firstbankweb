import { ENDPOINTS, NAMESPACE } from "@/lib/constants";
import useCustomMutation from "../use-mutationaction";

const useUpdateItemInCart = () => {
  return useCustomMutation({
    method: "put",
    endpoint: ENDPOINTS.UPDATE_CART_ITEM_QUANTITY,
    queryKey: [NAMESPACE.UPDATE_CART_ITEM_QUANTITY],
  });
};

export default useUpdateItemInCart;
