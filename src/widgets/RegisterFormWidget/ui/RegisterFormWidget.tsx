import React from "react";
import { Link } from "react-router-dom";

import "./RegisterFormWidget.css";
import "../../LoginFormWidget/ui/LoginFormWidget.css";
import RegisterWithEmail from "features/RegisterWithEmail";

const RegisterFormWidget: React.FC = () => {
  return (
    <div className="login-form">
      <RegisterWithEmail />
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
