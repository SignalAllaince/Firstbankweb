import { ENDPOINTS, NAMESPACE } from "@/lib/constants";
import useCustomMutation from "../use-mutationaction";

const useRemoveFromWishlist = (itemId: number) => {
  return useCustomMutation({
    method: "delete",
    endpoint: ENDPOINTS.REMOVE_ITEM_FROM_WISHLIST(itemId),
    queryKey: [NAMESPACE.REMOVE_ITEM_FROM_WISHLIST, itemId],
  });
};

export default useRemoveFromWishlist;
