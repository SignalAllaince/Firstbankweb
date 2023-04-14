import { ReactNode } from "react";
import Footer from "../footer";
import Navbar from "../navbar";
import Section from "../section";

function AppLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <Navbar />
      <Section className="flex-1">{children}</Section>
      <Footer />
    </div>
  );
}

export default AppLayout;
