import { useContext, FC } from 'react';
import { AuthContext } from '../context/index';
import { Routes, Route } from 'react-router-dom';
import { privateRoutes, publicRoutes } from '../Router';

const AppRouter: FC = () => {
  const { isAuth } = useContext(AuthContext);

  return isAuth ? (
    <Routes>
      {privateRoutes.map(route => (
        <Route path={route.path} element={route.element} key={route.path} />
      ))}
    </Routes>
  ) : (
    <Routes>
      {publicRoutes.map(route => (
        <Route path={route.path} element={route.element} key={route.path} />
      ))}
    </Routes>
  );
};

export default AppRouter;
