import {Helmet} from "react-helmet-async";
import {Link} from "react-router-dom";

const Login = () => {
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
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
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
        </div>
      </div>
    </div>
  );
};

export default Login;
