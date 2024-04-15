import {useContext, useState} from "react";
import {Helmet} from "react-helmet-async";
import {Link} from "react-router-dom";
import {AuthContext} from "../FirebaseProvider/AuthProvider";
import {useForm} from "react-hook-form";
import toast from "react-hot-toast";
import {FaRegEye, FaRegEyeSlash} from "react-icons/fa";
import SocialLogin from "../components/SocialLogin/SocialLogin";

const Login = () => {
  const [showPassword, setShowPassword] = useState(null);
  const {login} = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm();

  const onSubmit = (data) => {
    const {email, password} = data;
    login(email, password)
      .then((result) => {
        toast.success("Login Successful");
        console.log(result);
      })
      .catch((error) => {
        toast.error("Invalid email & password");
        console.error(error);
      });
  };

  return (
    <div className="hero mt-20">
      <Helmet>
        <title>Login | BusinessBlast</title>
      </Helmet>
      <div className="hero-content flex-col">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold text-[#1DD100]">Login now!</h1>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-md bg-base-100 lg:w-[700px] ">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                {...register("email", {required: true})}
              />
              {errors.email && (
                <span className="text-[#FC6400] text-sm mt-1 ml-1">
                  This field is required!
                </span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="password"
                className="input input-bordered"
                {...register("password", {required: true})}
              />
              {errors.password && (
                <span className="text-[#FC6400] text-sm mt-1 ml-1">
                  This field is required!
                </span>
              )}
              <span
                className="absolute mt-[50px] ml-48 lg:ml-72 cursor-pointer text-lg"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
              </span>
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-[#1DD100] hover:bg-[#1DD100] text-white">
                Login
              </button>
            </div>
          </form>
          <p className="text-center mb-4">
            Do not have an account?{" "}
            <Link to="/register" className="text-[#FC6400]">
              Register
            </Link>
          </p>
          <SocialLogin />
        </div>
      </div>
    </div>
  );
};

export default Login;
