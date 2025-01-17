import {useContext, useEffect} from "react";
import {useForm} from "react-hook-form";
import {useLocation, useNavigate} from "react-router-dom";
import {AuthContext} from "../../FirebaseProvider/AuthProvider";
import toast from "react-hot-toast";
import {Helmet} from "react-helmet-async";

import AOS from "aos";
import "aos/dist/aos.css";
import {LuUserCircle} from "react-icons/lu";

const UpdateProfile = () => {
  const {user, updateProfileInfo} = useContext(AuthContext);

  useEffect(() => {
    AOS.init({duration: 1000});
    AOS.refresh();
  }, []);

  const userName = user.displayName;
  const email = user.email;
  const userImage = user.photoURL;

  const navigate = useNavigate();
  const location = useLocation();

  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm();

  const onSubmit = (data) => {
    const {name, photo} = data;

    updateProfileInfo(name, photo).then(() => {
      navigate(location?.state || "/update_profile");
      toast.success("Profile Updated");
    });
  };

  return (
    <div data-aos="zoom-in-up">
      <Helmet>
        <title>Update Profile | BusinessBlast</title>
      </Helmet>
      <div className="hero ">
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl text-[#1DD100] font-bold">
              Update Your Profile
            </h1>
          </div>

          <div className="card shrink-0 w-full max-w-sm ">
            <div className=" h-44 w-44 rounded-full  flex justify-center items-center ml-24">
              {userImage ? (
                <img
                  className="rounded-full h-full w-full flex justify-center items-center"
                  src={userImage}
                  alt=""
                />
              ) : (
                <LuUserCircle className="w-full h-full tex-[#12132D99] font-normal" />
              )}
            </div>
            <p className="text-center mt-4 text-xl font-semibold">
              {" "}
              {userName}{" "}
            </p>
            <p className="text-center "> {email} </p>
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
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
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  placeholder="Photo URL"
                  className="input input-bordered"
                  {...register("photo", {required: true})}
                />
                {errors.photo && (
                  <span className="text-[#FC6400] text-sm mt-1 ml-1">
                    This field is required!
                  </span>
                )}
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-[#1DD100] text-white">Update</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;
