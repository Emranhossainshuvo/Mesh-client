import { createContext } from "react";
import { app } from "../Firebase/firebase.config";
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth'

export const AuthContext = createContext(null); 

const auth = getAuth(app); 

const AuthProvider = ({children}) => {

    const googleProvider = new GoogleAuthProvider();

    const googleLogin = () => {
        return signInWithPopup(auth, googleProvider)
    }

    const authInfo = {
        googleLogin,
    }

    return (
        <AuthContext.Provider value={authInfo}>
        {children}    
        </AuthContext.Provider>
    );
};

export default AuthProvider;