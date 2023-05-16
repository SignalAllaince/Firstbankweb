import { ENDPOINTS, NAMESPACE } from "@/lib/constants";
import useCustomMutation from "../use-mutationaction";

const useAddReview = () => {
  return useCustomMutation({
    method: "post",
    endpoint: ENDPOINTS.ADD_PRODUCT_REVIEW,
    queryKey: [NAMESPACE.ADD_PRODUCT_REVIEW],
  });
};

export default useAddReview;
