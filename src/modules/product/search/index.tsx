import IfElse from "@/components/if-else";
import AppLayout from "@/components/layout/app-layout";
import PageHead from "@/components/page-head";
import useGetSearchResult from "@/hooks/search/useGetSearchResult";
import { NextPageWithLayout } from "@/types/component.types";
import { ProtectedComponentType } from "@/types/service.types";
import type { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { ParsedUrlQuery } from "querystring";
import { ReactElement } from "react";
import CategoryLoading from "../category/loading";
import SearchMainSection from "./main";

export const getServerSideProps: GetServerSideProps<{
  query: ParsedUrlQuery;
}> = async (params) => {
  return {
    props: {
      query: params.query,
    },
  };
};

const SearchPage: NextPageWithLayout<
  InferGetServerSidePropsType<typeof getServerSideProps>
> &
  ProtectedComponentType = (props) => {
  const searchResult = useGetSearchResult({
    search: props?.query?.searchQuery as string,
  });
  console.log(searchResult?.value, "props");

  return (
    <div className="">
      <PageHead title={`${props?.query?.searchQuery ?? "***"} - Search`} />
      <IfElse
        ifOn={!searchResult.isLoading && !!searchResult?.value}
        ifOnElse={searchResult.isLoading && !searchResult?.value}
        onElse={<CategoryLoading />}
      >
        <SearchMainSection
          // categoryName={router?.query?.categoryName as string}
          searchResult={searchResult?.value!}
          search={props?.query?.searchQuery as string}
        />
      </IfElse>
    </div>
  );
};

SearchPage.getLayout = function getLayout(page: ReactElement) {
  return <AppLayout hasBanner={false}>{page}</AppLayout>;
};

SearchPage.auth = true;

export default SearchPage;
