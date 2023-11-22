import { FC } from "react";
import { auth } from "../../../firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { FcGoogle } from "react-icons/fc"

const SignInWithGoogle: FC = () => {
  const singIn = async () => {
    const provider = new GoogleAuthProvider();

    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <button className="btn" onClick={singIn}>
      <FcGoogle />
    </button>
  );
};

export default SignInWithGoogle;