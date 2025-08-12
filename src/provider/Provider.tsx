import React, { createContext, useState } from 'react'
// import { AuthContext } from './Provider';
import app from './../firebase/firebase.config';
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, signOut}  from "firebase/auth"
import { googleProvider } from '@/lib/firebase';
type userType = {
    id:string
    name : string
    email :  string
} | null

type AuthContextType = {
    user: userType
    isLoading: boolean
} 

export const AuthContext = createContext<AuthContextType| undefined > (undefined)
const auth = getAuth(app)
const Provider = ({children}) => {

    const [user,setUser] = useState(null)
    const [isLoading,setIsLoading] = useState(false)
     const googleprovider = new GoogleAuthProvider()

    const createUser = (email, password)=> {
        setIsLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const signIn = (email,password) => {
        setIsLoading(true)
        return signInWithEmailAndPassword(auth, email,password)
    }

    const googleSignIn = () => {
        setIsLoading(true)
        return signInWithPopup(auth,googleProvider)
    }

    const logOut =  ()=> {
        setIsLoading(false)
        return signOut(auth)
    }

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

export default Provider