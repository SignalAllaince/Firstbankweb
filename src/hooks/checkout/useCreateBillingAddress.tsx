import { ENDPOINTS, NAMESPACE } from "@/lib/constants";
import { CreateShippingAdress, ICategoryDetails } from "@/types/api.types";
import useCustomMutation from "../use-mutationaction";

const useCreateBillingAddress = (orderId: string) => {
  return useCustomMutation<ICategoryDetails, CreateShippingAdress>({
    method: "post",
    endpoint: ENDPOINTS.CREATE_NEW_CHECKOUT_BILLING_ADDRESS(orderId),
    queryKey: [NAMESPACE.CREATE_NEW_CHECKOUT_BILLING_ADDRESS],
  });
};

export default useCreateBillingAddress;
