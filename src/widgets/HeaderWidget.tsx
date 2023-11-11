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

  const [isLogged, setIsLogged] = useState(true);

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
