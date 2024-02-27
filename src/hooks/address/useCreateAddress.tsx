import { ENDPOINTS, NAMESPACE } from "@/lib/constants";
import useCustomMutation from "../use-mutationaction";

const useCreatedAddress = () => {
  return useCustomMutation({
    method: "post",
    endpoint: ENDPOINTS.CREATE_ADDRESS,
    queryKey: [NAMESPACE.CREATE_ADDRESS],
  });
};

export default useCreatedAddress;
