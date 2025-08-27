import React, { createContext, useState } from 'react'
// import { AuthContext } from './Provider';
import app from './../firebase/firebase.config';
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, signOut, User, UserCredential}  from "firebase/auth"



// type userType = {
//     id:string
//     name : string
//     email :  string
// } | null

export type AuthContextType = {
     user: User | null
    
    isLoading: boolean
     createUser: (email: string, password: string) => Promise<UserCredential>;
  signIn: (email: string, password: string) => Promise<UserCredential>;
  googleSignIn: () => Promise<UserCredential>;
  logOut: () => Promise<void>;
} 

export const AuthContext = createContext<AuthContextType| undefined > (undefined)
const auth = getAuth(app)
const AuthProvider = ({children}: { children: React.ReactNode }) => {

    const [user,setUser] = useState<User |null>(null)
    const [isLoading,setIsLoading] = useState(false)
     const googleProvider = new GoogleAuthProvider()

    const createUser = (email: string, password: string) => {
  setIsLoading(true);
  return createUserWithEmailAndPassword(auth, email, password)
    .finally(() => setIsLoading(false));
};

const signIn = (email: string, password: string) => {
  setIsLoading(true);
  return signInWithEmailAndPassword(auth, email, password)
    .finally(() => setIsLoading(false));
};

const googleSignIn = () => {
  setIsLoading(true);
  return signInWithPopup(auth, googleProvider)
    .finally(() => setIsLoading(false));
};

const logOut = () => {
  setIsLoading(true);
  return signOut(auth)
    .finally(() => setIsLoading(false));
};


   
  React.useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser)
      setIsLoading(false)
    })
    return () => unsubscribe()
  }, [auth])

    const authInfo = {
        user,
        isLoading,
        createUser,
        signIn,
        googleSignIn,
        logOut,
    }
  return (
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider