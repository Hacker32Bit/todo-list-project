import { useAppDispatch } from "hooks/useAppDispatch";
import { FC, useEffect } from "react";
import { FaGithub } from "react-icons/fa"
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "redux/store";
import { UsersProps } from "redux/store.interfaces";
import { loginWithGithub } from "redux/thunks/Auth/loginWithGithub";
import { createUsers } from "redux/thunks/Users/createUsers";
import { fetchUsers } from "redux/thunks/Users/fetchUsers";

const SignInWithGithub: FC = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const users = useSelector((state: RootState) => state.users);

  const signIn = async () => {
    const {payload}: any = await dispatch(loginWithGithub())

    if (!users.users.find((el: UsersProps) => el.id === payload.uid)) {
        dispatch(createUsers(payload))
    }

    navigate("/boards")
  }

  useEffect(() => {
    dispatch(fetchUsers())
  }, [dispatch])

  return (
    <button className="btn" onClick={signIn}>
      <FaGithub />
    </button>
  );
};

export default SignInWithGithub;
