import { useState, useEffect } from "react";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import initAuthentication from "../Firebase/FirebaseInit";
import { useHistory, useLocation } from "react-router";

// calling the initial authentication as initAuthentication function to run the authentication related firebase code
initAuthentication();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);

  // this part is for changing route of user after login 
  const location = useLocation()
  const history = useHistory();
  const redirect_url = location?.state?.from || "/";

  const auth = getAuth();

  const gAuthProvider = new GoogleAuthProvider();

  // Function for signin with google
  const googleSignin = () => {
    setLoading(true);

    signInWithPopup(auth, gAuthProvider)
      .then((result) => {
        setUser(result.user);
        history.push(redirect_url);
      })
      .finally(() => setLoading(false));
  };

  // this is a auth observer with observe all changes for the user
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setLoading(false);
    });
  }, []);

  // Log out code
  const googleSignOut = () => {
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .finally(() => setLoading(false));
  };

  return { user, loading, googleSignin, googleSignOut };
};

export default useFirebase;
