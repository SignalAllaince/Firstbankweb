import { ENDPOINTS, NAMESPACE } from "@/lib/constants";
import { ICategoryDetails } from "@/types/api.types";
import useQueryActionHook from "../use-queryaction";

const useGetCheckoutDetails = (userId: string, oid: string) => {
  return useQueryActionHook<ICategoryDetails>({
    method: "get",
    endpoint: ENDPOINTS.GET_CHECKOUT_DETAILS(userId, oid),
    queryKey: [NAMESPACE.GET_CHECKOUT_DETAILS, oid],
    enabled: !!userId && !!oid,
  });
};

export default useGetCheckoutDetails;
