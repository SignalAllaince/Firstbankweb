import { ENDPOINTS } from "@/lib/constants";
import useCustomMutation from "../use-mutationaction";

const useCheckoutAll = () => {
  return useCustomMutation<{ oid: string; sta: number }>({
    method: "post",
    endpoint: ENDPOINTS.GET_ALL_CHECKOUT,
  });
};

export default useCheckoutAll;
