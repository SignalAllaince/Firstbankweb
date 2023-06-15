import { ENDPOINTS, NAMESPACE } from "@/lib/constants";
import { SearchResponse } from "@/types/api.types";
import useQueryActionHook from "../use-queryaction";

const useGetSearchResult = ({
  search,
  mnp,
  mxp,
  sort,
  ps,
  page,
}: {
  search: string;
  mnp?: string | number;
  mxp?: string | number;
  sort?: string;
  ps?: number;
  page?: number;
}) => {
  return useQueryActionHook<SearchResponse>({
    method: "get",
    endpoint: ENDPOINTS.GET_SEARCH_RESULT(search, mnp, mxp, sort, ps, page),
    queryKey: [NAMESPACE.GET_SEARCH_RESULT, search, mnp, mxp, sort, ps, page],
    enabled: !!search,
  });
};

export default useGetSearchResult;
