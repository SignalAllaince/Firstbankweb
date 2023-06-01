import { ENDPOINTS, NAMESPACE } from "@/lib/constants";
import useQueryActionHook from "../use-queryaction";

const useGetWishlist = (pageNumber: number, pageSize = 10) => {
  return useQueryActionHook({
    method: "get",
    endpoint: ENDPOINTS.GET_WISHLIST(pageNumber, pageSize),
    queryKey: [NAMESPACE.GET_WISHLIST, pageNumber, pageSize],
  });
};

export default useGetWishlist;
