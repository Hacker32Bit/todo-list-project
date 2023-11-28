import React from "react";
import { Link } from "react-router-dom";

import "./RegisterFormWidget.css";
import "../../LoginFormWidget/ui/LoginFormWidget.css";
import RegisterWithEmail from "features/RegisterWithEmail";
import SignInWithGoogle from "features/SignInWithGoogle";
import SignInWithGithub from "features/SignInWithGithub";

const RegisterFormWidget: React.FC = () => {
  return (
    <div className="login-form">
      <RegisterWithEmail />
      <h3>SignUp with social media:</h3>
          <div className="social-buttons">
            <SignInWithGoogle />
            <SignInWithGithub />
          </div>
      <p>
        Have account? <Link to="/login">Sing In now!</Link>
      </p>
      <p>
        Have problem?{" "}
        <Link to="/contact" className="red">
          Contact us!
        </Link>
      </p>
    </div>
  );
};

export default RegisterFormWidget;
