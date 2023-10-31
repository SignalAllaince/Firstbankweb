import { ENDPOINTS, NAMESPACE } from "@/lib/constants";
import { IUserReview } from "@/types/api.types";
import useQueryActionHook from "../use-queryaction";

const useGetUserReviews = (pageNumber: number, pageSize = 10) => {
  return useQueryActionHook<IUserReview>({
    method: "get",
    endpoint: ENDPOINTS.GET_USER_REVIEWS(pageNumber, pageSize),
    queryKey: [NAMESPACE.GET_USER_REVIEWS, pageNumber, pageSize],
  });
};

export default useGetUserReviews;
