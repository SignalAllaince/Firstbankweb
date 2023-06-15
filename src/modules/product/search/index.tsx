import IfElse from "@/components/if-else";
import AppLayout from "@/components/layout/app-layout";
import PageHead from "@/components/page-head";
import useGetSearchResult from "@/hooks/search/useGetSearchResult";
import PaginationContextProvider from "@/hooks/use-pagination";
import { NextPageWithLayout } from "@/types/component.types";
import { ProtectedComponentType } from "@/types/service.types";
import type { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { ParsedUrlQuery } from "querystring";
import React, { ReactElement } from "react";
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
  const [sort, setSortValue] = React.useState<string | undefined>(undefined);
  const [currentPageNumber, setPage] = React.useState(1);
  const pageSize = 6;

  const searchResult = useGetSearchResult({
    search: props?.query?.searchQuery as string,
    sort,
    ps: pageSize,
  });

  const changeSortHandler = (value: string) => setSortValue(value);

  return (
    <div className="">
      <PageHead title={`${props?.query?.searchQuery ?? "***"} - Search`} />
      <IfElse
        ifOn={!searchResult.isLoading && !!searchResult?.value}
        ifOnElse={searchResult.isLoading && !searchResult?.value}
        onElse={<CategoryLoading />}
      >
        <PaginationContextProvider
          currentPageNumber={currentPageNumber}
          setPage={setPage}
          total={searchResult?.value?.totalProduct!}
          pageSize={pageSize}
        >
          <SearchMainSection
            searchResult={searchResult?.value!}
            search={props?.query?.searchQuery as string}
            sort={sort}
            onChangeSort={changeSortHandler}
            isRefetching={searchResult.isRefetching}
          />
        </PaginationContextProvider>
      </IfElse>
    </div>
  );
};

SearchPage.getLayout = function getLayout(page: ReactElement) {
  return <AppLayout hasBanner={false}>{page}</AppLayout>;
};

SearchPage.auth = true;

export default SearchPage;
