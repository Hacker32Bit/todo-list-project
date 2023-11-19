import React, { FC, useEffect, useState } from "react";
import { auth } from "../../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

const RegisterWithEmail: FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [cpassword, setCpassword] = useState<string>("");
  const [rules, setRules] = useState<boolean>(false);
  const [errorList, setErrorList] = useState<string[]>([])

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

  useEffect(() => console.log('mounted'), [errorList]);

  const Register = () => {
    setErrorList([])
    console.log(errorList)

    if(password != cpassword) {
      console.log("im here", password, cpassword)
      setErrorList((prev) => {
        if(!prev.includes("Both passwords are not same!"))
          prev.push("Both passwords are not same!")

        return prev;
      })
    }
    if(!rules) {
      setErrorList((prev) => {
        if(!prev.includes("Please, read rules and mark check!"))
          prev.push("Please, read rules and mark check!")
        return prev
      })
    }
    console.log(errorList)

    if(errorList.length){
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    console.log(userCredential)
    // ...
  })
  .catch((error) => {
    if (error.message){
      setErrorList((prev) => {
        if(!prev.includes(error.message))
          prev.push(error.message)
        return prev
      })
    }
    console.log(error.message)
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
      {
        errorList.length ? (errorList.map((el) => <p key={el}>{el}</p>)) : null
        }
      <button className="btn register" onClick={Register}>
        Sign Up
      </button>
    </>
  );
};

export default RegisterWithEmail;
