import { ENDPOINTS, NAMESPACE } from "@/lib/constants";
import useCustomMutation from "../use-mutationaction";

const useDeleteItemFromCart = () => {
  return useCustomMutation({
    method: "delete",
    endpoint: ENDPOINTS.DELETE_CART_ITEM,
    queryKey: [NAMESPACE.DELETE_CART_ITEM],
  });
};

export default useDeleteItemFromCart;
