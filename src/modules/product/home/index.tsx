import Catergory from "@/components/category";
import IfElse from "@/components/if-else";
import AppLayout from "@/components/layout/app-layout";
import PageHead from "@/components/page-head";
import Section from "@/components/section";
import useGetSearchCategories from "@/hooks/category/useGetSearchCategories";
import { NextPageWithLayout } from "@/types/component.types";
import { ReactElement } from "react";
import HomeLoader from "./loading";

const Home: NextPageWithLayout = () => {
  const searchCategories = useGetSearchCategories();

  return (
    <div className="pb-20">
      <PageHead title="Home Page" />
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
                  categoryId={category.id}
                  slug={category.slug}
                />
              ))}
          </>
        </IfElse>
      </Section>
    </div>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <AppLayout isMainPage>{page}</AppLayout>;
};

export default Home;
