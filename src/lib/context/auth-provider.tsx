import { signIn, useSession } from "next-auth/react";
import React from "react";

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
    <div className="flex h-screen items-center justify-center">
      <div>Spinner</div>
    </div>
  );
};
