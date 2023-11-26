import React from "react";
import DashboardWidget from "widgets/DashboardWidget/ui/DashboardWidget";
import SidebarWidget from "widgets/SidebarWidget";

import { DashboardPageProps } from "./DashboardPage.interface";

const DashboardPage: React.FC<DashboardPageProps> = ({ user, items, setItemsState }) => {
  return (
    <>
      <SidebarWidget user={user}/>
      <DashboardWidget user={user} items={items} setItemsState={setItemsState}/>
    </>
  );
};

export default DashboardPage;
