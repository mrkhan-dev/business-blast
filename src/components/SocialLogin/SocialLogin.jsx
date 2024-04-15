import {useContext} from "react";
import {FaFacebook, FaGithub} from "react-icons/fa";
import {IoLogoGoogle} from "react-icons/io";
import {AuthContext} from "../../FirebaseProvider/AuthProvider";

const SocialLogin = () => {
  const {googleLogin, githubLogin} = useContext(AuthContext);
  return (
    <div>
      <h3 className="text-center divider text-xl font-medium">Login With</h3>
      <div className="flex justify-center text-2xl gap-4">
        <div>
          <button onClick={() => googleLogin()}>
            <IoLogoGoogle />
          </button>
        </div>
        <div>
          <button>
            <FaFacebook />
          </button>
        </div>
        <div>
          <button onClick={() => githubLogin()}>
            <FaGithub />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SocialLogin;
