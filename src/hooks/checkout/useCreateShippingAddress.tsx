import { ENDPOINTS, NAMESPACE } from "@/lib/constants";
import { CreateShippingAdress } from "@/types/api.types";
import useCustomMutation from "../use-mutationaction";

const useCreateShippingAddress = (orderId: string) => {
  return useCustomMutation<Record<string, unknown>, CreateShippingAdress>({
    method: "post",
    endpoint: ENDPOINTS.CREATE_NEW_CHECKOUT_SHIPPING_ADDRESS(orderId),
    queryKey: [NAMESPACE.CREATE_NEW_CHECKOUT_SHIPPING_ADDRESS],
  });
};

export default useCreateShippingAddress;
