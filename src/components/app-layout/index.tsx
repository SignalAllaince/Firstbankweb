import { Inter } from "next/font/google";
import { ReactNode } from "react";
import Banner from "../banner";
import Footer from "../footer";
import HeroSection from "../hero-section";
import Navbar from "../navbar";
import MiniNavbar from "../navbar/mini";
import Section from "../section";

const inter = Inter({ subsets: ["latin"] });

function AppLayout({ children }: { children: ReactNode }) {
  return (
    <div className={`${inter.className} flex min-h-screen w-full flex-col`}>
      <Navbar />
      <MiniNavbar />
      <HeroSection />
      <Section className="flex-1 pb-10">
        <div className="py-10">
          <Banner />
        </div>

        {children}
      </Section>
      <Footer />
    </div>
  );
}

export default AppLayout;
