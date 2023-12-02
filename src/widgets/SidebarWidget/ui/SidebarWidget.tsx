import React from "react";
import {
  CiViewTable,
  CiCalendarDate,
  CiViewBoard,
  CiUser,
} from "react-icons/ci";
import { Link } from "react-router-dom";

import "./SidebarWidget.css";
import { useSelector } from "react-redux";
import { RootState } from "redux/store";
import { BoardsProps, UsersProps } from "redux/store.interfaces";

const SidebarWidget: React.FC = () => {
  const user = useSelector((state: any) => state.user);
  const profile = useSelector((state: any) => state.users.users.find((el: UsersProps) => el.id === user.profile?.uid))
  const boards = useSelector((state: RootState) => state.boards);

  return (
    <div className="sidebar">
      <div className="profile">
        <img
          src={
            profile?.photoURL ||
            "https://fs01.cap.ru//www21-11/galatr/person/cb45deff-7216-4306-80f7-9e48d03f437e/no_avatar_3st4mbc2.png"
          }
          alt="User"
          loading="lazy"
        ></img>
        <h3>{profile?.displayName}</h3>
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
            {boards.boards.map((el: BoardsProps) => {
              if(el.uid === user.profile.uid){
                return (
                  <Link to="#" key={el.id}>
                    <li>{el.boardName}</li>
                  </Link>
                );
              }
              return null;
            })}
          </ul>
        </div>
      ) : null}
    </div>
  );
};

export default SidebarWidget;
