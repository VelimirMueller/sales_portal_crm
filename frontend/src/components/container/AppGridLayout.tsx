import React, { ReactNode } from "react";

type AppGridLayoutProps = {
  children: ReactNode;
};

function AppGridLayout({ children }: AppGridLayoutProps) {
  return (
    <div className="grid grid-cols-3 gap-4 px-4 max-w-[1200px] pb-4">
      {children}
    </div>
  );
}
export default AppGridLayout;