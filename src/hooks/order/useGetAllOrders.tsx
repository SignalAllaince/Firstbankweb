import { ENDPOINTS, NAMESPACE } from "@/lib/constants";
import useQueryActionHook from "../use-queryaction";

const useGetAllOrders = () => {
  return useQueryActionHook({
    method: "get",
    endpoint: ENDPOINTS.GET_ALL_ORDERS,
    queryKey: [NAMESPACE.GET_ALL_ORDERS],
  });
};

export default useGetAllOrders;
