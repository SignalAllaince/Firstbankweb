import { ENDPOINTS, NAMESPACE } from "@/lib/constants";
import { IOrderContainer } from "@/types/api.types";
import useQueryActionHook from "../use-queryaction";

const useGetAllOrders = () => {
  return useQueryActionHook<IOrderContainer>({
    method: "get",
    endpoint: ENDPOINTS.GET_ALL_ORDERS,
    queryKey: [NAMESPACE.GET_ALL_ORDERS],
  });
};

export default useGetAllOrders;
