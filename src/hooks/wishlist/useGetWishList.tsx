import { ENDPOINTS, NAMESPACE } from "@/lib/constants";
import { WishlistResponse } from "@/types/api.types";
import useQueryActionHook from "../use-queryaction";

const useGetWishlist = (pageNumber: number, pageSize = 10) => {
  return useQueryActionHook<WishlistResponse>({
    method: "get",
    endpoint: ENDPOINTS.GET_WISHLIST(pageNumber, pageSize),
    queryKey: [NAMESPACE.GET_WISHLIST, pageNumber, pageSize],
  });
};

export default useGetWishlist;
