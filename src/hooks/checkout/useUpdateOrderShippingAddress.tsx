import { ENDPOINTS } from "@/lib/constants";
import { ICategoryDetails } from "@/types/api.types";
import useCustomMutation from "../use-mutationaction";

const useUpdateOrderShippingAddress = (addressId: string, orderId: string) => {
  return useCustomMutation<ICategoryDetails>({
    method: "put",
    endpoint: ENDPOINTS.UPDATE_ORDER_SHIPPING_ADDRESS(addressId, orderId),
  });
};

export default useUpdateOrderShippingAddress;
