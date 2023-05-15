import { ENDPOINTS, NAMESPACE } from "@/lib/constants";
import useQueryActionHook from "../use-queryaction";

const useGetCart = (userId: string) => {
  return useQueryActionHook({
    method: "get",
    endpoint: ENDPOINTS.GET_CART_DATA(userId),
    queryKey: [NAMESPACE.GET_CART_DATA, userId],
  });
};

export default useGetCart;
