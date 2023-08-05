import { ENDPOINTS, NAMESPACE } from "@/lib/constants";
import { IOrderContainer } from "@/types/api.types";
import useCustomMutation from "../use-mutationaction";

const useGetAllOrders = () => {
  return useCustomMutation<IOrderContainer>({
    method: "post",
    endpoint: ENDPOINTS.GET_ALL_ORDERS,
    queryKey: [NAMESPACE.GET_ALL_ORDERS],
  });
};

export default useGetAllOrders;
