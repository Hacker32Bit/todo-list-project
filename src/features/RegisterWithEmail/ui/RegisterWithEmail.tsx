import React, { FC, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerWithEmail } from "redux/thunks/Auth/registerWithEmail";
import { useAppDispatch } from "hooks/useAppDispatch";

const RegisterWithEmail: FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [cpassword, setCpassword] = useState<string>("");
  const [rules, setRules] = useState<boolean>(false);
  const [errorList, setErrorList] = useState<string[]>([]);

  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const onChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const onChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const onChangeCpassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCpassword(event.target.value);
  };

  const checkRules = () => {
    setRules((prev) => !prev);
  };

  useEffect(() => {}, [errorList]);

  const Register = async () => {
    setErrorList([]);

    if (password !== cpassword) {
      setErrorList((prev) => {
        if (!prev.includes("Both passwords are not same!")) {
          const newArr = [...prev];
          newArr.push("Both passwords are not same!");
          return newArr;
        }

        return prev;
      });
    }
    if (!rules) {
      setErrorList((prev) => {
        if (!prev.includes("Please, read rules and mark check!")) {
          const newArr = [...prev];
          newArr.push("Please, read rules and mark check!");
          return newArr;
        }
        return prev;
      });
    }

    if (errorList.length) {
      return;
    }

    await dispatch(registerWithEmail({email, password}))
    navigate("/boards")
    
  };

  return (
    <>
      <form>
        <label htmlFor="email">Email: </label>
        <input type="email" id="email" value={email} onChange={onChangeEmail} />
        <label htmlFor="password">Password: </label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={onChangePassword}
        />
        <label htmlFor="cpassword">Confirm password: </label>
        <input
          type="password"
          id="cpassword"
          value={cpassword}
          onChange={onChangeCpassword}
        />
        <div className="rule">
          <input type="checkbox" checked={rules} onChange={checkRules} />
          <label className="rule">
            <a href="#" className="rule">
              I have read & agree with terms & conditions
            </a>
          </label>
        </div>
      </form>
      {errorList.length
        ? errorList.map((el) => (
            <p className="error" key={el}>
              {el}
            </p>
          ))
        : null}
      <button className="btn register" onClick={Register}>
        Sign Up
      </button>
    </>
  );
};

export default RegisterWithEmail;
