import React from "react";
import DashboardWidget from "widgets/DashboardWidget/ui/DashboardWidget";
import SidebarWidget from "widgets/SidebarWidget";

import { useParams } from "react-router-dom";

const DashboardPage: React.FC = () => {
  const { id } = useParams();

  if (!id) {
    console.log("Parameter error");
  }

  return (
    <>
      <SidebarWidget />
      <DashboardWidget />
    </>
  );
};

export default DashboardPage;
