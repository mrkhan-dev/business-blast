import {Link} from "react-router-dom";
import {FaRegEye, FaRegEyeSlash} from "react-icons/fa";
import {useForm} from "react-hook-form";
import {useContext, useState} from "react";
import {AuthContext} from "../FirebaseProvider/AuthProvider";
import {Helmet} from "react-helmet-async";
import toast from "react-hot-toast";

const Register = () => {
  const [regError, setRegError] = useState();
  const [viewPassword, setViewPassword] = useState(null);
  const {createUser} = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm();

  const onSubmit = (data) => {
    const {email, password} = data;
    if (password.length < 6) {
      setRegError("Password must be 8 character or longer");
      return;
    } else if (!/^(?=.*[a-z])(?=.*[A-Z]).*$/.test(password)) {
      setRegError("Password must be one uppercase & lowercase character");
      return;
    }

    setRegError("");
    createUser(email, password)
      .then((result) => {
        toast.success("Register Successful");
        console.log(result);
      })
      .catch((error) => {
        toast.error("This account already in use");
        console.error(error);
      });
  };

  return (
    <div className="hero mt-12">
      <Helmet>
        <title>Register | BusinessBlast</title>
      </Helmet>
      <div className="hero-content flex-col">
        <div className="text-center lg:text-left">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1DD100]">
            Please Register
          </h1>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-md bg-base-100 lg:w-[700px] ">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder=" Name"
                className="input input-bordered"
                {...register("name", {required: true})}
              />
              {errors.name && (
                <span className="text-[#FC6400] text-sm mt-1 ml-1">
                  This field is required!
                </span>
              )}
            </div>
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
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                placeholder="Photo URL"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type={viewPassword ? "text" : "password"}
                placeholder="password"
                className="input input-bordered relative"
                {...register("password", {required: true})}
              />
              {errors.password && (
                <span className="text-[#FC6400] text-sm mt-1 ml-1">
                  This field is required!
                </span>
              )}
              <span
                className="absolute mt-[50px] ml-48 lg:ml-72 cursor-pointer text-lg"
                onClick={() => setViewPassword(!viewPassword)}
              >
                {viewPassword ? <FaRegEye /> : <FaRegEyeSlash />}
              </span>
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-[#1DD100] hover:bg-[#1DD100] text-white">
                Register
              </button>
            </div>
          </form>
          {regError && (
            <p className="text-center text-sm text-[#FC6400] mb-3">
              {regError}
            </p>
          )}
          <p className="text-center mb-4">
            Already have an account?{" "}
            <Link to="/login" className="text-[#FC6400]">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
