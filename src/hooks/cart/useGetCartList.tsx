import { ENDPOINTS, NAMESPACE } from "@/lib/constants";
import useQueryActionHook from "../use-queryaction";

const useGetCartList = () => {
  return useQueryActionHook({
    method: "get",
    endpoint: ENDPOINTS.GET_CART_LIST,
    queryKey: [NAMESPACE.GET_CART_LIST],
  });
};

export default useGetCartList;
