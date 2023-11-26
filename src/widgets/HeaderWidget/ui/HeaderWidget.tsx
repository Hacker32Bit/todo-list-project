import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineBgColors } from "react-icons/ai";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
import { User } from "firebase/auth";

import "./HeaderWidget.css";
import { useTheme } from "app/providers/ThemeProvider";
import { useColor } from "app/providers/ColorProvider";

export interface UserProps {
  user: User | null;
  handleSignOut?: () => void;
}

const HeaderWidget: React.FC<UserProps> = ({ user, handleSignOut }) => {
  const { theme, toggleTheme } = useTheme();
  const { toggleColor } = useColor();

  return (
    <div className="header">
      <div className="theme">
        <button className="btn theme-btn" onClick={toggleTheme}>
          {theme === "dark" ? <BsFillSunFill /> : <BsFillMoonFill />}
        </button>
        <button className="btn color-btn" onClick={toggleColor}>
          <AiOutlineBgColors />
        </button>
      </div>
      <div className="nav-left">
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/about">
            <li>About</li>
          </Link>
          <Link to="/contact">
            <li>Contact</li>
          </Link>
          {user ? (
            <Link to="/dashboard">
              <li>Dashboard</li>
            </Link>
          ) : null}
        </ul>
      </div>
      {user ? (
        <div className="nav-right">
          <div className="profile">
            <div className="dropdown">
              <div className="profile-photo">
                <img
                  src={
                    user.photoURL ||
                    "https://fs01.cap.ru//www21-11/galatr/person/cb45deff-7216-4306-80f7-9e48d03f437e/no_avatar_3st4mbc2.png"
                  }
                  alt="User"
                ></img>
              </div>
              <div className="dropdown-content">
                <h3>Account</h3>
                <div className="dropdown-profile">
                  <img
                    src={
                      user.photoURL ||
                      "https://fs01.cap.ru//www21-11/galatr/person/cb45deff-7216-4306-80f7-9e48d03f437e/no_avatar_3st4mbc2.png"
                    }
                    alt="User"
                  ></img>
                  <div className="dropdown-profile-data">
                    <h4>{user.displayName}</h4>
                    <span>{user.email}</span>
                  </div>
                </div>
                <div className="line"></div>
                <ul className="user-menu">
                  <Link to="#">
                    <li>Profile and visibility</li>
                  </Link>
                  <Link to="#">
                    <li>Activity</li>
                  </Link>
                  <Link to="#">
                    <li>Cards</li>
                  </Link>
                  <Link to="/settings">
                    <li>Settings</li>
                  </Link>
                </ul>
                <div className="line"></div>
                <ul className="user-menu">
                  <Link to="#">
                    <li>Help</li>
                  </Link>
                  <Link to="#">
                    <li>Shortcuts</li>
                  </Link>
                </ul>
                <div className="line"></div>
                <ul className="user-menu">
                  <Link to="/" onClick={handleSignOut}>
                    <li>Sign Out</li>
                  </Link>
                </ul>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="nav-right">
          <ul>
            <Link to="/register">
              <li>Register</li>
            </Link>
            <Link to="/login">
              <li>Login</li>
            </Link>
          </ul>
        </div>
      )}
    </div>
  );
};

export default HeaderWidget;
