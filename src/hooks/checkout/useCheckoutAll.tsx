import { ENDPOINTS } from "@/lib/constants";
import useCustomMutation from "../use-mutationaction";

const useCheckoutAll = () => {
  return useCustomMutation({
    method: "post",
    endpoint: ENDPOINTS.GET_ALL_CHECKOUT,
  });
};

export default useCheckoutAll;
