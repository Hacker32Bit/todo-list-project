import React from "react";
import { Link } from "react-router-dom";

import "./LoginForm.css";
import "./RegisterWidget.css";

const RegisterWidget: React.FC = () => {
  return (
    <div className="login-form">
      <form>
        <label htmlFor="login">Login: </label>
        <input type="text" id="login" />
        <label htmlFor="password">Password: </label>
        <input type="password" id="password" />
        <label htmlFor="cpassword">Confirm password: </label>
        <input type="password" id="cpassword" />
        <div className="rule">
          <input type="checkbox" />
          <label className="rule">
            <a href="#" className="rule">
              I have read & agree with terms & conditions
            </a>
          </label>
        </div>

        <button className="btn">Sign Up</button>
        <p>
          have account? <Link to="/login">Sing In now!</Link>
        </p>
        <p>
          Have problem?{" "}
          <Link to="/contact" className="red">
            Contact us!
          </Link>
        </p>
      </form>
    </div>
  );
};

export default RegisterWidget;
