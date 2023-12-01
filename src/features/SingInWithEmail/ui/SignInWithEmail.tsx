import React, { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "hooks/useAppDispatch";
import { loginWithEmail } from "redux/thunks/Auth/loginWithEmail";

const SignInWithEmail: FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const onChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const onChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const signIn = async () => {
    await dispatch(loginWithEmail({email, password}))
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
      </form>
      <button className="btn" onClick={signIn}>
        Sign In
      </button>
    </>
  );
};

export default SignInWithEmail;
