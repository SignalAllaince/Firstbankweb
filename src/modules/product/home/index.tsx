import Catergory from "@/components/category";
import IfElse from "@/components/if-else";
import AppLayout from "@/components/layout/app-layout";
import PageHead from "@/components/page-head";
import Pagination from "@/components/paginate";
import Section from "@/components/section";
import useGetSearchCategories from "@/hooks/category/useGetSearchCategories";
import { NextPageWithLayout } from "@/types/component.types";
import { ProtectedComponentType } from "@/types/service.types";
import { ReactElement } from "react";
import HomeLoader from "./loading";

const Home: NextPageWithLayout & ProtectedComponentType = () => {
  const searchCategories = useGetSearchCategories();

  return (
    <div className="pb-20">
      <PageHead title="Landing Page" />
      <Section className="gap-y-20">
        <IfElse
          ifOn={!searchCategories.isLoading && !!searchCategories?.value}
          ifOnElse={searchCategories.isLoading && !searchCategories?.value}
          onElse={
            <div>
              {[1, 2, 3, 4].map((i) => (
                <HomeLoader key={i} />
              ))}
            </div>
          }
        >
          <>
            {searchCategories?.value &&
              searchCategories?.value.map((category) => (
                <Catergory
                  key={category.id}
                  header={category.name}
                  id={category.id}
                />
              ))}
            {/* <Catergory header="Top Selling Products" />
            <Catergory header="Recommended for you" noMore />
            <Catergory header="Independence Deals" indep />
            <Catergory header="Top Deals on Home Appliance" />
            <Catergory header="Top Deals on Stationery" /> */}
          </>
        </IfElse>
      </Section>
      <Section className="flex items-center justify-center">
        <Pagination />
      </Section>
    </div>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <AppLayout isMainPage>{page}</AppLayout>;
};

Home.auth = false;

export default Home;
