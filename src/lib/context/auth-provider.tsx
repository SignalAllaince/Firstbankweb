import FadeInOut from "@/components/fade";
import { getCookie } from "cookies-next";
import { usePathname } from "next/navigation";
import React from "react";
import { HashLoader } from "react-spinners";
import { AuthPages, Constants, PAGES } from "../constants";

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const isUser = getCookie(Constants.token)?.toString() ?? "";
  const isAuthPage = AuthPages.includes(pathname);

  React.useEffect(() => {
    if (!isUser && !isAuthPage) {
      window.location.href = `${PAGES.SIGNIN}?callbackUrl=${window.location.href}`;
    } // If not authenticated, force log in
  }, [isUser, isAuthPage]);

  if (isUser || isAuthPage) {
    return <>{children}</>;
  }

  return (
    <FadeInOut className="flex h-[100vh] items-center justify-center space-x-3 bg-brand-light">
      <HashLoader size={100} color="#003B65" />
    </FadeInOut>
  );
};
