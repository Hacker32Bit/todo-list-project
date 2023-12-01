import { FC, useEffect } from "react";
import { FcGoogle } from "react-icons/fc"
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "hooks/useAppDispatch";
import { loginWithGoogle } from "redux/thunks/Auth/loginWithGoogle";
import { createUsers } from "redux/thunks/Users/createUsers";
import { useSelector } from "react-redux";
import { fetchUsers } from "redux/thunks/Users/fetchUsers";

const SignInWithGoogle: FC = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const users = useSelector((state: any) => state.users);

  const signIn = async () => {
    const {payload}: any = await dispatch(loginWithGoogle())

    if (!users.users.find((el: any) => el.id === payload.uid)) {
        dispatch(createUsers(payload))
    }

    navigate("/boards")
  }

  useEffect(() => {
    dispatch(fetchUsers())
  }, [dispatch])

  return (
    <button className="btn" onClick={signIn}>
      <FcGoogle />
    </button>
  );
};

export default SignInWithGoogle;
