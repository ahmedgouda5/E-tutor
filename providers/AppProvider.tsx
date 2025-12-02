import React from "react";
import dynamic from "next/dynamic";

const Navabr = dynamic(() => import("@/components/shared/Navabr"), {
  loading: () => <div>Loading Navbar...</div>,
});

const Footer = dynamic(() => import("@/components/shared/Footer"), {
  loading: () => <div>Loading Footer...</div>,
});

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <nav>
        <Navabr />
      </nav>
      <main className="min-h-screen px-4  ">{children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default AppProvider;
