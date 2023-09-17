import BlurImage from "@/components/image";
import { Rubik } from "next/font/google";
import Link from "next/link";
import React from "react";
import logoImg from "../../../../public/images/logo-blue.svg";
import Footer from "../../footer";
import Heading from "../../heading";

const inter = Rubik({ subsets: ["cyrillic"], weight: ["300"] });

const section = {
  personal: {
    header: "Staff/Personal Login",
    linkText: "Login with Branch profile",
    linkHref: "/login/branch",
  },
  branch: {
    header: "Branch Login",
    linkText: "Login with Staff/Personal profile",
    linkHref: "/login",
  },
};

function AuthLayout({
  children,
  authType,
}: {
  children: React.ReactNode;
  authType: "personal" | "branch";
}) {
  return (
    <div className={`${inter.className} flex min-h-screen flex-col`}>
      <div className="custom-bg flex flex-1 items-center justify-center  py-10">
        <div className="-mt-10 flex w-full max-w-xl flex-1 flex-col items-center space-y-4 sm:mt-0">
          <div className="max-w-[180px]">
            <BlurImage src={logoImg} alt="first bank logo" />
          </div>
          <Heading className="text-white" size="h3" as="h3">
            Brandshop
          </Heading>
          <div className="w-full bg-transparent py-8 text-white sm:bg-white sm:text-brand-darkest">
            <div className="mx-auto w-full px-6 sm:px-8 lg:max-w-md lg:px-0">
              <div className="space-y-1">
                <Heading size="h4" as="h4">
                  {section[authType]?.header}
                </Heading>
                <p className="text-sm">
                  Kindly enter your details correctly in the fields below
                </p>
              </div>

              <div className="flex-1 pb-4 pt-6 sm:pt-8">{children}</div>

              <div className="flex justify-center">
                <Link
                  href={section[authType]?.linkHref}
                  className="text-sm underline underline-offset-4"
                >
                  {section[authType]?.linkText}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden sm:block">
        <Footer />
      </div>
    </div>
  );
}

export default AuthLayout;
