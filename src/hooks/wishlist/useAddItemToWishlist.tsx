import { ENDPOINTS, NAMESPACE } from "@/lib/constants";
import useQueryActionHook from "../use-queryaction";

const useAddItemToWishlist = (id: number) => {
  return useQueryActionHook({
    method: "get",
    endpoint: ENDPOINTS.ADD_ITEM_TO_WISHLIST(id),
    queryKey: [NAMESPACE.ADD_ITEM_TO_WISHLIST, id],
    enabled: false,
  });
};

export default useAddItemToWishlist;
