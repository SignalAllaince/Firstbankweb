import Catergory from "@/components/category";
import AppLayout from "@/components/layout/app-layout";
import Pagination from "@/components/paginate";
import Section from "@/components/section";
import { NextPageWithLayout } from "@/types/component.types";
import { ProtectedComponentType } from "@/types/service.types";
import { ReactElement } from "react";

const Home: NextPageWithLayout & ProtectedComponentType = () => {
  return (
    <div className="pb-20">
      <Section className="gap-y-20">
        <Catergory header="Branch" />
        <Catergory header="Stationery" />
        <Catergory header="Uniform" />
      </Section>
      <Section className="flex items-center justify-center">
        <Pagination />
      </Section>
    </div>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <AppLayout>{page}</AppLayout>;
};

Home.auth = false;

export default Home;
