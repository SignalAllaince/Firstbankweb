import { ENDPOINTS, NAMESPACE } from "@/lib/constants";
import { IOrderDetails } from "@/types/api.types";
import useQueryActionHook from "../use-queryaction";

const useGetAllOrders = () => {
  return useQueryActionHook<IOrderDetails[]>({
    method: "get",
    endpoint: ENDPOINTS.GET_ALL_ORDERS,
    queryKey: [NAMESPACE.GET_ALL_ORDERS],
    staleTime: 1800000,
  });
};

export default useGetAllOrders;
