import { createContext } from "react";
import { app } from "../Firebase/firebase.config";
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth'
import { GithubAuthProvider } from "firebase/auth";


export const AuthContext = createContext(null); 

const auth = getAuth(app); 

const AuthProvider = ({children}) => {

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const googleLogin = () => {
        return signInWithPopup(auth, googleProvider)
    }

    const githubLogin = () => {
        return signInWithPopup(auth, githubProvider)
    }


    const authInfo = {
        googleLogin,
        githubLogin
    }

    return (
        <AuthContext.Provider value={authInfo}>
        {children}    
        </AuthContext.Provider>
    );
};

export default AuthProvider;