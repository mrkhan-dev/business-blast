import PropTypes from "prop-types";
import {useContext} from "react";
import {AuthContext} from "../../FirebaseProvider/AuthProvider";
import {Navigate, useLocation} from "react-router-dom";

const PrivetRoute = ({children}) => {
  const {user} = useContext(AuthContext);
  const path = useLocation();

  if (!user) {
    return <Navigate to="/login" state={path?.pathname || "/"} />;
  }

  return <div>{children}</div>;
};

PrivetRoute.propTypes = {
  children: PropTypes.node,
};

export default PrivetRoute;
