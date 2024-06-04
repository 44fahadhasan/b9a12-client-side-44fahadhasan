import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";
import useAxiosPublic from "../hooks/useAxiosPublic";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  console.log("AuthProvider console =>", user);

  const axiosPublic = useAxiosPublic();

  useEffect(() => {
    const unSubscribe = loggedUserObserver;

    // clear observer firebase mathod
    return () => unSubscribe();
  }, [loggedUserObserver]);

  const googleProvider = new GoogleAuthProvider();

  // create a new user with email and password
  const createUserEmailAndPassword = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // login with email and password
  const userLoginEmailAndPassword = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // login with google account
  const loginWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  // set user name and profile picture
  const updateUserProfile = (displayName, photoURL) => {
    return updateProfile(auth.currentUser, {
      displayName,
      photoURL,
    });
  };

  // user logout
  const userLogOut = () => {
    return signOut(auth);
  };

  // Get the currently login user data (observer)
  var loggedUserObserver = () => {
    onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        // User is login
        setUser(currentUser);

        const userInfo = { email: currentUser?.email };

        axiosPublic.post("/jwt", userInfo).then((res) => {
          if (res?.data?.token) {
            // set token
            localStorage.setItem("token", res?.data?.token);
          }

          setLoading(false);
        });

        // login end
      } else {
        // User is logout
        setLoading(false);
        setUser(null);

        // remove token
        localStorage.removeItem("token");
        // logout end
      }
    });
  };

  // user authentication data
  const authData = {
    user,
    loading,
    createUserEmailAndPassword,
    userLoginEmailAndPassword,
    loginWithGoogle,
    updateUserProfile,
    userLogOut,
  };

  return (
    <AuthContext.Provider value={authData}>{children}</AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node,
};

export default AuthProvider;
