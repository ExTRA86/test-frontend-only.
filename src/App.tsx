import React, { FC, useEffect, useState } from 'react';
import { AuthContext } from './context';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter';
import Header from './components/UI/Header';
import { AppStyle } from './styles/AppStyle';

const App: FC = () => {
  const [isAuth, setIsAuth] = useState<boolean>(false);
  const [isLoading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (localStorage.getItem('auth')) {
      setIsAuth(true);
    }
    setLoading(false);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isAuth,
        setIsAuth,
        isLoading,
        setLoading,
      }}
    >
      <BrowserRouter>
        <AppStyle>
          <Header />
          <AppRouter />
        </AppStyle>
      </BrowserRouter>
    </AuthContext.Provider>
  );
};

export default App;
