import { createContext, useContext } from 'react';

export const AuthContext = createContext({
  isAuth: false,
  setIsAuth: (_value: boolean) => {},
  isLoading: false,
  setLoading: (_value: boolean) => {},
});

export const useSortContext = () => useContext(AuthContext);
