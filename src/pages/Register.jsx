import {Link, useLocation, useNavigate} from "react-router-dom";
import {FaRegEye, FaRegEyeSlash} from "react-icons/fa";
import {useForm} from "react-hook-form";
import {useContext, useEffect, useState} from "react";
import {AuthContext} from "../FirebaseProvider/AuthProvider";
import {Helmet} from "react-helmet-async";
import toast from "react-hot-toast";
import AOS from "aos";
import "aos/dist/aos.css";

const Register = () => {
  const [regError, setRegError] = useState();
  const [viewPassword, setViewPassword] = useState(null);
  const {createUser, updateProfileInfo} = useContext(AuthContext);

  useEffect(() => {
    AOS.init({duration: 1000});
    AOS.refresh();
  }, []);

  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm();

  const navigate = useNavigate();
  const location = useLocation();

  const onSubmit = (data) => {
    const {email, password, name, photo} = data;

    if (password.length < 6) {
      setRegError("Password must be 6 character or longer");
      return;
    } else if (!/^(?=.*[a-z])(?=.*[A-Z]).*$/.test(password)) {
      setRegError("Password must be one uppercase & lowercase character");
      return;
    }

    setRegError("");
    // create user
    createUser(email, password)
      .then(() => {
        updateProfileInfo(name, photo).then(() => {
          navigate(location?.state || "/");
        });

        toast.success("Register Successful");
      })
      .catch((error) => {
        toast.error("This account already in use");
        console.error(error);
      });
  };

  return (
    <div className="hero mt-12" data-aos="zoom-in-up">
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
                {...register("photo")}
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
