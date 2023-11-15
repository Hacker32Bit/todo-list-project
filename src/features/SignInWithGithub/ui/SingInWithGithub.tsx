import { FC } from "react";
import { auth } from "../../../firebase";
import { GithubAuthProvider, signInWithPopup } from "firebase/auth";
import { FaGithub } from "react-icons/fa"

const SignInWithGithub: FC = () => {
  const singIn = async () => {
    const provider = new GithubAuthProvider();

    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <button className="btn" onClick={singIn}>
      <FaGithub />
    </button>
  );
};

export default SignInWithGithub;
