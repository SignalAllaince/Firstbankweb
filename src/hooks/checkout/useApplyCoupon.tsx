import { ENDPOINTS, NAMESPACE } from "@/lib/constants";
import { ApplyCoupon } from "@/types/api.types";
import useCustomMutation from "../use-mutationaction";

const useApplyCoupon = (orderId: string) => {
  return useCustomMutation<Record<string, unknown>, ApplyCoupon>({
    method: "post",
    endpoint: ENDPOINTS.APPLY_CHECKOUT_COUPON(orderId),
    queryKey: [NAMESPACE.APPLY_CHECKOUT_COUPON],
  });
};

export default useApplyCoupon;
