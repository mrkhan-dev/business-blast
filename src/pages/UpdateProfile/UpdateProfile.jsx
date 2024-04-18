import {useContext} from "react";
import {useForm} from "react-hook-form";
import {useLocation, useNavigate} from "react-router-dom";
import {AuthContext} from "../../FirebaseProvider/AuthProvider";
import toast from "react-hot-toast";

const UpdateProfile = () => {
  const {user, updateProfileInfo} = useContext(AuthContext);

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
    <div className="hero ">
      <div className="hero-content flex-col">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Update Your Profile</h1>
        </div>

        <div className="card shrink-0 w-full max-w-sm ">
          <div className=" h-80 w-80 rounded-full border justify-center items-center ml-8">
            <img
              className="rounded-full h-full w-full flex justify-center items-center"
              src={userImage}
              alt=""
            />
          </div>
          <p className="text-center mt-4"> {userName} </p>
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
              <button className="btn btn-primary">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;
