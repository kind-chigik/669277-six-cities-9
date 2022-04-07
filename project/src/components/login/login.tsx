import Header from '../header/header';
import {Link, Navigate} from 'react-router-dom';
import {FormEvent, ChangeEvent, useState} from 'react';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {loginAction} from '../../store/api-actions';
import {saveUserLogin, changeCity} from '../../store/app-process/app-process';
import {getAuthorizationStatus} from '../../store/user-process/selectors';
import {AuthorizationStatus, AppRoute, RE_FOR_EMAIL, RE_FOR_NUMBER, RE_FOR_LETTER} from '../../const';
import {getRandomCity} from '../../utils/utils';

function Login(): JSX.Element {
  const [inputEmail, setInpuEmail] = useState('');
  const [inputPassword, setInputPassword] = useState('');
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const dispatch = useAppDispatch();

  const isEmailCorrect = RE_FOR_EMAIL.test(inputEmail);
  const isPasswordContainNumber = RE_FOR_NUMBER.test(inputPassword);
  const isPasswordContainLetter = RE_FOR_LETTER.test(inputPassword);

  const randomCity = getRandomCity();

  const inputEmailHandler = (evt: ChangeEvent<HTMLInputElement>) => {
    const value = evt.currentTarget.value;
    setInpuEmail(value);
  };

  const inputPasswordHandler = (evt: ChangeEvent<HTMLInputElement>) => {
    const value = evt.currentTarget.value;
    setInputPassword(value);
  };

  const clickHandle = () => {
    dispatch(changeCity(randomCity));
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (isEmailCorrect && isPasswordContainNumber && isPasswordContainLetter) {
      dispatch(loginAction({email: inputEmail, password: inputPassword}));
      dispatch(saveUserLogin(inputEmail));
    }
  };

  if (authorizationStatus === AuthorizationStatus.Auth) {
    return <Navigate to={AppRoute.Root} />;
  }

  return (
    <div className="page page--gray page--login">
      <Header isPageLogin/>
      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form className="login__form form" action="#" method="post" onSubmit={handleSubmit}>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input className="login__input form__input" type="email" name="email" placeholder="Email" value={inputEmail} onChange={inputEmailHandler} required />
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input className="login__input form__input" type="password" name="password" placeholder="Password" value={inputPassword} onChange={inputPasswordHandler} required />
              </div>
              <button className="login__submit form__submit button" type="submit">Sign in</button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item" onClick={clickHandle}>
              <Link className="locations__item-link" to={AppRoute.Root}>
                <span>{randomCity}</span>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default Login;
