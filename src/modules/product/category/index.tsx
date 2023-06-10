import IfElse from "@/components/if-else";
import AppLayout from "@/components/layout/app-layout";
import PageHead from "@/components/page-head";
import useGetCategoryProducts from "@/hooks/category/useGetCategoryProducts";
import { stringifyCategory } from "@/lib/utils/common.utils";
import { NextPageWithLayout } from "@/types/component.types";
import { ProtectedComponentType } from "@/types/service.types";
import { useRouter } from "next/router";
import { ReactElement } from "react";
import CategoryLoading from "./loading";
import CategoryMain from "./main";

// export async function getStaticPaths() {
//   const paths = getAllCategories();
//   return {
//     paths,
//     fallback: false,
//   };
// }

// export async function getStaticProps({ params }: { params: any }) {
//   return {
//     props: {
//       category: params.category,
//     },
//   };
// }

const CategoryPage: NextPageWithLayout & ProtectedComponentType = () => {
  const router = useRouter();
  const categoryProducts = useGetCategoryProducts(
    router?.query?.categoryId as unknown as number
  );

  return (
    <div className="">
      <PageHead
        title={stringifyCategory(
          (router.query?.categoryName as string) ?? "Category"
        )}
      />
      <IfElse
        ifOn={!categoryProducts.isLoading && !!categoryProducts?.value}
        ifOnElse={categoryProducts.isLoading && !categoryProducts?.value}
        onElse={<CategoryLoading />}
      >
        <CategoryMain
          categoryName={router?.query?.categoryName as string}
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
