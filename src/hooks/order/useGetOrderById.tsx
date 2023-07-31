import { ENDPOINTS, NAMESPACE } from "@/lib/constants";
import { ISinglOrderDetails } from "@/types/api.types";
import useQueryActionHook from "../use-queryaction";

const useGetOrderById = (orderId: string) => {
  return useQueryActionHook<ISinglOrderDetails>({
    method: "get",
    endpoint: ENDPOINTS.GET_SINGLE_ORDERS(orderId),
    queryKey: [NAMESPACE.GET_SINGLE_ORDERS, orderId],
    enabled: !!orderId,
  });
};

export default useGetOrderById;
