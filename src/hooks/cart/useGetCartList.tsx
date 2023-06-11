import { ENDPOINTS, NAMESPACE } from "@/lib/constants";
import { CartListResponse } from "@/types/api.types";
import useQueryActionHook from "../use-queryaction";

const useGetCartList = () => {
  return useQueryActionHook<CartListResponse>({
    method: "get",
    endpoint: ENDPOINTS.GET_CART_LIST,
    queryKey: [NAMESPACE.GET_CART_LIST],
  });
};

export default useGetCartList;
