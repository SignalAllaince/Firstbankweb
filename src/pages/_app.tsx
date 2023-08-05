import Icon from "@/components/icon";
import { AuthProvider } from "@/lib/context/auth-provider";
import "@/styles/globals.css";
import { AppPropsWithAuth } from "@/types/component.types";
import { HeartIcon } from "@heroicons/react/20/solid";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SessionProvider } from "next-auth/react";
import { SnackbarProvider } from "notistack";
import React from "react";

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
        <SnackbarProvider
          maxSnack={2}
          iconVariant={{
            info: (
              <Icon
                IconComp={HeartIcon}
                className="mr-2 text-brand-blue"
                boxSize={6}
              />
            ),
          }}
          autoHideDuration={5000}
          anchorOrigin={{
            horizontal: "right",
            vertical: "top",
          }}
          classes={{
            root: "toast-container",
          }}
        >
          {Component.auth ? (
            <AuthProvider>{layout}</AuthProvider>
          ) : (
            <>{layout}</>
          )}
        </SnackbarProvider>
      </QueryClientProvider>
    </SessionProvider>
  );
};

export default React.memo(MyApp);
