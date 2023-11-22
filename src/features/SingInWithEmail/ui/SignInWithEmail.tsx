import React, { FC, useEffect, useState } from "react";
import { auth } from "../../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const SignInWithEmail: FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errorList, setErrorList] = useState<string[]>([]);

  const navigate = useNavigate()

  const onChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const onChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  useEffect(() => {}, [errorList]);

  const SignInWithEmail = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        console.log(userCredential);
        navigate('/dashboard');
        // ...
      })
      .catch((error) => {
        setErrorList((prev) => {
          if (!prev.includes(error.message)) {
            const newArr = [...prev];
            newArr.push(error.message);
            return newArr;
          }
          return prev;
        });
      });
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
      </form>
      {errorList.length
        ? errorList.map((el) => (
            <p className="error" key={el}>
              {el}
            </p>
          ))
        : null}
      <button className="btn" onClick={SignInWithEmail}>
        Sign In
      </button>
    </>
  );
};

export default SignInWithEmail;
