import { ENDPOINTS, NAMESPACE } from "@/lib/constants";
import { ProductDetailsRes } from "@/types/api.types";
import useQueryActionHook from "../use-queryaction";

const useGetProductById = (productId: string) => {
  return useQueryActionHook<ProductDetailsRes>({
    method: "get",
    endpoint: ENDPOINTS.GET_PRODUCT_BY_ID(productId),
    queryKey: [NAMESPACE.GET_PRODUCT_BY_ID, productId],
    enabled: !!productId,
  });
};

export default useGetProductById;