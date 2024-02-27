import { ENDPOINTS, NAMESPACE } from "@/lib/constants";
import useCustomMutation from "../use-mutationaction";

const useAddItemToCart = () => {
  return useCustomMutation({
    method: "post",
    endpoint: ENDPOINTS.ADD_ITEM_TO_CART,
    queryKey: [NAMESPACE.ADD_ITEM_TO_CART],
    showSuccessToast: false,
    showFailureToast: true,
  });
};

export default useAddItemToCart;
