import AppLayout from "@/components/app-layout";
import Catergory from "@/components/category";
import { NextPageWithLayout } from "@/types/component.types";
import { ProtectedComponentType } from "@/types/service.types";
import { ReactElement } from "react";

const Home: NextPageWithLayout & ProtectedComponentType = () => {
  return (
    <div className="gap-y-20">
      <Catergory header="Branch" />
      <Catergory header="Stationery" />
      <Catergory header="Uniform" />
    </div>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <AppLayout>{page}</AppLayout>;
};

Home.auth = false;

export default Home;
