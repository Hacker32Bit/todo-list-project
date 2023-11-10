import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./HeaderWidget.css"

const HeaderWidget: React.FC = () => {
  const [isLogged, setIsLogged] = useState(false);

  return (
    <div className="header">
      <div className="nav-left">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
      {isLogged ? (
        <div className="nav-right">
          <div className="profile">
            <ul>
              <li>
                <Link to="/setting">Setting</Link>
              </li>
              <li>
                <Link to="/dashboard">Dashboard</Link>
              </li>
            </ul>
          </div>
        </div>
      ) : (
        <div className="nav-right">
          <ul>
            <li>
              <Link to="/register">Register</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default HeaderWidget;
