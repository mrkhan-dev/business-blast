import {useContext} from "react";
import {AuthContext} from "../../FirebaseProvider/AuthProvider";
import {Navigate, useLocation} from "react-router-dom";
import PropTypes from "prop-types";
import {ColorRing} from "react-loader-spinner";

const PrivetRouteUpdateProfile = ({children}) => {
  const {user, loading} = useContext(AuthContext);

  const path = useLocation();

  if (loading) {
    return (
      <div className="flex justify-center items-center mt-80">
        <ColorRing
          visible={true}
          height="80"
          width="80"
          ariaLabel="color-ring-loading"
          wrapperStyle={{}}
          wrapperClass="color-ring-wrapper"
          colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
        />
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/login" state={path?.pathname || "/"} />;
  }

  return <div>{children}</div>;
};

PrivetRouteUpdateProfile.propTypes = {
  children: PropTypes.node,
};

export default PrivetRouteUpdateProfile;
