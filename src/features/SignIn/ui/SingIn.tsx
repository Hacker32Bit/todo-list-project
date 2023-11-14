import { FC } from "react";
import { auth } from "../../../firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const SignIn: FC = () => {
  const singIn = async () => {
    const provider = new GoogleAuthProvider();

    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <button onClick={singIn}>
      Sign In with Google
    </button>
  );
};

export default SignIn;
