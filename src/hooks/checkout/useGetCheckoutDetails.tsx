import { ENDPOINTS, NAMESPACE } from "@/lib/constants";
import useQueryActionHook from "../use-queryaction";

const useGetCheckoutDetails = (userId: string, oid: string) => {
  return useQueryActionHook({
    method: "get",
    endpoint: ENDPOINTS.GET_CHECKOUT_DETAILS(userId, oid),
    queryKey: [NAMESPACE.GET_CHECKOUT_DETAILS],
    enabled: !!userId || !!oid,
  });
};

export default useGetCheckoutDetails;
