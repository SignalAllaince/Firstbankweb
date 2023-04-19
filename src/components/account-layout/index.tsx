import { Inter } from "next/font/google";
import { ReactNode } from "react";
import Footer from "../footer";
import Navbar from "../navbar";
import Section from "../section";

const inter = Inter({ subsets: ["cyrillic"] });

function AppLayout({ children }: { children: ReactNode }) {
  return (
    <div className={`${inter.className} flex min-h-screen w-full flex-col`}>
      <Navbar />
      <div className="flex-1 bg-brand-lightest">
        <Section className="flex items-start gap-4">
          <div className="w-[270px] flex-shrink-0"></div>
          <div className="flex-1">{children}</div>
        </Section>
      </div>
      <Footer />
    </div>
  );
}

export default AppLayout;
