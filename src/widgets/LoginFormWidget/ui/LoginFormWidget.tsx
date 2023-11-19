import React from "react";
import { Link } from "react-router-dom";

import "./LoginFormWidget.css";
import SignInWithGoogle from "features/SignInWithGoogle";
import SignInWithGithub from "features/SignInWithGithub";

const LoginFormWidget: React.FC = () => {

  return (
      <div className="login-form">
        <form>
          <label htmlFor="login">Login: </label>
          <input type="text" id="login"/>
          <label htmlFor="password">Password: </label>
          <input type="password" id="password" />
          <button className="btn">Sign In</button>
          </form>
          <h3>SignIn with social media:</h3>
          <div className="social-buttons">
            <SignInWithGoogle />
            <SignInWithGithub />
          </div>
          <p>
            Not registred? <Link to="/register">Do it now!</Link>
          </p>
          <p>Forgot password? <a href="#" className="red">Restore!</a></p>
      </div>
  );
};

export default LoginFormWidget;
