import { ENDPOINTS, NAMESPACE } from "@/lib/constants";
import useCustomMutation from "../use-mutationaction";

const useUpdateWishListItem = () => {
  return useCustomMutation({
    method: "put",
    endpoint: ENDPOINTS.UPDATE_WISHLIST_ITEM,
    queryKey: [NAMESPACE.UPDATE_WISHLIST_ITEM],
  });
};

export default useUpdateWishListItem;
