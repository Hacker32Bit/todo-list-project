import React from "react";
import { MdOutlineAddToPhotos } from "react-icons/md"

import "./DashboardWidget.css";
import MainCardWidget from "../../MainCardWidget/ui/MainCardWidget";

import { DashboardPageProps } from "pages/DashboardPage/ui/DashboardPage.interface";

const DashboardWidget: React.FC<DashboardPageProps> = ({ items }) => {

  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <div className="board">
        {items.map((el) => {
        return (
          <MainCardWidget key={el.id} {...el}/>
        )
        })}
        <div className="add-maincard">
          <button title="Add another list"><MdOutlineAddToPhotos /></button>
        </div>
      </div>
    </div>
  );
};

export default DashboardWidget;
