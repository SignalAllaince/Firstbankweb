import IfElse from "@/components/if-else";
import AppLayout from "@/components/layout/app-layout";
import PageHead from "@/components/page-head";
import useGetCategoryProducts from "@/hooks/category/useGetCategoryProducts";
import { stringifyCategory } from "@/lib/utils/common.utils";
import { NextPageWithLayout } from "@/types/component.types";
import { ProtectedComponentType } from "@/types/service.types";
import type { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { ParsedUrlQuery } from "querystring";
import { ReactElement } from "react";
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
  const categoryProducts = useGetCategoryProducts({
    categoryId: props?.query?.categoryId as unknown as number,
  });

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
        <CategoryMain
          categoryName={props?.query?.categoryName as string}
          categoryProducts={categoryProducts?.value!}
        />
      </IfElse>
    </div>
  );
};

CategoryPage.getLayout = function getLayout(page: ReactElement) {
  return <AppLayout hasBanner={false}>{page}</AppLayout>;
};

CategoryPage.auth = true;

export default CategoryPage;
