import { ENDPOINTS, NAMESPACE } from "@/lib/constants";
import { ISinglOrderDetails } from "@/types/api.types";
import useQueryActionHook from "../use-queryaction";

const useCancelOrder = (orderId: string) => {
  return useQueryActionHook<ISinglOrderDetails>({
    method: "get",
    endpoint: ENDPOINTS.CANCEL_ORDER(orderId),
    queryKey: [NAMESPACE.CANCEL_ORDER, orderId],
    enabled: !!orderId,
  });
};

export default useCancelOrder;
