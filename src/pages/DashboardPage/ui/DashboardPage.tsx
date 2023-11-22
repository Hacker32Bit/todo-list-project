import React from "react";
import DashboardWidget from "widgets/DashboardWidget/ui/DashboardWidget";
import SidebarWidget from "widgets/SidebarWidget";

import { DashboardPageProps } from "./DashboardPage.interface";

const DashboardPage: React.FC<DashboardPageProps> = ({ items }) => {
  return (
    <>
      <SidebarWidget />
      <DashboardWidget items={items}/>
    </>
  );
};

export default DashboardPage;
