import {
  GithubAuthProvider,
  FacebookAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import PropTypes from "prop-types";
import {createContext, useEffect, useState} from "react";
import auth from "../firebase/firebase.config";

export const AuthContext = createContext(null);

const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  // console.log(user);

  // create user
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // login user
  const login = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // login with google
  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  // login with facebook
  const facebookLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, facebookProvider);
  };

  // login with github
  const githubLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, githubProvider);
  };

  // update profile
  const updateProfileInfo = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  // log out user
  const logOut = () => {
    setUser(null);
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      // console.log("Observing current user", currentUser);
      setUser(currentUser);
      setLoading(false);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const values = {
    user,
    loading,
    createUser,
    login,
    googleLogin,
    facebookLogin,
    githubLogin,
    updateProfileInfo,
    logOut,
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

AuthProvider.propTypes = {
  children: PropTypes.node,
};

export default AuthProvider;
