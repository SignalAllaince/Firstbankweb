import { AuthProvider } from "@/lib/context/auth-provider";
import "@/styles/globals.css";
import { AppPropsWithAuth } from "@/types/component.types";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SessionProvider } from "next-auth/react";
import React from "react";
import { ToastProvider } from "react-toast-notifications";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {},
  },
});

const MyApp = ({
  Component,
  pageProps: { session, ...pageProps },
}: AppPropsWithAuth) => {
  const getLayout = Component.getLayout || ((page) => page);
  const layout = getLayout(<Component {...pageProps} />);

  return (
    <SessionProvider session={session}>
      <QueryClientProvider client={queryClient}>
        <ToastProvider
          autoDismiss
          autoDismissTimeout={7000}
          placement="top-right"
        >
          {Component.auth ? (
            <AuthProvider>{layout}</AuthProvider>
          ) : (
            <>{layout}</>
          )}
        </ToastProvider>
      </QueryClientProvider>
    </SessionProvider>
  );
};

export default React.memo(MyApp);
