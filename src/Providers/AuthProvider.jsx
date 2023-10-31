import { createContext, useEffect, useState } from "react";
import app from "./../Firebase/FirebaseConfig";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email,password)=>{
    setLoading(true)
   return createUserWithEmailAndPassword(auth, email, password)
  }

  const signIn =(email,password) =>{
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
  }


  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
        console.log("current User", currentUser);
        setLoading(false);
    });

    // Return the unsubscribe function directly
    return unSubscribe;
}, [auth]); // Include 'auth' in the dependency array


  const authInfo = {
    user,
    loading,
    createUser,
    signIn
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
