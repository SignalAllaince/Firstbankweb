import { ENDPOINTS, NAMESPACE } from "@/lib/constants";
import useQueryActionHook from "../use-queryaction";

const useGetOrderById = (orderId: string) => {
  return useQueryActionHook({
    method: "get",
    endpoint: ENDPOINTS.GET_SINGLE_ORDERS(orderId),
    queryKey: [NAMESPACE.GET_SINGLE_ORDERS, orderId],
  });
};

export default useGetOrderById;
