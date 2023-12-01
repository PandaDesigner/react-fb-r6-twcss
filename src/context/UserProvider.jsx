import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from 'firebase/auth';

import { createContext, useState } from 'react';
import { auth } from '../config/firebase';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(false);

  const registerUser = ({ email, password }) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const loginUser = ({ email, password }) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logoutUser = () => {
    auth.signOut(auth);
    console.log('%cUsuario deslogado', 'background:red; color:white');
    return setUser(false);
  };

  return (
    <UserContext.Provider
      value={{ user, setUser, registerUser, loginUser, logoutUser }}
    >
      {children}
    </UserContext.Provider>
  );
};
