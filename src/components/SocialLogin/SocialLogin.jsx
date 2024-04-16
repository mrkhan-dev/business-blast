import {useContext} from "react";
import {FaFacebook, FaGithub} from "react-icons/fa";
import {IoLogoGoogle} from "react-icons/io";
import {AuthContext} from "../../FirebaseProvider/AuthProvider";
import {useLocation, useNavigate} from "react-router-dom";

const SocialLogin = () => {
  const {googleLogin, facebookLogin, githubLogin} = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const socialLogin = (socialProvider) => {
    socialProvider().then((result) => {
      if (result.user) {
        navigate(location.state || "/");
      }
    });
  };

  return (
    <div className="mb-4">
      <h3 className="text-center divider text-xl font-medium">Login With</h3>
      <div className="flex justify-center text-2xl gap-8">
        <div>
          <button onClick={() => socialLogin(googleLogin)}>
            <IoLogoGoogle />
          </button>
        </div>
        <div>
          <button onClick={() => socialLogin(facebookLogin)}>
            <FaFacebook />
          </button>
        </div>
        <div>
          <button onClick={() => socialLogin(githubLogin)}>
            <FaGithub />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SocialLogin;
