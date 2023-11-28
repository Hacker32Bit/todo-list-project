import { useAppDispatch } from "hooks/useAppDispatch";
import { FC } from "react";
import { FaGithub } from "react-icons/fa"
import { useNavigate } from "react-router-dom";
import { loginWithGithub } from "redux/thunks/loginWithGithub";

const SignInWithGithub: FC = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const signIn = async () => {
    await dispatch(loginWithGithub())
    navigate("/boards")
  }

  return (
    <button className="btn" onClick={signIn}>
      <FaGithub />
    </button>
  );
};

export default SignInWithGithub;
