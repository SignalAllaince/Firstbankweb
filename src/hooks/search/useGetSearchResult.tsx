import { ENDPOINTS, NAMESPACE } from "@/lib/constants";
import { SearchResponse } from "@/types/api.types";
import useQueryActionHook from "../use-queryaction";

const useGetSearchResult = ({
  search,
  mnp,
  mxp,
  sort,
}: {
  search: string;
  mnp?: string | number;
  mxp?: string | number;
  sort?: string;
}) => {
  return useQueryActionHook<SearchResponse>({
    method: "get",
    endpoint: ENDPOINTS.GET_SEARCH_RESULT(search, mnp, mxp, sort),
    queryKey: [NAMESPACE.GET_SEARCH_RESULT, search, mnp, mxp, sort],
    enabled: !!search,
  });
};

export default useGetSearchResult;
