import React, { FC, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { registerWithEmail } from "redux/thunks/Auth/registerWithEmail";
import { useAppDispatch } from "hooks/useAppDispatch";
import { fetchUsers } from "redux/thunks/Users/fetchUsers";
import { createUsers } from "redux/thunks/Users/createUsers";

const RegisterWithEmail: FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [cpassword, setCpassword] = useState<string>("");
  const [rules, setRules] = useState<boolean>(false);
  const [errorList, setErrorList] = useState<string[]>([]);

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

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

    const {payload} = await dispatch(registerWithEmail({ email, password }))
    dispatch(createUsers(payload))
    navigate("/boards");
  };

  useEffect(() => {
    dispatch(fetchUsers())
  }, [dispatch])

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
            <Link to="#" className="rule">
              I have read & agree with terms & conditions
            </Link>
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
