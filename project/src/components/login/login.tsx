import Header from '../header/header';
import {Link} from 'react-router-dom';
import {FormEvent, ChangeEvent, useState} from 'react';
import {useAppDispatch} from '../../hooks';
import {loginAction} from '../../store/api-actions';
import {useAppSelector} from '../../hooks';
import {AuthorizationStatus, AppRoute} from '../../const';
import {Navigate} from 'react-router-dom';

function Login(): JSX.Element {
  const [inputEmail, setInpuEmail] = useState('');
  const [inputPassword, setInputPassword] = useState('');
  const {authorizationStatus} = useAppSelector((state)=> state);
  const dispatch = useAppDispatch();

  const inputEmailHandler = (evt: ChangeEvent<HTMLInputElement>) => {
    const value = evt.currentTarget.value;
    setInpuEmail(value);
  };

  const inputPasswordHandler = (evt: ChangeEvent<HTMLInputElement>) => {
    const value = evt.currentTarget.value;
    setInputPassword(value);
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (inputEmail !== '' && inputPassword !== '') {
      dispatch(loginAction({email: inputEmail, password: inputPassword}));
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
            <div className="locations__item">
              <Link className="locations__item-link" to="#">
                <span>Amsterdam</span>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default Login;
