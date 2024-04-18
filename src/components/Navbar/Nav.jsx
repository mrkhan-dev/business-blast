import {Link, NavLink} from "react-router-dom";
import {useContext} from "react";
import {AuthContext} from "../../FirebaseProvider/AuthProvider";
import toast from "react-hot-toast";

const Nav = () => {
  const {user, logOut} = useContext(AuthContext);
  console.log(user);

  const handleLogOut = () => {
    logOut().then((result) => {
      toast.success("Log Out Successful");
      console.log(result);
    });
  };

  const navLink = (
    <>
      <li>
        <NavLink
          className={({isActive}) =>
            isActive
              ? "text-md font-semibold px-5 py-3 border border-[#1DD100] text-[#1DD100]"
              : "text-md font-semibold text-[#131313CC]"
          }
          to="/"
        >
          Home
        </NavLink>
      </li>

      <li>
        <NavLink
          className={({isActive}) =>
            isActive
              ? "text-md font-semibold px-5 py-3 border border-[#1DD100] text-[#1DD100]"
              : "text-md font-semibold text-[#131313CC]"
          }
          to="/about"
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({isActive}) =>
            isActive
              ? "text-md font-semibold px-5 py-3 border border-[#1DD100] text-[#1DD100]"
              : "text-md font-semibold text-[#131313CC]"
          }
          to="/update_profile"
        >
          Update Profile
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100  shadow-lg lg:px-64 fixed z-10">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLink}
          </ul>
        </div>
        <Link
          to="/"
          className="btn btn-ghost text-xl md:text-2xl lg:text-3xl font-semibold gap-0 text-[#1DD100]  "
        >
          Business <span className="text-[#FC6400]">Blast</span>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 items-center">{navLink}</ul>
      </div>
      <div className="navbar-end">
        {user && (
          <div className="tooltip tooltip-left" data-tip={user.displayName}>
            <img className="h-12 rounded-full" src={user.photoURL} />
          </div>
        )}
        {user ? (
          <button
            className="btn bg-[#1DD100] text-white px-5 hover:bg-[#1DD100] text-base"
            onClick={handleLogOut}
          >
            Log Out
          </button>
        ) : (
          <Link
            to="login"
            className="btn bg-[#1DD100] text-white px-5 hover:bg-[#1DD100] text-base"
          >
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Nav;
