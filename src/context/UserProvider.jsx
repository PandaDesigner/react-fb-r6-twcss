import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword
} from 'firebase/auth';

import { createContext, useEffect, useState } from 'react';
import { auth } from '../config/firebase';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(false);

  useEffect(() => {
    const unsuscribe = onAuthStateChanged(auth, (users) => {
      if (users) {
        const { email, photoURL, displayName, uid } = users;
        setUser({ email, photoURL, displayName, uid });
        console.log(users);
        return;
      } else {
        return setUser(null);
      }
    });

    return () => unsuscribe;
  }, []);

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
