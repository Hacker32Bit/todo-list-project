import React from "react";
import BoardsWidget from "widgets/BoardsWidget";

import SidebarWidget from "widgets/SidebarWidget";

const BoardsPage: React.FC = () => {
  return (
    <>
      <SidebarWidget />
      <BoardsWidget />
    </>
  );
};

export default BoardsPage;
