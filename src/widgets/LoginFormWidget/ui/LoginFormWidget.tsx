import React from "react";
import { Link } from "react-router-dom";

import "./LoginFormWidget.css";
import SignInWithGoogle from "features/SignInWithGoogle";
import SignInWithGithub from "features/SignInWithGithub";
import SignInWithEmail from "features/SingInWithEmail";

const LoginFormWidget: React.FC = () => {

  return (
      <div className="login-form">
        <SignInWithEmail />
          <h3>SignIn with social media:</h3>
          <div className="social-buttons">
            <SignInWithGoogle />
            <SignInWithGithub />
          </div>
          <p>
            Not registred? <Link to="/register">Do it now!</Link>
          </p>
      </div>
  );
};

export default LoginFormWidget;
