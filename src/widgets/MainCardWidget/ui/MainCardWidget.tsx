import React from "react";
import { BsPlusLg } from "react-icons/bs";
import { SlOptions } from "react-icons/sl"
import { LuLayoutTemplate } from "react-icons/lu"
import CardWidget from "../../CardWidget";

import { ItemsProps } from "pages/DashboardPage/ui/DashboardPage.interface";

import "./MainCardWidget.css";

const MainCardWidget: React.FC<ItemsProps> = ({ id, mainTitle, author, date, tasks }) => {
  console.log(tasks)
  return (
    <div className="main-card">
      <div className="title">
        <h3>{mainTitle}</h3>
        <div className="options-btn" title="Options">
          <SlOptions />
        </div>
      </div>
      {
        tasks?.map((el) => {
          return(
            <CardWidget key={el.id} {...el}/>
          )
        })
      }
      <div className="actions">
        <div className="add-btn">
          <BsPlusLg />
          <span>Add a card</span>
        </div>
        <div className="mark-all-btn" title="Create from template">
          <LuLayoutTemplate />
        </div>
      </div>
    </div>
  );
};

export default MainCardWidget;
