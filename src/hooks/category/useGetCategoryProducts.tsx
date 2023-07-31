import { ENDPOINTS, NAMESPACE } from "@/lib/constants";
import { CategoryItems } from "@/types/api.types";
import useQueryActionHook from "../use-queryaction";

const useGetCategoryProducts = ({
  categoryId,
  mnp,
  mxp,
  sort,
  ps,
  page,
}: {
  categoryId: number;
  mnp?: string | number;
  mxp?: string | number;
  sort?: string;
  ps?: number;
  page?: number;
}) => {
  return useQueryActionHook<CategoryItems>({
    method: "get",
    endpoint: ENDPOINTS.GET_SINGLE_CATEGORY_DETAILS(
      categoryId,
      mnp,
      mxp,
      sort,
      ps,
      page
    ),
    queryKey: [
      NAMESPACE.GET_SINGLE_CATEGORY_DETAILS,
      categoryId,
      mnp,
      mxp,
      sort,
      ps,
      page,
    ],
    enabled: !!categoryId,
    // staleTime: 3600000,
  });
};

export default useGetCategoryProducts;
