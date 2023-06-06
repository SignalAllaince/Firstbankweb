import Catergory from "@/components/category";
import AppLayout from "@/components/layout/app-layout";
import PageHead from "@/components/page-head";
import Pagination from "@/components/paginate";
import Section from "@/components/section";
import { NextPageWithLayout } from "@/types/component.types";
import { ProtectedComponentType } from "@/types/service.types";
import { ReactElement } from "react";

const Home: NextPageWithLayout & ProtectedComponentType = () => {
  return (
    <div className="pb-20">
      <PageHead title="Landing Page" />
      <Section className="gap-y-20">
        <Catergory header="Top Selling Products" />
        <Catergory header="Recommended for you" noMore />
        <Catergory header="Independence Deals" indep />
        <Catergory header="Top Deals on Home Appliance" />
        <Catergory header="Top Deals on Stationery" />
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
