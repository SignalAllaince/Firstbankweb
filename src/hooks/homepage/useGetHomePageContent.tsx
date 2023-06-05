import { ENDPOINTS, NAMESPACE } from "@/lib/constants";
import useQueryActionHook from "../use-queryaction";

const useGetHomePageContent = () => {
  return useQueryActionHook({
    method: "get",
    endpoint: ENDPOINTS.GET_HOMEPAGE_CONTENT,
    queryKey: [NAMESPACE.GET_HOMEPAGE_CONTENT],
  });
};

export default useGetHomePageContent;
