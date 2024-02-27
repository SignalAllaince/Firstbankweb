import FadeInOut from "@/components/fade";
import IfElse from "@/components/if-else";
import AppLayout from "@/components/layout/app-layout";
import useGetProductById from "@/hooks/products/useGetProductById";
import { NextPageWithLayout } from "@/types/component.types";
import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import { ReactElement } from "react";
import ProductPageLoader from "./loading";
import ProductMainSection from "./main";

const ProductPage: NextPageWithLayout = () => {
  const router = useRouter();
  const getProduct = useGetProductById(router?.query?.productId as string);

  return (
    <div className="bg-white pb-10">
      <AnimatePresence>
        <IfElse
          ifOn={!getProduct.isLoading && !!getProduct?.value}
          ifOnElse={getProduct.isLoading && !getProduct?.value}
          onElse={
            <FadeInOut>
              <ProductPageLoader />
            </FadeInOut>
          }
        >
          <FadeInOut>
            <ProductMainSection productDetails={getProduct?.value!} />
          </FadeInOut>
        </IfElse>
      </AnimatePresence>

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

export default ProductPage;
