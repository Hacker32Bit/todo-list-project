import React from "react";

import "./SidebarWidget.css";
import { Link } from "react-router-dom";

const SidebarWidget: React.FC = () => {
  return (
    <div className="sidebar">
      <div className="profile">
        <img
          src="https://fs01.cap.ru//www21-11/galatr/person/cb45deff-7216-4306-80f7-9e48d03f437e/no_avatar_3st4mbc2.png"
          alt="User"
        ></img>
        <h3>Name Surname</h3>
        <span>Student</span>
      </div>
      <div className="line"></div>
      <div className="menu">
        <ul>
          <Link to="#">
            <li>Board</li>
          </Link>
          <Link to="#">
            <li>Members</li>
          </Link>
          <Link to="#">
            <li>Workspace settings</li>
          </Link>
        </ul>
      </div>
      <div className="line"></div>
      <div className="menu">
        <ul>
          <Link to="#">
            <li>Table 1</li>
          </Link>
          <Link to="#">
            <li>Table 2</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default SidebarWidget;
