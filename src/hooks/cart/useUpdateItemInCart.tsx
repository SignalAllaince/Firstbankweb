import { ENDPOINTS, NAMESPACE } from "@/lib/constants";
import { CartQuantityUpdate } from "@/types/api.types";
import useCustomMutation from "../use-mutationaction";

const useUpdateItemInCart = () => {
  return useCustomMutation<Record<string, unknown>, CartQuantityUpdate>({
    method: "post",
    endpoint: ENDPOINTS.UPDATE_CART_ITEM_QUANTITY,
    queryKey: [NAMESPACE.UPDATE_CART_ITEM_QUANTITY],
  });
};

export default useUpdateItemInCart;
