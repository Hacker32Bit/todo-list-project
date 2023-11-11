import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineBgColors } from "react-icons/ai";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";

import "./HeaderWidget.css";
import useTheme from "theme/useTheme";
import useColor from "theme/useColor";

const HeaderWidget: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const { toggleColor } = useColor();

  const [isLogged, setIsLogged] = useState(false);

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
        </ul>
      </div>
      {isLogged ? (
        <div className="nav-right">
          <div className="profile">
            <div className="profile-photo">
              <img
                src="https://fs01.cap.ru//www21-11/galatr/person/cb45deff-7216-4306-80f7-9e48d03f437e/no_avatar_3st4mbc2.png"
                alt="User"
              ></img>
            </div>

            <ul>
              <Link to="/settings">
                <li>Settings</li>
              </Link>
              <Link to="/dashboard">
                <li>Dashboard</li>
              </Link>
            </ul>
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
