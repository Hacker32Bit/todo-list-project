import { FC } from "react";
import { FcGoogle } from "react-icons/fc"
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "hooks/useAppDispatch";
import { loginWithGoogle } from "redux/thunks/Auth/loginWithGoogle";

const SignInWithGoogle: FC = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const signIn = async () => {
    await dispatch(loginWithGoogle())
    navigate("/boards")
  }

  return (
    <button className="btn" onClick={signIn}>
      <FcGoogle />
    </button>
  );
};

export default SignInWithGoogle;
