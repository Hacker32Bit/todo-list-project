import React from "react";
import { BsCheck2All, BsPlusLg } from "react-icons/bs";
import { SlOptions } from "react-icons/sl"
import CardWidget from "../../CardWidget";

import "./MainCardWidget.css";

const MainCardWidget: React.FC = () => {
  return (
    <div className="main-card">
      <div className="title">
        <h3>Title 1</h3>
        <div className="options-btn" title="Options">
          <SlOptions />
        </div>
      </div>
      <CardWidget />
      <div className="actions">
        <div className="add-btn">
          <BsPlusLg />
          <span>Add a card</span>
        </div>
        <div className="mark-all-btn" title="Mark all done">
          <BsCheck2All />
        </div>
      </div>
    </div>
  );
};

export default MainCardWidget;
