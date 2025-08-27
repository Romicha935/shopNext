import React, { createContext, useState, useEffect } from "react";
import app from "./../firebase/firebase.config";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  User,
  UserCredential,
  getRedirectResult,
} from "firebase/auth";

export type AuthContextType = {
  user: User | null;
  isLoading: boolean;
  createUser: (email: string, password: string) => Promise<UserCredential>;
  signIn: (email: string, password: string) => Promise<UserCredential>;
  googleSignInPopup: () => Promise<UserCredential | void>;
  googleSignInRedirect: () => void;
  logOut: () => Promise<void>;
};

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  // Create User (Email/Password)
  const createUser = (email: string, password: string) => {
    setIsLoading(true);
    return createUserWithEmailAndPassword(auth, email, password).finally(() =>
      setIsLoading(false)
    );
  };

  // Sign In (Email/Password)
  const signIn = (email: string, password: string) => {
    setIsLoading(true);
    return signInWithEmailAndPassword(auth, email, password).finally(() =>
      setIsLoading(false)
    );
  };

  // Google Sign-In (Popup)
  const googleSignInPopup = async () => {
    setIsLoading(true);
    try {
      const result = await signInWithPopup(auth, googleProvider);
      setUser(result.user);
      return result;
    } catch (error: any) {
      if (error.code === "auth/popup-closed-by-user") {
        alert("Login cancelled. Please complete the popup to sign in.");
      } else {
        console.error("Google Sign-In Error:", error);
      }
    } finally {
      setIsLoading(false);
    }
  };

  // Google Sign-In (Redirect)
  const googleSignInRedirect = () => {
    setIsLoading(true);
    signInWithRedirect(auth, googleProvider);
  };

  // Handle Redirect Result
  useEffect(() => {
    getRedirectResult(auth)
      .then((result) => {
        if (result) {
          setUser(result.user);
        }
      })
      .catch((error) => {
        console.error("Redirect Login Error:", error);
      })
      .finally(() => setIsLoading(false));
  }, []);

  // Auth State Change
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setIsLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const logOut = () => {
    setIsLoading(true);
    return signOut(auth).finally(() => setIsLoading(false));
  };

  const authInfo = {
    user,
    isLoading,
    createUser,
    signIn,
    googleSignInPopup,
    googleSignInRedirect,
    logOut,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
