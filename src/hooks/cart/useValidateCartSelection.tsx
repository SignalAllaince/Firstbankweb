import { ENDPOINTS, NAMESPACE } from "@/lib/constants";
import useCustomMutation from "../use-mutationaction";

const useUpdateItemInCart = () => {
  return useCustomMutation({
    method: "post",
    endpoint: ENDPOINTS.CART_VALIDATION_SELECTION,
    queryKey: [NAMESPACE.CART_VALIDATION_SELECTION],
  });
};

export default useUpdateItemInCart;
