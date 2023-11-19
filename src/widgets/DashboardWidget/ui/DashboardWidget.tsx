import React from "react";

import "./DashboardWidget.css";
import MainCardWidget from "../../MainCardWidget/ui/MainCardWidget";

const DashboardWidget: React.FC = () => {
  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <div className="board">
        <MainCardWidget />
        <MainCardWidget />
        <MainCardWidget />
        <MainCardWidget />
      </div>
    </div>
  );
};

export default DashboardWidget;
