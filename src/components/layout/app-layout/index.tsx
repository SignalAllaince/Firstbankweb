import BannerNav from "@/components/banner-nav";
import { Rubik } from "next/font/google";
import { ReactNode } from "react";
import Banner from "../../banner";
import Footer from "../../footer";
import HeroSection from "../../hero-section";
import Navbar from "../../navbar";
import CheckoutNavbar from "../../navbar/checkout";
import MiniNavbar from "../../navbar/mini";
import Section from "../../section";

const inter = Rubik({ subsets: ["cyrillic"], weight: ["300"] });

function AppLayout({
  children,
  hasBanner = true,
  isCheckout = false,
  isMainPage = false,
}: {
  children: ReactNode;
  hasBanner?: boolean;
  isCheckout?: boolean;
  isMainPage?: boolean;
}) {
  return (
    <div className={`${inter.className} flex min-h-screen w-full flex-col`}>
      {!isCheckout ? (
        <>
          <Navbar />
          {!isMainPage ? (
            <>
              <MiniNavbar />
              <HeroSection />
            </>
          ) : null}
        </>
      ) : (
        <CheckoutNavbar />
      )}
      <div className="flex-1 bg-brand-lightest">
        <Section>
          {hasBanner && (
            <div className="flex space-x-7 py-10">
              <BannerNav />
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
