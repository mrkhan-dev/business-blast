import {createUserWithEmailAndPassword} from "firebase/auth";
import PropTypes from "prop-types";
import {createContext} from "react";
import auth from "../firebase/firebase.config";

export const AuthContext = createContext(null);

const createUser = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

const AuthProvider = ({children}) => {
  const values = {
    createUser,
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

AuthProvider.propTypes = {
  children: PropTypes.node,
};

export default AuthProvider;
