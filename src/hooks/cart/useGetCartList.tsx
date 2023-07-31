import { ENDPOINTS, NAMESPACE } from "@/lib/constants";
import { CartListResponse } from "@/types/api.types";
import useQueryActionHook from "../use-queryaction";

const useGetCartList = (key: any = "key") => {
  return useQueryActionHook<CartListResponse>({
    method: "get",
    endpoint: ENDPOINTS.GET_CART_LIST,
    queryKey: [NAMESPACE.GET_CART_LIST],
    enabled: !!key,
    staleTime: 3600000,
  });
};

export default useGetCartList;
