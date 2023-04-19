import Catergory from "@/components/category";
import AppLayout from "@/components/layout/app-layout";
import Section from "@/components/section";
import { NextPageWithLayout } from "@/types/component.types";
import { ProtectedComponentType } from "@/types/service.types";
import { ReactElement } from "react";

const Home: NextPageWithLayout & ProtectedComponentType = () => {
  return (
    <Section className="gap-y-20 pb-10">
      <Catergory header="Branch" />
      <Catergory header="Stationery" />
      <Catergory header="Uniform" />
    </Section>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <AppLayout>{page}</AppLayout>;
};

Home.auth = false;

export default Home;
