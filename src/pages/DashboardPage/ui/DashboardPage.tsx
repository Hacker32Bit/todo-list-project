import React from "react";
import DashboardWidget from "widgets/DashboardWidget/ui/DashboardWidget";
import SidebarWidget from "widgets/SidebarWidget";

import { DashboardPageProps } from "./DashboardPage.interface";

const DashboardPage: React.FC<DashboardPageProps> = ({ items, setItemsState }) => {
  return (
    <>
      <SidebarWidget />
      <DashboardWidget items={items} setItemsState={setItemsState}/>
    </>
  );
};

export default DashboardPage;
