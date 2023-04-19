import { Inter } from "next/font/google";
import { ReactNode } from "react";
import Banner from "../banner";
import Footer from "../footer";
import HeroSection from "../hero-section";
import Navbar from "../navbar";
import CheckoutNavbar from "../navbar/checkout";
import MiniNavbar from "../navbar/mini";
import Section from "../section";

const inter = Inter({ subsets: ["cyrillic"] });

function AppLayout({
  children,
  hasBanner = true,
  isCheckout = false,
}: {
  children: ReactNode;
  hasBanner?: boolean;
  isCheckout?: boolean;
}) {
  return (
    <div className={`${inter.className} flex min-h-screen w-full flex-col`}>
      {!isCheckout ? (
        <>
          <Navbar />
          <MiniNavbar />
          <HeroSection />
        </>
      ) : (
        <CheckoutNavbar />
      )}
      <div className="flex-1 bg-brand-lightest">
        <Section>
          {hasBanner && (
            <div className="py-10">
              <Banner />
            </div>
          )}
        </Section>
        {children}
      </div>
      <Footer />
    </div>
  );
}

export default AppLayout;
