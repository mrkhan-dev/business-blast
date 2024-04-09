import {Link} from "react-router-dom";

const Login = () => {
  return (
    <div className="hero mt-20">
      <div className="hero-content flex-col">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 lg:w-[700px] ">
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
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-[#1DD100] text-white">Login</button>
            </div>
          </form>
          <p className="text-center mb-4">
            Do not have an account?{" "}
            <Link to="register" className="text-[#FC6400]">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
