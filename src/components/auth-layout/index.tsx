import Image from "next/image";
import Link from "next/link";
import React from "react";
import logoImg from "../../../public/images/logo-blue.svg";
import Footer from "../footer";
import Heading from "../heading";

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
    <div className=" flex min-h-screen flex-col">
      <div className="custom-bg flex flex-1 items-center justify-center py-10">
        <div className="flex w-full max-w-xl flex-1 flex-col items-center space-y-4">
          <div className="max-w-[180px]">
            <Image src={logoImg} alt="first bank logo" />
          </div>
          <Heading className="text-white" size="h3" as="h3">
            Brandshop
          </Heading>
          <div className="w-full bg-white py-8 text-brand-darkest">
            <div className="mx-auto w-full px-4 sm:px-8 md:px-8 lg:max-w-md lg:px-0">
              <div className="space-y-1">
                <Heading size="h4" as="h4">
                  {section[authType]?.header}
                </Heading>
                <p className="text-sm">
                  Kindly enter your details correctly in the fields below
                </p>
              </div>

              <div className="flex-1 pb-4 pt-8">{children}</div>

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
      <Footer />
    </div>
  );
}

export default AuthLayout;
