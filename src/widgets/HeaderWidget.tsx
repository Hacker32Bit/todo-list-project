import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./HeaderWidget.css";

const HeaderWidget: React.FC = () => {
  const [isLogged, setIsLogged] = useState(false);

  return (
    <div className="header">
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
              <Link to="/setting">
                <li>Setting</li>
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
