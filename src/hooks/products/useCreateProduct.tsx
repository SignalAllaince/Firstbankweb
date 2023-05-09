import { ENDPOINTS, NAMESPACE } from "@/lib/constants";
import { CreateProductResponse } from "@/types/api.types";
import useCustomMutation from "../use-mutationaction";

const useCreateProduct = () => {
  return useCustomMutation<CreateProductResponse, FormData>({
    method: "post",
    endpoint: ENDPOINTS.CREATE_PRODUCTS,
    queryKey: [NAMESPACE.CREATE_PRODUCTS],
  });
};

export default useCreateProduct;
