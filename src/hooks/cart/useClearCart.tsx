import { ENDPOINTS, NAMESPACE } from "@/lib/constants";
import useCustomMutation from "../use-mutationaction";

const useClearCart = () => {
  return useCustomMutation({
    method: "delete",
    endpoint: ENDPOINTS.CLEAR_CART,
    queryKey: [NAMESPACE.CLEAR_CART],
  });
};

export default useClearCart;
