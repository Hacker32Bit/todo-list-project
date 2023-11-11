import React from "react";
import { MdOutlineSubject } from "react-icons/md"
import { BiSolidCommentDetail } from "react-icons/bi"
import { FaRegPenToSquare } from "react-icons/fa6"

import "./CardWidget.css"

const CardWidget: React.FC = () => {
  return (
    <div className="card">
      <div className="content">
        <p>Some text Title 1inside main card</p>
      </div>
      <div className="card-actions">
        <div className="btn" title="Description">
          <MdOutlineSubject />
        </div>
        <div className="btn" title="Comments">
          <BiSolidCommentDetail />
          <span>1</span>
        </div>
        <div className="btn" title="Edit">
          <FaRegPenToSquare />
        </div>
      </div>
    </div>
  );
};

export default CardWidget;
