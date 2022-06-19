import React, { FC, useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Loader from '../components/Loader/Loader';
import { AuthContext } from '../context';
import { ProfileStyle } from '../styles/ProfileStyle';
import { usersBase } from '../UsersBase';

interface IUser {
  login: string;
  password: string;
  id: number;
}

const Profile: FC = () => {
  const params = useParams();
  const router = useNavigate();
  const [user, setUser] = useState<IUser>();

  const { setIsAuth, isLoading, setLoading } = useContext(AuthContext);
  const logout = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setIsAuth(false);
      localStorage.removeItem('auth');
      router('/login');
    }, 2000);
  };

  const fetchUser = () => {
    usersBase.forEach(i => {
      if (i.id === Number(params.id)) {
        setTimeout(() => {
          setUser(i);
        }, 1000);
      }
    });
  };

  useEffect(() => {
    fetchUser();
  });

  return (
    <ProfileStyle>
      {!user || isLoading ? (
        <Loader />
      ) : (
        <div>
          <p>
            Здравствуйте, <strong>{user?.login}</strong>
          </p>
          <div>
            <button onClick={logout}>Выйти</button>
          </div>
        </div>
      )}
    </ProfileStyle>
  );
};

export default Profile;
