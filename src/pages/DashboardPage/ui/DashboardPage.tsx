import React from "react";
import DashboardWidget from "widgets/DashboardWidget/ui/DashboardWidget";
import SidebarWidget from "widgets/SidebarWidget";

const DashboardPage: React.FC = () => {
  return (
    <>
      <SidebarWidget />
      <DashboardWidget />
    </>
  );
};

export default DashboardPage;
