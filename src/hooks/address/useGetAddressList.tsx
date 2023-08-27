import { ENDPOINTS, NAMESPACE } from "@/lib/constants";
import { IAddressItem } from "@/types/api.types";
import useQueryActionHook from "../use-queryaction";

const useGetAddressList = () => {
  return useQueryActionHook<IAddressItem[]>({
    method: "get",
    endpoint: ENDPOINTS.GET_ADDRESS_LIST,
    queryKey: [NAMESPACE.GET_ADDRESS_LIST],
  });
};

export default useGetAddressList;
