import DashboardSideBar from "@/components/dashboard/shared/dashboardSideBar";
import React, { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <DashboardSideBar>
        {children}
      </DashboardSideBar>
    </div>
  );
};

export default Layout;
