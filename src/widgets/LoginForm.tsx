import React from "react";
import { Link } from "react-router-dom";

import "./LoginForm.css";

const LoginForm: React.FC = () => {
  return (
      <div className="login-form">
        <form>
          <label htmlFor="login">Login: </label>
          <input type="text" id="login"/>
          <label htmlFor="password">Password: </label>
          <input type="password" id="password" />
          <button className="btn">Sign In</button>
          <p>
            Not registred? <Link to="/register">Do it now!</Link>
          </p>
          <p>Forgot password? <a href="#" className="red">Restore!</a></p>

        </form>
      </div>
  );
};

export default LoginForm;
