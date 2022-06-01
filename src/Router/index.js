import Login from '../pages/Login.tsx';
import Profile from '../pages/Profile';

export const privateRoutes = [
  { path: '/', element: <Login /> },
  { path: '/profile/:id', element: <Profile /> },
  { path: '/login', element: <Login /> },
  { path: '*', element: <Login /> },
];

export const publicRoutes = [
  { path: '/login', element: <Login /> },
  { path: '*', element: <Login /> },
];
