"use client";

import { SessionProvider } from "next-auth/react";
import ReduxProvider from "@/lib/Provider";

const Provider = ({ children }: { children: React.ReactNode }) => {
  return (
    <SessionProvider>
      <ReduxProvider>{children}</ReduxProvider>
    </SessionProvider>
  );
};

export default Provider;
