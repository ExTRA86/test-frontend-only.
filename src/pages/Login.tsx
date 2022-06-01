import React, { FC, useContext, useState } from 'react';
import { useForm, Resolver } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import Loader from '../components/Loader/Loader';
import { AuthContext } from '../context';
import { FormStyle } from '../styles/FormStyle';
import { usersBase } from '../UserBase';

type FormValues = {
  login: string;
  password: string;
  remember: boolean;
};

const resolver: Resolver<FormValues> = async values => {
  return {
    values: values ? values : {},
    errors: !values.login
      ? {
          login: {
            type: 'required',
            message: 'Обязательное поле',
          },
        }
      : {} && !values.password
      ? {
          password: {
            type: 'required',
            message: 'Обязательное поле',
          },
        }
      : {},
  };
};

const Login: FC = () => {
  const { setIsAuth, isLoading, setLoading } = useContext(AuthContext);
  const router = useNavigate();
  const [userError, setUserError] = useState<boolean>(false);
  const [userLogin, setUserLogin] = useState<string>();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({ resolver });
  const onSubmit = handleSubmit(data => {
    setLoading(true);

    setTimeout(() => {
      usersBase.forEach(i => {
        if (i.login === data.login && i.password === data.password) {
          setUserError(false);
          setIsAuth(true);

          if (data.remember) {
            localStorage.setItem('auth', 'true');
          }

          setLoading(false);
          router('/profile/' + i.id);
        } else {
          setUserLogin(data.login);
          setUserError(true);
          setLoading(false);
        }
      });
    }, 2000);
  });

  return (
    <FormStyle
      errorLogin={!!errors?.login}
      errorPassword={!!errors?.password}
      waiting={isLoading}
    >
      <form onSubmit={onSubmit}>
        {userError && (
          <span>
            <p>!</p> Пользователя {userLogin} не существует{' '}
          </span>
        )}

        <label htmlFor='login'>Логин</label>
        <input type='login' {...register('login')} />
        {errors?.login && <p>{errors.login.message}</p>}

        <label htmlFor='password'>Пароль</label>
        <input type='password' {...register('password')} />
        {errors?.password && <p>{errors.password.message}</p>}

        <div>
          <input type='checkbox' {...register('remember')} />
          <label>Запомнить пароль</label>
        </div>

        <button disabled={isLoading}>Войти</button>
        {isLoading && <Loader />}
      </form>
    </FormStyle>
  );
};

export default Login;