import React from "react";
import { MdOutlineSubject } from "react-icons/md"
import { BiSolidCommentDetail } from "react-icons/bi"
import { FaRegPenToSquare } from "react-icons/fa6"

import { TasksProps } from "pages/DashboardPage/ui/DashboardPage.interface";

import "./CardWidget.css"

const CardWidget: React.FC<TasksProps> = ({ id, title, description, author, date, comments }) => {
  return (
    <div className="card">
      <div className="content">
        <p>{title}</p>
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
