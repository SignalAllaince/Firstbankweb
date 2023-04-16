import AppLayout from "@/components/app-layout";
import { NextPageWithLayout } from "@/types/component.types";
import { ProtectedComponentType } from "@/types/service.types";
import { ReactElement } from "react";

const SearchPage: NextPageWithLayout & ProtectedComponentType = () => {
  return <div className=""></div>;
};

SearchPage.getLayout = function getLayout(page: ReactElement) {
  return <AppLayout hasBanner={false}>{page}</AppLayout>;
};

SearchPage.auth = false;

export default SearchPage;
