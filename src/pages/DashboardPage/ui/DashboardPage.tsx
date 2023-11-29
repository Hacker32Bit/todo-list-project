import React from "react";
import DashboardWidget from "widgets/DashboardWidget/ui/DashboardWidget";
import SidebarWidget from "widgets/SidebarWidget";

import { DashboardPageProps } from "./DashboardPage.interface";
import { useParams } from "react-router-dom";
import { useAppDispatch } from "hooks/useAppDispatch";
import { useSelector } from "react-redux";

const DashboardPage: React.FC<DashboardPageProps> = ({ items, setItemsState }) => {
  const { id } = useParams();

  if (!id) {
    console.log("Parameter error");
  }

  const dispatch = useAppDispatch();
  const boards = useSelector((state: any) => {
    return state.boards;
  });

  const user = useSelector((state: any) => {
    return state.user;
  });

  return (
    <>
      <SidebarWidget user={user}/>
      <DashboardWidget user={user} items={items} setItemsState={setItemsState}/>
    </>
  );
};

export default DashboardPage;
