import AppProvider from "@/providers/AppProvider";
import React from "react";
import { Toaster } from "react-hot-toast";
import "../i18n/client";
const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <AppProvider>
      <Toaster />
      {children}
    </AppProvider>
  );
};

export default layout;
