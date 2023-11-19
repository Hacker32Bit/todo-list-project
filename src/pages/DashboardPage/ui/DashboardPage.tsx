import React from "react";
import DashboardWidget from "widgets/DashboardWidget/ui/DashboardWidget";
import SidebarWidget from "widgets/SidebarWidget";

const DashboardPage: React.FC = () => {
  return (
    <div>
      <SidebarWidget />
      <DashboardWidget />
    </div>
  );
};

export default DashboardPage;
