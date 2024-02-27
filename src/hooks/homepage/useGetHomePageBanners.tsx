import { ENDPOINTS, NAMESPACE } from "@/lib/constants";
import useQueryActionHook from "../use-queryaction";

const useGetHomePageBanners = () => {
  return useQueryActionHook({
    method: "get",
    endpoint: ENDPOINTS.GET_HOMEPAGE_BANNERS,
    queryKey: [NAMESPACE.GET_HOMEPAGE_BANNERS],
  });
};

export default useGetHomePageBanners;
