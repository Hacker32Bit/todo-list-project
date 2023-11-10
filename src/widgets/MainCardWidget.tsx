import React from "react";
import { BsCheck2All, BsPlusLg } from "react-icons/bs";
import CardWidget from "./CardWidget";

import "./MainCardWidget.css";

const MainCardWidget: React.FC = () => {
  return (
    <div className="main-card">
      <h3>Title 1</h3>
      <CardWidget />
      <div className="actions">
        <div className="add-btn">
          <BsPlusLg />
          <span>Add a card</span>
        </div>
        <div className="mark-all-btn">
          <BsCheck2All />
        </div>
      </div>
    </div>
  );
};

export default MainCardWidget;
