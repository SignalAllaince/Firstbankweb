import { ENDPOINTS, NAMESPACE } from "@/lib/constants";
import { CategoryItems } from "@/types/api.types";
import useQueryActionHook from "../use-queryaction";

const useGetCategoryProducts = ({
  categoryId,
  mnp,
  mxp,
  sort,
  ps,
}: {
  categoryId: number;
  mnp?: string | number;
  mxp?: string | number;
  sort?: string;
  ps?: number;
}) => {
  return useQueryActionHook<CategoryItems>({
    method: "get",
    endpoint: ENDPOINTS.GET_SINGLE_CATEGORY_DETAILS(
      categoryId,
      mnp,
      mxp,
      sort,
      ps
    ),
    queryKey: [
      NAMESPACE.GET_SINGLE_CATEGORY_DETAILS,
      categoryId,
      mnp,
      mxp,
      sort,
      ps,
    ],
    enabled: !!categoryId,
  });
};

export default useGetCategoryProducts;
