import FadeInOut from "@/components/fade";
import { signIn, useSession } from "next-auth/react";
import React from "react";
import { HashLoader } from "react-spinners";

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const { data: session, status } = useSession();

  const isUser = !!session?.user;
  React.useEffect(() => {
    if (status === "loading") return; // Do nothing while loading
    // @ts-expect-error
    if (!isUser || session?.error) signIn(); // If not authenticated, force log in
    // @ts-expect-error
  }, [isUser, status, session?.error]);

  if (isUser) {
    return <>{children}</>;
  }

  return (
    <FadeInOut className="flex h-[100vh] items-center justify-center space-x-3 bg-brand-light">
      <HashLoader size={100} color="#003B65" />
    </FadeInOut>
  );
};
