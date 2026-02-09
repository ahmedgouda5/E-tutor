import DashboardSideBar from "@/components/dashboard/shared/dashboardSideBar";
import DashboardAuthProvider from "@/providers/DahsboardAuthProvider";
import React, { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <DashboardAuthProvider>
      <div>
        <DashboardSideBar>
          {children}
        </DashboardSideBar>
      </div>
    </DashboardAuthProvider>
  );
};

export default Layout;
