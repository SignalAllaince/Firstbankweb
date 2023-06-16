import useLocalStore from "@/hooks/use-localstore";
import { useRouter } from "next/router";
import React from "react";
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
    <div className="flex h-[100vh] items-center justify-center space-x-3 bg-brand-light">
      <svg
        className="h-10 w-10 animate-spin text-brand-blue"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        ></circle>
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        ></path>
      </svg>
      <p className="text-xl font-bold">Loading...</p>
    </div>
  );
};
