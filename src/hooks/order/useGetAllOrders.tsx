import { ENDPOINTS, NAMESPACE } from "@/lib/constants";
import { IOrderContainer } from "@/types/api.types";
import useQueryActionHook from "../use-queryaction";

const useGetAllOrders = (pageNumber: number, pageSize: number) => {
  return useQueryActionHook<IOrderContainer>({
    method: "get",
    endpoint: ENDPOINTS.GET_ALL_ORDERS(pageNumber, pageSize),
    queryKey: [NAMESPACE.GET_ALL_ORDERS, pageNumber, pageSize],
  });
};

export default useGetAllOrders;
