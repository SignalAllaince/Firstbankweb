import IfElse from "@/components/if-else";
import AppLayout from "@/components/layout/app-layout";
import PageHead from "@/components/page-head";
import useGetCategoryProducts from "@/hooks/category/useGetCategoryProducts";
import useDebounce from "@/hooks/use-debounce";
import PaginationContextProvider from "@/hooks/use-pagination";
import { stringifyCategory } from "@/lib/utils/common.utils";
import { NextPageWithLayout } from "@/types/component.types";
import { ProtectedComponentType } from "@/types/service.types";
import type { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { ParsedUrlQuery } from "querystring";
import React, { ReactElement } from "react";
import CategoryLoading from "./loading";
import CategoryMain from "./main";

export const getServerSideProps: GetServerSideProps<{
  query: ParsedUrlQuery;
}> = async (params) => {
  return {
    props: {
      query: params.query,
    },
  };
};

const CategoryPage: NextPageWithLayout<
  InferGetServerSidePropsType<typeof getServerSideProps>
> &
  ProtectedComponentType = (props) => {
  const [sort, setSortValue] = React.useState<string | undefined>(undefined);
  const [currentPageNumber, setPage] = React.useState(1);
  const pageSize = 10;

  const [max, setMax] = React.useState("");
  const [min, setMin] = React.useState("");

  const onMaxChange = (value: string) => setMax(value);

  const onMinChange = (value: string) => setMin(value.trim());

  const debouncedMin = useDebounce(min, 2000);
  const debouncedMax = useDebounce(max, 2000);

  const categoryProducts = useGetCategoryProducts({
    categoryId: props?.query?.categoryId as unknown as number,
    sort,
    page: currentPageNumber,
    ps: pageSize,
    mnp: debouncedMin,
    mxp: debouncedMax,
    staleTime: 0,
  });

  const changeSortHandler = (value: string) => setSortValue(value);

  return (
    <div className="">
      <PageHead
        title={stringifyCategory(
          (props?.query?.categoryName as string) ?? "Category"
        )}
      />
      <IfElse
        ifOn={!categoryProducts.isLoading && !!categoryProducts?.value}
        ifOnElse={categoryProducts.isLoading && !categoryProducts?.value}
        onElse={<CategoryLoading />}
      >
        <PaginationContextProvider
          currentPageNumber={currentPageNumber}
          setPage={setPage}
          total={categoryProducts?.value?.totalProduct!}
          pageSize={pageSize}
        >
          <CategoryMain
            categoryName={props?.query?.categoryName as string}
            categoryProducts={categoryProducts?.value!}
            sort={sort}
            onChangeSort={changeSortHandler}
            isRefetching={categoryProducts.isRefetching}
            max={max}
            onMaxChange={onMaxChange}
            min={min}
            onMinChange={onMinChange}
          />
        </PaginationContextProvider>
      </IfElse>
    </div>
  );
};

CategoryPage.getLayout = function getLayout(page: ReactElement) {
  return <AppLayout hasBanner={false}>{page}</AppLayout>;
};

CategoryPage.auth = true;

export default CategoryPage;
