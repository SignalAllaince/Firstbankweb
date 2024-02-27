import { ENDPOINTS, NAMESPACE } from "@/lib/constants";
import { ReviewModel } from "@/types/api.types";
import useCustomMutation from "../use-mutationaction";

const useAddReview = () => {
  return useCustomMutation<any, ReviewModel>({
    method: "post",
    endpoint: ENDPOINTS.ADD_PRODUCT_REVIEW,
    queryKey: [NAMESPACE.ADD_PRODUCT_REVIEW],
  });
};

export default useAddReview;
