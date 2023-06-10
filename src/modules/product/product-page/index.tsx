import IfElse from "@/components/if-else";
import AppLayout from "@/components/layout/app-layout";
import useGetProductById from "@/hooks/products/useGetProductById";
import { NextPageWithLayout } from "@/types/component.types";
import { ProtectedComponentType } from "@/types/service.types";
import { useRouter } from "next/router";
import { ReactElement } from "react";
import ProductPageLoader from "./loading";
import ProductMainSection from "./main";

const ProductPage: NextPageWithLayout & ProtectedComponentType = () => {
  const router = useRouter();
  const getProduct = useGetProductById(router?.query?.productId as string);

  return (
    <div className="bg-white pb-10">
      <IfElse
        ifOn={!getProduct.isLoading && !!getProduct?.value}
        ifOnElse={getProduct.isLoading && !getProduct?.value}
        onElse={<ProductPageLoader />}
      >
        <ProductMainSection productDetails={getProduct?.value!} />
      </IfElse>
      {/* second section */}
    </div>
  );
};

ProductPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <AppLayout isMainPage hasBanner={false}>
      {page}
    </AppLayout>
  );
};

ProductPage.auth = true;

export default ProductPage;
