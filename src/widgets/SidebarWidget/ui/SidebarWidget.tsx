import React from "react";
import {
  CiViewTable,
  CiCalendarDate,
  CiViewBoard,
  CiUser,
} from "react-icons/ci";
import { Link } from "react-router-dom";
import { UserProps } from "widgets/HeaderWidget/ui/HeaderWidget";

import "./SidebarWidget.css";
import { useSelector } from "react-redux";

const SidebarWidget: React.FC<UserProps> = () => {
  const user = useSelector((state: any) => state.user);
  const profile = useSelector((state: any) => state.users.users.find((el: any) => el.id === user.profile.uid))
  const boards = useSelector((state: any) => state.boards);

  return (
    <div className="sidebar">
      <div className="profile">
        <img
          src={
            profile.photoURL ||
            "https://fs01.cap.ru//www21-11/galatr/person/cb45deff-7216-4306-80f7-9e48d03f437e/no_avatar_3st4mbc2.png"
          }
          alt="User"
        ></img>
        <h3>{profile.displayName}</h3>
        <span>Student</span>
      </div>
      <div className="line"></div>
      <div className="menu">
        <ul>
          <Link to="/boards">
            <li>
              <CiViewBoard /> Boards
            </li>
          </Link>
          <Link to="#">
            <li>
              <CiUser /> Members
            </li>
          </Link>
        </ul>
      </div>
      <div className="line"></div>
      <div className="menu">
        <h3>Workspace views</h3>
        <ul>
          <Link to="#">
            <li>
              <CiViewTable /> Table
            </li>
          </Link>
          <Link to="#">
            <li>
              <CiCalendarDate /> Calendar
            </li>
          </Link>
        </ul>
      </div>
      <div className="line"></div>
      {boards.boards ? (
        <div className="menu">
          <h3>Your boards</h3>
          <ul>
            {boards.boards.map((el: any) => {
              if(el.uid === user.profile.uid){
                return (
                  <Link to="#" key={el.id}>
                    <li>{el.boardName}</li>
                  </Link>
                );
              }
            })}
          </ul>
        </div>
      ) : null}
    </div>
  );
};

export default SidebarWidget;
