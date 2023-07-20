import FadeInOut from "@/components/fade";
import useLocalStore from "@/hooks/use-localstore";
import { useRouter } from "next/router";
import React from "react";
import { HashLoader } from "react-spinners";
import { STOREID } from "../constants";

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const store = useLocalStore(STOREID);
  const router = useRouter();

  React.useEffect(() => {
    if (!store?.getItem()) {
      router.replace("/login");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.pathname]);

  if (store?.getItem()) {
    return <>{children}</>;
  }

  return (
    <FadeInOut className="flex h-[100vh] items-center justify-center space-x-3 bg-brand-light">
      <HashLoader size={100} color="#003B65" />
    </FadeInOut>
  );
};
