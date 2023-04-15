import AppLayout from "@/components/app-layout";
import Catergory from "@/components/category";

export default function Home() {
  return (
    <AppLayout>
      <div className="gap-y-20">
        <Catergory header="Branch" />
        <Catergory header="Stationery" />
        <Catergory header="Uniform" />
      </div>
    </AppLayout>
  );
}
