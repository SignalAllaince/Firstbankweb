import { ENDPOINTS, NAMESPACE } from "@/lib/constants";
import { IProductReview } from "@/types/api.types";
import useQueryActionHook from "../use-queryaction";

const useGetProductReview = (
  productId: number,
  pageNumber: number,
  pageSize: number
) => {
  return useQueryActionHook<IProductReview>({
    method: "get",
    endpoint: ENDPOINTS.GET_PRODUCT_REVIEWS(productId, pageNumber, pageSize),
    queryKey: [NAMESPACE.GET_PRODUCT_REVIEWS, productId, pageNumber],
  });
};

export default useGetProductReview;
